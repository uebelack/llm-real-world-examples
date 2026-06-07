import asyncio
import httpx
from langchain_anthropic import ChatAnthropic
from langchain_core.tools import tool
from langchain.agents import create_agent

model = ChatAnthropic(model="claude-opus-4-8")


@tool
async def weather(latitude: float, longitude: float) -> dict:
    """Get the current weather for a given latitude and longitude"""
    async with httpx.AsyncClient() as client:
        response = await client.get(
            "https://api.open-meteo.com/v1/forecast",
            params={"latitude": latitude, "longitude": longitude, "current_weather": "true"},
        )
        return response.json()


agent = create_agent(model=model, tools=[weather])


async def main():
    response = await agent.ainvoke(
        {"messages": [{"role": "user", "content": "What is the weather in Zürich?"}]}
    )
    print(response["messages"][-1].content)


asyncio.run(main())
