import { tool } from "@langchain/core/tools";
import { execaCommand, ExecaSyncError } from "execa";

const executeCommand = tool(
  async ({ command }) => {
    console.log(`Executing command: ${command}`);
    try {
      const { all } = await execaCommand(command, { shell: true, all: true });

      let result = all.trim();

      if (result.length > 10000) {
        result = result.slice(0, 10000) + "\n\n...truncated...";
      }

      //console.log(`Command output: ${result}`);

      return result;
    } catch (error) {
      if (error instanceof ExecaSyncError) {
        console.error(`Command failed: ${command}`);
        const errorMessage = `Command failed with exit code ${error.exitCode}: ${command}\n\nError: ${error.stderr || error.message}\n\nTip: If using git commands with options and file paths, make sure options (like --stat) come before file paths (like index.mjs).`;
        console.log(`Command error: ${errorMessage}`);
        return errorMessage;
      }

      throw error;
    }
  },
  {
    name: "execute",
    description: "Execute a command line command",
    schema: {
      type: "object",
      properties: {
        command: { type: "string", description: "Command to execute" },
      },
      required: ["command"],
      additionalProperties: false,
    },
  },
);

export default executeCommand;
