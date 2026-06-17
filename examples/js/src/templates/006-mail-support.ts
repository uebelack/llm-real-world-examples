import { ChatAnthropic } from "@langchain/anthropic";
import * as z from "zod";

const mailSchema = z.object({
  subject: z.string("The subject of the mail"),
  message: z.string("The message of the mail"),
});

const model = new ChatAnthropic({
  model: "claude-opus-4-8",
}).withStructuredOutput(mailSchema);

async function answerSupportMail(subject: string, message: string) {
  const response = await model.invoke([
    {
      role: "system",
      content: `You are a helpful assistant that answers support mails. 
        Please create a response for the given mail.`,
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
