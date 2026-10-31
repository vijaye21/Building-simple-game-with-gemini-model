
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function main() {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-4-argon",
      contents: "Explain what an API is in simple words.",
    });

    console.log(response.text);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

main();
