import json
import asyncio
from langchain_ollama import ChatOllama

model = ChatOllama(model="qwen3.5:latest", think=False)

async def translate(text: str, language: str) -> str:
    response = await model.ainvoke([
        {
            "role": "system",
            "content": "You are a helpful assistant that translates text from English to German.\n"
                       "Translate the given text to German. Return only the translated text, no other text.",
        },
        {
            "role": "user",
            "content": text,
        },
    ])
    return response.content


async def update_translations():
    with open("locales/en.json", "r") as f:
        en = json.load(f)
    with open("locales/de.json", "r") as f:
        de = json.load(f)

    tasks = []
    keys_to_translate = []
    for key in en:
        if key not in de:
            keys_to_translate.append(key)
            tasks.append(translate(en[key], "de"))

    results = await asyncio.gather(*tasks)
    for key, result in zip(keys_to_translate, results):
        de[key] = result

    print(json.dumps({"en": en, "de": de}, indent=4))
    # TODO: implement write to file


asyncio.run(update_translations())
