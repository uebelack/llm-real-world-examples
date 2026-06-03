import { ChatAnthropic } from "@langchain/anthropic";

const model = new ChatAnthropic({
  model: "claude-sonnet-4-6",
});

async function answerSupportMail(subject: string, message: string) {
  const response = await model.invoke([
    {
      role: "user",
      content: `Answer the support mail with the subject "${subject}" and the message "${message}".`,
    },
  ]);
  console.log(response.content);
}

answerSupportMail(
  "Cancel Subscription",
  "Hi, Cancel my subscription of the letter app. Now. Today. Immediately! No Regards, Donald",
);
