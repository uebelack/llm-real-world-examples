import { createAgent } from "langchain";
import { ChatAnthropic } from "@langchain/anthropic";
import executeCommand from "./tools/executeCommand";

const model = new ChatAnthropic({
  model: "claude-sonnet-4-6",
});

const agent = createAgent({
  model: model,
  tools: [executeCommand],
});

async function main() {
  const response = await agent.invoke({
    messages: [
      {
        role: "user",
        content:
          "Please generate a commit message for the current changes in the current directory using the provided tools.",
      },
    ],
  });

  console.log(response.messages[response.messages.length - 1].content);
}

main();
