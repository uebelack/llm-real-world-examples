#! /bin/bash

rm -rf examples/js/src/lancedb.db

cp examples/js/src/templates/001-translation.ts examples/js/src/
cp examples/js/src/templates/005-git-commit-message.ts examples/js/src/
cp examples/js/src/templates/006-mail-support.ts examples/js/src/

cursor .

cd ../babeli

cursor .

cd ../tossitin

cursor .

open https://eu.smith.langchain.com/

cd ../llm-real-world-examples/slides/js-de

pnpm dev
