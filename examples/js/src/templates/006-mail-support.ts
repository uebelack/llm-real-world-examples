import { ChatAnthropic } from "@langchain/anthropic";
import * as z from "zod";

const mailSchema = z.object({
  subject: z.string(),
  message: z.string(),
});

const model = new ChatAnthropic({
  model: "claude-sonnet-4-6",
}).withStructuredOutput(mailSchema);

async function answerSupportMail(subject: string, message: string) {
  const response = await model.invoke([
    {
      role: "user",
      content: `Answer the support mail with the subject "${subject}" and the message "${message}".`,
    },
  ]);
  console.log(response.subject);
  console.log(response.message);
}

answerSupportMail(
  "Cancel Subscription",
  "Hi, Cancel my subscription of the letter app. Now. Today. Immediately! No Regards, Donald",
);
