import fs from "fs";
import { ChatAnthropic } from "@langchain/anthropic";
import * as lancedb from "@lancedb/lancedb";
import { v4 as uuidv4 } from "uuid";
import { OllamaEmbeddings } from "@langchain/ollama";

const embeddings = new OllamaEmbeddings({
  model: "qwen3-embedding:0.6b",
});

async function connectToLancedb() {
  const db = await lancedb.connect("lancedb.db");
  return db;
}

async function populateData(): Promise<lancedb.Table> {
  const db = await connectToLancedb();

  const data: { id: string; content: string; vector: number[] }[] = [];

  await Promise.all(
    fs.readdirSync("../../support_mails").map(async (file) => {
      const content = fs.readFileSync(`../../support_mails/${file}`, "utf8");
      const vector = await embeddings.embedQuery(content);
      data.push({ id: uuidv4(), content: content, vector: vector });
    }),
  );

  console.log(`Found ${data.length} support mails`);

  return await db.createTable("support_mails", data, {
    mode: "overwrite",
  });
}

const model = new ChatAnthropic({
  model: "claude-sonnet-4-6",
});

async function answerSupportMail(subject: string, message: string) {
  const table = await populateData();

  const vector = await embeddings.embedQuery(message);
  const result = await table.search(vector).limit(2).toArray();

  const content = result.map((r: { content: string }) => r.content).join("\n");

  const response = await model.invoke([
    {
      role: "system",
      content: `You are a helpful assistant that answers support mails.
      The following are support mails that are similar to the message:
      ${content}
      Answer the question based on the support mails.`,
    },
    {
      role: "user",
      content: `Subject: ${subject}\n\nMessage: ${message}`,
    },
  ]);

  console.log(response.content.toString());
}

answerSupportMail(
  "Cancel Subscription",
  "Hi, Cancel my subscription of the letter app. Now. Today. Immediately!No Regards, Donald",
);
