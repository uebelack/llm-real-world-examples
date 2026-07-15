package examples;

import dev.langchain4j.agent.tool.Tool;
import dev.langchain4j.model.anthropic.AnthropicChatModel;
import dev.langchain4j.service.AiServices;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class Weather {

  static class WeatherTools {
    @Tool("Get the current weather for a given latitude and longitude")
    String weather(double latitude, double longitude) throws Exception {
      var client = HttpClient.newHttpClient();
      var request =
          HttpRequest.newBuilder()
              .uri(
                  URI.create(
                      "https://api.open-meteo.com/v1/forecast?latitude="
                          + latitude
                          + "&longitude="
                          + longitude
                          + "&current_weather=true"))
              .build();
      var response = client.send(request, HttpResponse.BodyHandlers.ofString());
      return response.body();
    }
  }

  interface WeatherAgent {
    String chat(String message);
  }

  public static void main(String[] args) {
    var model =
        AnthropicChatModel.builder()
            .apiKey(System.getenv("ANTHROPIC_API_KEY"))
            .modelName("claude-opus-4-8")
            .build();

    var agent =
        AiServices.builder(WeatherAgent.class).chatModel(model).tools(new WeatherTools()).build();

    var response = agent.chat("What is the weather in Antwerp?");
    System.out.println(response);
  }
}
