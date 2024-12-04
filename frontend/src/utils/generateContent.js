
import { GoogleGenerativeAI } from "@google/generative-ai"

const generateMessage = async (inputValue) => {
    console.log("this is a initial value==>", inputValue);

    const genAI = new GoogleGenerativeAI("AIzaSyCyO6UVz7M_1advylCkZFUBotWhmI5IHBk");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = inputValue
        ? `Please give a detailed, accurate, and correct response to the following question or statement. Answer should be clear and actionable, and please provide a structured response (such as bullet points or numbered list). The question is:  ${inputValue}` : null;
    const result = await model.generateContent(prompt);
    console.log("result", result.response.text);
    return result.response.text;

}

export default generateMessage;