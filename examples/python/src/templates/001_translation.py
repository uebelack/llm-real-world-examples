import json
import asyncio


async def translate(text: str, language: str) -> str:
    return "-"


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

    print({"en": en, "de": de})
    # TODO: implement write to file


asyncio.run(update_translations())
