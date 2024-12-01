import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize GoogleGenerativeAI with the API key from environment variables
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function changeMood(data) {
  const prompt = `I will give you a title and a news story. You need to make them both calmer, more empathetic, and more positive — without losing any of the important existing facts. 
  The title is: ${data.title}.
  The description is: ${data.description}.
  The calmness level is: ${data.calmnessLevel}. 
  The higher the calmness level, the more empathetic and soothing the tone should be.
  
  Return the new values as an object in this format: {
      title: <new updated title here>,
      description: <new updated description here>
  }.
  Return ONLY this object, without any additional text or explanations. Don't add anything before or after the {} of the object. Don't return markdown.`;

  try {
    const result = await model.generateContent({
      messages: [{ content: prompt }],
    });
    const answer = result.choices[0].message.content.trim(); // Access the correct response field

    return JSON.parse(answer);
  } catch (error) {
    console.error(`Error processing mood change: ${error.message}`);
    // Handle the error, e.g., retry, log, or notify the user
    throw error; // Re-throw the error to propagate it to the calling function
  }
}
