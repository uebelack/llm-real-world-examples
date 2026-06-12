import fs from "fs";
import * as lancedb from "@lancedb/lancedb";
import { OllamaEmbeddings } from "@langchain/ollama";

type Document = {
  id: string;
  content: string;
  vector: number[];
};

const embeddings = new OllamaEmbeddings({
  model: "qwen3-embedding:0.6b",
});

async function addDocument(
  files: string[],
  data: Document[],
  index: number = 0,
): Promise<void> {
  const filePath = `../support_mails/${files[index]}`;
  console.log(`Loading document: ${filePath}`);
  const content = fs.readFileSync(filePath, "utf8");
  const vector = await embeddings.embedQuery(content);
  data.push({ id: files[index], content: content, vector: vector });
  if (index < files.length - 1) {
    await addDocument(files, data, index + 1);
  }
}

async function populateData(): Promise<lancedb.Table> {
  const files = fs.readdirSync("../support_mails");
  const data: Document[] = [];
  await addDocument(files, data);
  console.log(`Loaded ${data.length} documents`);
  const db = await lancedb.connect("lancedb.db");
  return await db.createTable("support_mails", data, {
    mode: "overwrite",
  });
  console.log(`Created table with ${data.length} documents`);
}

populateData();
