import fs from "fs/promises";
import { createAgent } from "langchain/agents";
import { ChatAnthropic } from "@langchain/anthropic";

const model = new ChatAnthropic({
  model: "claude-sonnet-4-6",
});

async function generateCommitMessage(directory: string): Promise<string> {
  return "test";
}
