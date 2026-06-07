import asyncio
from langchain_anthropic import ChatAnthropic
from langchain.agents import create_agent
from tools.execute_command import execute

model = ChatAnthropic(model="claude-opus-4-8")

agent = create_agent(model=model, tools=[execute])


async def main():
    response = await agent.ainvoke({
        "messages": [
            {
                "role": "user",
                "content": "Please generate a commit message for the current changes in the current directory using the provided tools.",
            }
        ]
    })
    print(response["messages"][-1].content)


asyncio.run(main())
