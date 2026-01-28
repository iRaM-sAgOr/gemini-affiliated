
import { GoogleGenAI, Type } from "@google/genai";

// Initialize the GoogleGenAI client using the provided environment variable API_KEY.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getSmartProductInsights = async (productName: string, category: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide 3 futuristic marketing hooks and a target demographic analysis for a product called "${productName}" in the "${category}" category. Format as JSON with keys: "hooks" (array of strings) and "targetDemographic" (string).`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            hooks: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            targetDemographic: { type: Type.STRING }
          },
          required: ["hooks", "targetDemographic"]
        }
      }
    });

    // Access the text property directly from the response.
    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("AI Insights Error:", error);
    return { hooks: ["Promote with precision", "Future-ready design", "Elite performance"], targetDemographic: "Early adopters and tech enthusiasts." };
  }
};

export const getGrowthStrategy = async (earnings: number, teamSize: number) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Based on a marketer's current earnings of $${earnings} and a team size of ${teamSize}, provide a 1-sentence growth recommendation for scaling to the next level in an MLM structure.`,
    });
    // Access the text property directly from the response.
    return response.text || "Focus on increasing direct conversion rates to amplify override potential.";
  } catch (error) {
    return "Focus on increasing direct conversion rates to amplify override potential.";
  }
};
