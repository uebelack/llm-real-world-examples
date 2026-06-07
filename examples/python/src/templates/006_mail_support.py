import asyncio
from langchain_anthropic import ChatAnthropic
from pydantic import BaseModel


class MailResponse(BaseModel):
    subject: str
    message: str


model = ChatAnthropic(model="claude-opus-4-8").with_structured_output(MailResponse)


async def answer_support_mail(subject: str, message: str):
    response = await model.ainvoke([
        {
            "role": "system",
            "content": "You are a helpful assistant that answers support mails. Please create a response for the given mail.",
        },
        {
            "role": "user",
            "content": f"Subject: {subject}\nMessage: {message}",
        },
    ])
    print(response.subject)
    print(response.message)


asyncio.run(answer_support_mail(
    "Cancel Subscription",
    "Hi, Cancel my subscription of the letter app. Now. Today. Immediately! No Regards, Donald",
))
