#! /bin/bash

rm -rf examples/js/src/lancedb.db

cp examples/js/src/templates/001-translation.ts examples/js/src/
cp examples/js/src/templates/005-git-commit-message.ts examples/js/src/
cp examples/js/src/templates/006-mail-support.ts examples/js/src/

cursor .

cd ../babeli

cursor .

open https://ollama.com/
open https://eu.smith.langchain.com/
open https://llm-real-world-examples-de.vercel.app/