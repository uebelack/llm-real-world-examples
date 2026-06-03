import fs from "fs/promises";

async function translate(text: string, language: string): Promise<string> {
  return "-";
}

async function updateTranslations() {
  const translations = {
    en: JSON.parse(await fs.readFile("public/locales/en.json", "utf8")),
    de: JSON.parse(await fs.readFile("public/locales/de.json", "utf8")),
  };

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
