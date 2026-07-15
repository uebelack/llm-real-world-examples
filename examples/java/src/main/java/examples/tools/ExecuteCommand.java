package examples.tools;

import dev.langchain4j.agent.tool.Tool;
import java.io.BufferedReader;
import java.io.InputStreamReader;

public class ExecuteCommand {

  @Tool("Execute a command line command")
  public String execute(String command) {
    System.out.println("Executing command: " + command);
    try {
      var process = new ProcessBuilder("sh", "-c", command).redirectErrorStream(true).start();

      var output = new StringBuilder();
      try (var reader =
          new BufferedReader(new InputStreamReader(process.getInputStream()))) {
        String line;
        while ((line = reader.readLine()) != null) {
          output.append(line).append("\n");
        }
      }
      process.waitFor();

      var result = output.toString().trim();
      if (result.length() > 10000) {
        result = result.substring(0, 10000) + "\n\n...truncated...";
      }
      return result;
    } catch (Exception e) {
      var errorMessage =
          "Command failed: "
              + command
              + "\n\n"
              + "Error: "
              + e.getMessage()
              + "\n\n"
              + "Tip: If using git commands with options and file paths, "
              + "make sure options (like --stat) come before file paths (like index.mjs).";
      System.out.println("Command error: " + errorMessage);
      return errorMessage;
    }
  }
}
