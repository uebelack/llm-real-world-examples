package examples;

import dev.langchain4j.data.segment.TextSegment;
import dev.langchain4j.model.anthropic.AnthropicChatModel;
import dev.langchain4j.model.ollama.OllamaEmbeddingModel;
import dev.langchain4j.service.AiServices;
import dev.langchain4j.store.embedding.EmbeddingSearchRequest;
import dev.langchain4j.store.embedding.inmemory.InMemoryEmbeddingStore;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.stream.Collectors;

public class MailSupport {

  record MailResponse(String subject, String message) {}

  interface MailSupportAgent {
    MailResponse answer(String prompt);
  }

  public static void main(String[] args) throws IOException {
    var model =
        AnthropicChatModel.builder()
            .apiKey(System.getenv("ANTHROPIC_API_KEY"))
            .modelName("claude-opus-4-8")
            .build();

    var embeddingModel =
        OllamaEmbeddingModel.builder()
            .modelName("qwen3-embedding:0.6b")
            .baseUrl("http://localhost:11434")
            .build();

    // Load and embed support mails
    var embeddingStore = new InMemoryEmbeddingStore<TextSegment>();
    Files.list(Path.of("../support_mails"))
        .forEach(
            file -> {
              try {
                var content = Files.readString(file);
                var embedding = embeddingModel.embed(content).content();
                embeddingStore.add(embedding, TextSegment.from(content));
              } catch (IOException e) {
                throw new RuntimeException(e);
              }
            });

    // Search for similar mails
    var subject = "Cancel Subscription";
    var message =
        "Hi, Cancel my subscription of the letter app. Now. Today. Immediately! No Regards, Donald";

    var queryEmbedding = embeddingModel.embed(subject + " " + message).content();
    var results =
        embeddingStore.search(
            EmbeddingSearchRequest.builder().queryEmbedding(queryEmbedding).maxResults(5).build());

    var context =
        results.matches().stream()
            .map(match -> match.embedded().text())
            .collect(Collectors.joining("\n\n"));

    var agent = AiServices.builder(MailSupportAgent.class).chatModel(model).build();

    var response =
        agent.answer(
            "Answer the support mail with the subject \""
                + subject
                + "\" and the message \""
                + message
                + "\". Here are some similar support mails, use them as a reference: "
                + context);

    System.out.println(response.subject());
    System.out.println(response.message());
  }
}
