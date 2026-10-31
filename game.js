
import { GoogleGenAI } from "@google/genai";
import fs from "node:fs";
import { exec } from "node:child_process";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function main() {
  const response = await ai.interactions.create({
    model: "gemini-3.8-flash",
    input: `Create a simple number guessing game using HTML,
CSS, and JavaScript. Return only complete HTML code.
Include a button to check the guess and display the result.`,
  });

  const html = response.output_text
    .replace(/^```html\s*/i, "")
    .replace(/\s*```$/, "");

  fs.writeFileSync("game.html", html, "utf8");

  console.log("Game created successfully!");

  exec('start "" game.html');
}

main().catch((error) => {
  console.error("Error:", error.message);
});
