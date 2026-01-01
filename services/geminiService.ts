
import { GoogleGenAI } from "@google/genai";

// Highly detailed simulated responses for professional 'Discovery Mode'
const getSimulatedResponse = (userPrompt: string) => {
  const prompt = userPrompt.toLowerCase();
  
  if (prompt.includes("price") || prompt.includes("cost") || prompt.includes("quote")) {
    return "Architecture costs at NEXTFORGE are calculated based on the technical complexity and scale of the 'Forge'. Small MVPs typically start in a lean framework, while Enterprise systems are scoped for infinite scale. I recommend reaching out to Venkatasiva directly via the 'Direct Uplink' form below for a precise audit.";
  }
  
  if (prompt.includes("android") || prompt.includes("ios") || prompt.includes("app") || prompt.includes("mobile")) {
    return "We specialize in Native Swift (iOS) and Kotlin (Android) ecosystems, as well as high-fidelity Cross-Platform solutions using Flutter and React Native. Whether you need a simple utility app or a massive fintech ecosystem, we forge solutions that dominate the App Store and Play Store.";
  }

  if (prompt.includes("who") || prompt.includes("engineer") || prompt.includes("team")) {
    return "NEXTFORGE is led by Venkatasiva Nallamothu, a master of digital architecture. We operate as an elite strike team of engineers and designers dedicated to pushing the boundaries of what mobile apps can achieve.";
  }

  if (prompt.includes("small") || prompt.includes("big") || prompt.includes("startup") || prompt.includes("enterprise")) {
    return "We scale with your vision. NEXTFORGE has successfully forged projects ranging from solo-founder MVPs to global enterprise infrastructures. Our 'Small to Big' philosophy means we provide the same level of architectural excellence regardless of the initial project size.";
  }

  return "Greetings! I am ForgeAI, running in 'Discovery Mode' while my neural link is being finalized. I can provide detailed architectural insights into how NEXTFORGE builds Android and iOS systems. What are you looking to forge today?";
};

export const getSolutionExpertResponse = async (userPrompt: string) => {
  // Check if API key is present
  if (!process.env.API_KEY || process.env.API_KEY === "undefined" || process.env.API_KEY === "") {
    console.warn("Gemini API Key missing. Running in Discovery Mode.");
    // Simulate a slight delay for realism
    await new Promise(resolve => setTimeout(resolve, 800));
    return getSimulatedResponse(userPrompt);
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: `You are ForgeAI, the elite technical consultant for NEXTFORGE, a premium development agency led by Venkatasiva Nallamothu. 
        Core Mission:
        1. Explain our 'Forge Process' for building iOS & Android apps (Native and Cross-platform).
        2. Highlight our 'Small to Big' capability—handling both startup MVPs and enterprise giants.
        3. Maintain a tone that is futuristic, confident, precise, and professional.
        4. Always encourage high-value consultation through our contact forms.
        
        Leadership: Venkatasiva Nallamothu (Lead Engineer).
        Expertise: Swift, Kotlin, Flutter, React Native, Scalable Backends, UI/UX.`,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return getSimulatedResponse(userPrompt);
  }
};
