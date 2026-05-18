import fs from "fs/promises";
import { ChatAnthropic } from "@langchain/anthropic";

const model = new ChatAnthropic({
  model: "claude-sonnet-4-6",
});

async function translate(text: string, language: string): Promise<string> {
  const response = await model.invoke([
    {
      role: "system",
      content: `You are a helpful assistant that translates text from English to German.
      Translate the given text to German. Return only the translated text, no other text.`,
    },
    {
      role: "user",
      content: text,
    },
  ]);
  return response.content.toString();
}

async function updateTranslations() {
  const translations = {
    en: JSON.parse(await fs.readFile("public/locales/en.json", "utf8")),
    de: JSON.parse(await fs.readFile("public/locales/de.json", "utf8")),
  };

  console.log(translations);

  await Promise.all(
    Object.keys(translations.en).map(async (key) => {
      const enTranslation = translations.en[key];
      if (!translations.de[key]) {
        translations.de[key] = await translate(enTranslation, "de");
      }
    }),
  );

  console.log(translations);
  // TODO: implement write to file
}

updateTranslations();
