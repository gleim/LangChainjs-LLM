# LangChain.js LLM

This is LangChain LLM framework to train custom AI.

## Setup
1. Provide all the information you want your LLM to be trained on in the `training` directory in markdown files.  Folder depth doesn't matter.
2. Add your OpenAI API key in environment vars via the kay `OPENAI_API_KEY`.
3. Run `yarn train` or `npm train` to set up your vector store.
4. Modify the base prompt in `lib/basePrompt.js`
5. Run index.js, and start playing around with it!


[![Run on Repl.it](https://replit.com/badge/github/Conner1115/LangChain.js-LLM-Template)](https://replit.com/new/github/Conner1115/LangChain.js-LLM-Template)