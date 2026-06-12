import { ChatAnthropic } from "@langchain/anthropic";
import * as lancedb from "@lancedb/lancedb";
import { OllamaEmbeddings } from "@langchain/ollama";

import * as z from "zod";

const mailSchema = z.object({
  subject: z.string(),
  message: z.string(),
});

const model = new ChatAnthropic({
  model: "claude-opus-4-8",
}).withStructuredOutput(mailSchema);

const embeddings = new OllamaEmbeddings({
  model: "qwen3-embedding:0.6b",
});

async function answerSupportMail(subject: string, message: string) {
  const vector = await embeddings.embedQuery(`${subject} ${message}`);
  const db = await lancedb.connect("lancedb.db");
  const table = await db.openTable("support_mails");
  const results = await table.search(vector).limit(5).toArray();

  const context = results.map((result) => result.content).join("\n\n");

  const response = await model.invoke([
    {
      role: "system",
      content: `You are a helpful assistant that answers support mails. 
        Please create a response for the given mail. 
        Create a response using the following similar support mails as a reference:\n\n${context}`,
    },
    {
      role: "user",
      content: `Subject: ${subject}\nMessage: ${message}`,
    },
  ]);
  console.log(response.subject);
  console.log(response.message);
}

answerSupportMail(
  "Cancel Subscription",
  "Hi, Cancel my subscription of the letter app. Now. Today. Immediately! No Regards, Donald",
);
