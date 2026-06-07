import asyncio
import lancedb
from langchain_anthropic import ChatAnthropic
from langchain_ollama import OllamaEmbeddings
from pydantic import BaseModel

class MailResponse(BaseModel):
    subject: str
    message: str


model = ChatAnthropic(model="claude-opus-4-8").with_structured_output(MailResponse)

embeddings = OllamaEmbeddings(model="qwen3-embedding:0.6b")


async def answer_support_mail(subject: str, message: str):
    vector = await embeddings.aembed_query(f"{subject} {message}")
    db = await lancedb.connect_async("lancedb.db")
    table = await db.open_table("support_mails")
    query = await table.search(vector)
    results = await query.limit(5).to_list()

    context = "\n\n".join(row["content"] for row in results)

    response = await model.ainvoke([
        {
            "role": "user",
            "content": f'Answer the support mail with the subject "{subject}" and the message "{message}". '
                       f"Here are some similar support mails, use them as a reference: {context}",
        }
    ])
    print(response.subject)
    print(response.message)


asyncio.run(answer_support_mail(
    "Cancel Subscription",
    "Hi, Cancel my subscription of the letter app. Now. Today. Immediately! No Regards, Donald",
))
