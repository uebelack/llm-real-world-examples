package examples;

import dev.langchain4j.model.anthropic.AnthropicChatModel;
import dev.langchain4j.service.AiServices;
import examples.tools.ExecuteCommand;

public class GitCommitMessage {

  interface CommitMessageAgent {
    String chat(String message);
  }

  public static void main(String[] args) {
    var model =
        AnthropicChatModel.builder()
            .apiKey(System.getenv("ANTHROPIC_API_KEY"))
            .modelName("claude-opus-4-8")
            .build();

    var agent =
        AiServices.builder(CommitMessageAgent.class)
            .chatModel(model)
            .tools(new ExecuteCommand())
            .build();

    var response =
        agent.chat(
            "Please generate a commit message for the current changes in the current directory using the provided tools.");

    System.out.println(response);
  }
}
