import os
import asyncio
import uuid
import lancedb
from langchain_ollama import OllamaEmbeddings

embeddings = OllamaEmbeddings(model="qwen3-embedding:0.6b")


async def add_documents(files: list[str], data: list[dict], index: int = 0):
    file_path = os.path.join("../support_mails", files[index])
    print(f"Loading document: {file_path}")
    with open(file_path, "r") as f:
        content = f.read()
    vector = await embeddings.aembed_query(content)
    data.append({"id": str(uuid.uuid4()), "content": content, "vector": vector})
    if index < len(files) - 1:
        await add_documents(files, data, index + 1)


async def populate_data():
    files = os.listdir("../support_mails")
    data: list[dict] = []
    await add_documents(files, data)
    print(f"Loaded {len(data)} documents")
    db = await lancedb.connect_async("lancedb.db")
    table = await db.create_table("support_mails", data, mode="overwrite")
    print(f"Created table with {len(data)} documents")


asyncio.run(populate_data())
