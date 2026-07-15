package examples;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;
import dev.langchain4j.model.anthropic.AnthropicChatModel;
import dev.langchain4j.model.chat.ChatModel;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.LinkedHashMap;
import java.util.Map;

public class Translation {

  private static final ChatModel model =
      AnthropicChatModel.builder()
          .apiKey(System.getenv("ANTHROPIC_API_KEY"))
          .modelName("claude-opus-4-8")
          .build();

  private static final Gson gson = new GsonBuilder().setPrettyPrinting().create();

  static String translate(String text, String language) {
    return model.chat(
        "You are a helpful assistant that translates text from English to "
            + language
            + ".\n"
            + "Translate the given text to "
            + language
            + ". Return only the translated text, no other text.\n\n"
            + text);
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

    for (var entry : en.entrySet()) {
      if (!de.containsKey(entry.getKey())) {
        de.put(entry.getKey(), translate(entry.getValue(), "de"));
      }
    }

    System.out.println(gson.toJson(Map.of("en", en, "de", de)));
  }
}
