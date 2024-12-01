import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize GoogleGenerativeAI with the API key from the environment variables
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY); // Ensure you're using VITE_GEMINI_API_KEY if you're using Vite or similar
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function processTitleMood(article) {
  console.log("API Key:", import.meta.env.VITE_GEMINI_API_KEY); // Log the API Key for debugging purposes

  const prompt = `For this article:
    The title is: ${article.title}.
    The description is: ${article.description}. 
    Please give a score based on sentiment analysis, ranging from 0 to 10,
    where 0 is the most friendly, supportive, and empathetic, and 10 is the most aggressive and charged. 
    Return only the score as a number, with no additional explanations.`;

  try {
    const result = await model.generateContent({ prompt });
    const answer = result.response.text(); // Adjust this based on how the result is structured in the response
    console.log("Sentiment score:", answer);
    return parseFloat(answer); // Assuming the result is a string, parse it as a number
  } catch (error) {
    console.error("Error in processing title mood:", error);
    return null; // Return null or a default value in case of error
  }
}

export async function changeMood(data) {
  const prompt = `I will give you a title and a news story. Your task is to make them both calmer, more empathetic, and more positive, without losing any important facts. 
    The title is: ${data.title}.
    The description is: ${data.description}.
    Return the new title and description as a JSON object in this format:
    {
        title: <new updated title here>,
        description: <new updated description here>
    }
    Only return the JSON object, with no additional text, explanations, or markdown.`;

  try {
    const result = await model.generateContent({ prompt });
    const answer = result.response.text().trim();
    return JSON.parse(answer); // Assuming the result is a JSON string, parse it
  } catch (error) {
    console.error("Error in processing mood change:", error);
    return null; // Return null in case of an error
  }
}
