import generateResponse from "./lib/generateResponse.js";
import promptSync from 'prompt-sync';

const prompt = promptSync();

const conversationHistory = [];

while (true) {
  const question = prompt("Ask a question >");
  const answer = await generateResponse({
    prompt: question,
    history: conversationHistory
  });

  console.log(`Bill Gleim: ${answer}\n`);
  
  conversationHistory.push(`Human: ${question}`, `Bill Gleim: ${answer}`)
}