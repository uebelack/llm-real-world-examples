package examples;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;
import dev.langchain4j.data.message.SystemMessage;
import dev.langchain4j.data.message.UserMessage;
import dev.langchain4j.model.chat.ChatModel;
import dev.langchain4j.model.chat.request.ChatRequest;
import dev.langchain4j.model.ollama.OllamaChatModel;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.time.Duration;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public class TranslationOllama {

  private static final ChatModel model =
      OllamaChatModel.builder()
          .modelName("qwen3.5:latest")
          .baseUrl("http://localhost:11434")
          .think(false)
          .timeout(Duration.ofMinutes(5))
          .build();

  private static final Gson gson = new GsonBuilder().setPrettyPrinting().create();

  static String translate(String text, String language) {
    System.out.println("Translating " + text + " to " + language);
    var response =
        model.chat(
            ChatRequest.builder()
                .messages(
                    List.of(
                        SystemMessage.from(
                            "You are a helpful assistant that translates text from English to German.\n"
                                + "Translate the given text to German. Return only the translated text, no other text."),
                        UserMessage.from(text)))
                .build());
    return response.aiMessage().text();
  }

  public static void main(String[] args) throws IOException {
    Map<String, String> en =
        gson.fromJson(
            Files.readString(Path.of("locales/en.json")),
            new TypeToken<LinkedHashMap<String, String>>() {}.getType());
    Map<String, String> de =
        gson.fromJson(
            Files.readString(Path.of("locales/de.json")),
            new TypeToken<LinkedHashMap<String, String>>() {}.getType());

    System.out.println(gson.toJson(Map.of("en", en, "de", de)));

    for (var entry : en.entrySet()) {
      if (!de.containsKey(entry.getKey())) {
        de.put(entry.getKey(), translate(entry.getValue(), "de"));
      }
    }

    System.out.println(gson.toJson(Map.of("en", en, "de", de)));
  }
}
