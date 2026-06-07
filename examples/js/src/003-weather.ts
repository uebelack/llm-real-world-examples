import { tool } from "@langchain/core/tools";
import { ChatAnthropic } from "@langchain/anthropic";
import { createAgent } from "langchain";

const model = new ChatAnthropic({
  model: "claude-opus-4-8",
});

const weatherTool = tool(
  async ({ latitude, longitude }) => {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`,
    );
    const data = await response.json();
    return data;
  },
  {
    name: "weather",
    description: "Get the current weather for a given latitude and longitude",
    schema: {
      type: "object",
      properties: {
        latitude: { type: "number", description: "Latitude of the location" },
        longitude: { type: "number", description: "Longitude of the location" },
      },
      required: ["latitude", "longitude"],
      additionalProperties: false,
    },
  },
);

const agent = createAgent({
  model: model,
  tools: [weatherTool],
});

const response = await agent.invoke({
  messages: [{ role: "user", content: "What is the weather in Mannheim?" }],
});

console.log(response.messages[response.messages.length - 1].content);
