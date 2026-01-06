* keep context short, 
* small tasks
* use cache (lib diskcache for example)
* use retries for structured responses
* use langchain chains to handle 429
* never expect that the llm does what u ask it to do (e.g. limit number of calls to tools)
* verify your result, check the data!
* write integration tests!