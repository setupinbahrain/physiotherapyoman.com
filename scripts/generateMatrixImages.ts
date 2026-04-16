import OpenAI from "openai";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { mkdirp } from "mkdirp";

// Load env vars
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Create Output Directory
const outputDir = path.resolve(process.cwd(), "public", "assets", "generated");

async function generateImage(city: string, service: string) {
  const cleanCity = city.toLowerCase();
  const cleanService = service.toLowerCase().replace(/-/g, " ");
  const filename = `${cleanCity}-${service}.png`;
  const filePath = path.join(outputDir, filename);

  // If image already exists manually or from previous run, skip to save $0.04 credit
  if (fs.existsSync(filePath)) {
    console.log(`[SKIP] Image already exists: ${filename}`);
    return;
  }

  console.log(`[START] Generating DALL-E 3 image for: ${cleanCity} - ${cleanService}`);

  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: `Cinematic, hyper-realistic, high-end medical clinic photography showcasing ${cleanService} treatment. Extremely clean and professional aesthetic, slate blue and bright white colors. Absolute realism, no faces, zero text, zero typography, abstract sophisticated tools and medical layout.`,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json", 
    });

    const b64Json = response.data[0].b64_json;
    if (!b64Json) throw new Error("No image data returned.");

    // Convert base64 to binary buffer
    const imageBuffer = Buffer.from(b64Json, "base64");
    
    // Save to file
    fs.writeFileSync(filePath, imageBuffer);
    console.log(`[SUCCESS] Saved image: ${filename}`);

  } catch (error) {
    console.error(`[ERROR] Failed to generate/save image for ${cleanCity}-${cleanService}:`, error);
  }
}

async function runBatch() {
  await mkdirp(outputDir);
  
  // To avoid burning the $1600 bill for 42,000 images blindly, 
  // we will test exactly 2 combinations right now for the user to verify!
  const tasks = [
    { city: "muscat", service: "sports-rehabilitation" },
    { city: "salalah", service: "joint-pain" }
  ];

  console.log("Running DALL-E 3 Automation Batch...");
  for (const t of tasks) {
    await generateImage(t.city, t.service);
    // Delay to prevent rate limits
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  console.log("Batch complete! Check /public/assets/generated/");
}

runBatch();
