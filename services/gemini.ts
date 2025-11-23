import { GoogleGenAI, HarmCategory, HarmBlockThreshold } from "@google/genai";
import { CameraGear, AdvancedSettings } from '../types';
import { PROMPT_CONFIG, EXPRESSION_PRESETS } from '../constants';

export const getCameraGear = (year: number, advanced?: AdvancedSettings): CameraGear => {
  // Default Modern Setup
  let gear: CameraGear = { 
    camera: "Canon EOS R5", 
    lens: "85mm f/1.4L", 
    iso: "ISO 100", 
    aperture: "f/2.8", 
    shutter: "1/125s", 
    lighting: "soft LED panel" 
  };

  // --- FUTURE (Time Travel) ---
  if (year > 2030) {
    gear = {
        camera: "Neural Optic Interface v4",
        lens: "Bionic Retinal Scanner",
        iso: "Digital Gain ∞",
        aperture: "f/0.95 (Simulated)",
        shutter: "Instant",
        lighting: "Ambient Holographic Glow"
    };
  }
  // --- MODERN ERA (2020+) ---
  else if (year >= 2020) {
    gear = { camera: "Canon EOS R5", lens: "85mm f/1.2L RF", iso: "ISO 100 (Clean Digital)", aperture: "f/1.8", shutter: "1/200s", lighting: "Profoto Studio Strobe" };
  }
  // --- DIGITAL REVOLUTION (2000s - 2010s) ---
  else if (year >= 2010) {
    gear = { camera: "Canon 5D Mark II", lens: "85mm f/1.8", iso: "ISO 200", aperture: "f/2.8", shutter: "1/125s", lighting: "softbox studio lighting" };
  }
  else if (year >= 2000) {
    gear = { camera: "Nikon D1", lens: "50mm f/1.8", iso: "ISO 400 (Early Digital Noise)", aperture: "f/3.5", shutter: "1/60s", lighting: "direct hot shoe flash" };
  }
  // --- ANALOG GOLDEN ERA (1970s - 1990s) ---
  else if (year >= 1990) {
    gear = { camera: "Hasselblad 503CW", lens: "Zeiss Planar 80mm f/2.8", iso: "Kodak Portra 400", aperture: "f/4", shutter: "1/60s", lighting: "studio tungsten softbox" };
  }
  else if (year >= 1980) {
    gear = { camera: "Canon AE-1 Program", lens: "50mm f/1.8 FD", iso: "Kodak Gold 200", aperture: "f/5.6", shutter: "1/125s", lighting: "ring flash or direct flash" };
  }
  else if (year >= 1970) {
    gear = { camera: "Pentax K1000", lens: "50mm f/2", iso: "Kodachrome 64", aperture: "f/4", shutter: "1/125s", lighting: "warm incandescent bulb" };
  }
  // --- MID-CENTURY CLASSIC (1940s - 1960s) ---
  else if (year >= 1960) {
    gear = { camera: "Leica M3", lens: "50mm Summicron DR", iso: "Kodak Tri-X 400 (B&W)", aperture: "f/2", shutter: "1/60s", lighting: "natural window light" };
  }
  else if (year >= 1950) {
    gear = { camera: "Rolleiflex 2.8F", lens: "80mm Zeiss Planar", iso: "Ilford FP4 (ISO 125)", aperture: "f/5.6", shutter: "1/60s", lighting: "large flashbulb" };
  }
  else if (year >= 1940) {
    gear = { camera: "Speed Graphic 4x5", lens: "127mm Ektar", iso: "ISO 32 (Fine Grain)", aperture: "f/11", shutter: "1/50s", lighting: "magnesium flash powder" };
  }
  // --- EARLY 20TH CENTURY ---
  else if (year >= 1920) {
    gear = { camera: "Kodak Brownie No. 2", lens: "Simple Meniscus", iso: "ISO 25", aperture: "f/11", shutter: "1/25s", lighting: "daylight only" };
  }
  else if (year >= 1900) {
    gear = { camera: "Large Format Bellows", lens: "Brass Petzval 85mm", iso: "ISO 10 (Glass Plate)", aperture: "f/4 (Swirly Bokeh)", shutter: "1s", lighting: "north facing window" };
  }
  // --- 19TH CENTURY ---
  else if (year >= 1880) {
    gear = { camera: "Dry Plate Camera", lens: "Rapid Rectilinear", iso: "ISO 5", aperture: "f/8", shutter: "2s", lighting: "sunlight" };
  }
  else if (year >= 1860) {
    gear = { camera: "Tintype Camera (Wet Plate)", lens: "Darlot Brass Barrel", iso: "ISO 1", aperture: "f/8", shutter: "5s", lighting: "direct sun" };
  }
  else if (year >= 1840) {
    gear = { camera: "Daguerreotype Sliding Box", lens: "Chevalier Achromatic", iso: "ISO 0.05", aperture: "f/16", shutter: "30s", lighting: "bright sun with head clamp" };
  }
  else if (year >= 1826) {
    gear = { camera: "Camera Obscura", lens: "Simple Bi-Convex", iso: "Bitumen of Judea", aperture: "f/64", shutter: "8 hours", lighting: "full day sun exposure" };
  }
  // --- PREHISTORIC / IMPOSSIBLE ---
  else {
    gear = {
        camera: "Temporal Anomaly Drone",
        lens: "Obsidian Refractor",
        iso: "N/A",
        aperture: "Pin hole",
        shutter: "N/A",
        lighting: "Firelight or Sunlight"
    };
  }

  // Apply advanced overrides if they are not 'default'
  if (advanced) {
    if (advanced.camera && advanced.camera !== 'default') {
        switch(advanced.camera) {
            case 'hasselblad': gear.camera = "Hasselblad 503CW (Medium Format)"; break;
            case 'leica': gear.camera = "Leica M6 Rangefinder"; break;
            case 'phaseone': gear.camera = "Phase One XF IQ4 150MP"; break;
            case 'fujigfx': gear.camera = "Fujifilm GFX 100S"; break;
            case 'canon_r5': gear.camera = "Canon EOS R5"; break;
            case 'sony_a7': gear.camera = "Sony A7R V"; break;
            case 'film_slr': gear.camera = "Canon AE-1 Program (35mm Film)"; break;
            case 'polaroid': gear.camera = "Polaroid 600"; break;
        }
    }
    if (advanced.lens !== 'default') gear.lens = advanced.lens;
    if (advanced.aperture !== 'default') gear.aperture = advanced.aperture;
    if (advanced.lighting !== 'default') gear.lighting = advanced.lighting;
    
    if (advanced.filmStock !== 'default') {
        switch (advanced.filmStock) {
            case 'fine_grain': gear.iso = `${gear.iso} (Fine Grain)`; break;
            case 'iso400': gear.iso = "ISO 400 film grain"; break;
            case 'iso3200': gear.iso = "ISO 3200 heavy grain"; break;
            case 'bw_contrast': gear.iso = "Black and White high contrast ISO 1600"; break;
            case 'portra400': gear.iso = "Kodak Portra 400 (Warm)"; break;
            case 'cinestill800t': gear.iso = "Cinestill 800T (Tungsten)"; break;
            case 'kodachrome': gear.iso = "Kodachrome 64 (Vibrant)"; break;
            case 'ilford': gear.iso = "Ilford HP5 Plus (B&W)"; break;
        }
    }
  }

  return gear;
};

export const buildPrompt = (stylePrompt: string, year: number = 2025, advanced?: AdvancedSettings, multiImage?: boolean): string => {
  const gear = getCameraGear(year, advanced);
  
  // Determine angle string
  let angleStr = "Best angle for feature visibility";
  if (advanced && advanced.angle !== 'default') {
      switch(advanced.angle) {
          case 'front': angleStr = "Frontal facing, passport style symmetry"; break;
          case 'three_quarter': angleStr = "Classic 3/4 portrait angle"; break;
          case 'side': angleStr = "Side profile view"; break;
          case 'low': angleStr = "Low angle looking up, powerful stance"; break;
          case 'high': angleStr = "High angle looking down, flattering perspective"; break;
      }
  }

  // Description for aperture effect
  let dofDesc = "natural depth of field";
  if (gear.aperture.includes("1.2") || gear.aperture.includes("1.4")) dofDesc = "creamy bokeh background";
  if (gear.aperture.includes("8") || gear.aperture.includes("16")) dofDesc = "sharp background focus";
  if (gear.lens.includes("Petzval")) dofDesc = "swirly bokeh effect";
  if (gear.lens.includes("Tilt-Shift")) dofDesc = "miniature faking tilt-shift blur";

  // Expand short or vague style descriptions for better AI understanding
  let expandedStylePrompt = stylePrompt;
  const styleLower = stylePrompt.toLowerCase();
  
  // Handle specific short descriptions that need expansion
  if (styleLower.includes('cubic') || styleLower.includes('blocky') || styleLower.includes('minecraft')) {
    expandedStylePrompt = "Minecraft-inspired blocky, pixelated art style. Playful, geometric, low-poly aesthetic with cubic/blocky visual elements. Creative digital art transformation.";
  } else if (stylePrompt.length < 20) {
    // For very short descriptions, add context
    expandedStylePrompt = `${stylePrompt} Visual style transformation for creative portrait photography.`;
  }
  
  // Update styleLower to use expanded prompt for transformation detection
  const expandedStyleLower = expandedStylePrompt.toLowerCase();

  // Style & Camera Tech
  let styleText = PROMPT_CONFIG.sections.styleEra.template
    .replace(/{{stylePrompt}}/g, expandedStylePrompt)
    .replace(/{{year}}/g, year.toString())
    .replace(/{{camera}}/g, gear.camera)
    .replace(/{{lens}}/g, gear.lens)
    .replace(/{{iso}}/g, gear.iso)
    .replace(/{{aperture}}/g, gear.aperture)
    .replace(/{{dof}}/g, dofDesc)
    .replace(/{{shutter}}/g, gear.shutter)
    .replace(/{{lighting}}/g, gear.lighting)
    .replace(/{{angle}}/g, angleStr);

  // Period Styling Lookbook
  let periodStyling = "";
  
  const eraLookbooks: {[key: number]: string} = {
    1920: "Flapper style, Art Deco influence, bobbed hair, pearls, sharp suits.",
    1930: "Depression era grit or Hollywood Golden Age glamour. Soft waves, bias cut dresses.",
    1940: "Utility fashion, structured shoulders, victory rolls hairstyle, noir detective style.",
    1950: "Rockabilly or suburban ideal. Poodle skirts, leather jackets, pompadour hair.",
    1960: "Mod fashion, mini skirts, bold patterns, beehive hair, Beatles suits.",
    1970: "Bohemian chic, bell bottoms, disco collars, feathered hair, warm earth tones.",
    1980: "Power suits, neon accents, oversized denim, big hair, mullets, synthwave aesthetic.",
    1990: "Grunge flannel, minimalism, crop tops, baggy jeans, curtain bangs.",
    2000: "Y2K aesthetic, metallic fabrics, frosted tips, tracksuit casual.",
  };

  // Find closest decade for lookbook
  const decade = Math.floor(year / 10) * 10;
  const specificLook = eraLookbooks[decade] ? `Era specific style details: ${eraLookbooks[decade]}` : "";

  // SAFETY FIX: For 1860-1865 (US Civil War era), explicitly request CIVILIAN clothing
  if (year >= 1860 && year <= 1865) {
     periodStyling = `WARDROBE: Authentic 1860s CIVILIAN clothing (Suits/Dresses). STRICTLY NO MILITARY UNIFORMS. ${specificLook}`;
  }
  else if (year < 1900) {
    periodStyling = `WARDROBE: Authentic ${year}s era civilian clothing. ${specificLook}`;
  } else if (year < 2020) {
    periodStyling = `WARDROBE: Authentic fashion from ${year}. ${specificLook}`;
  } else if (year > 2030) {
     periodStyling = `WARDROBE: Futuristic fashion suitable for ${year}. Sci-fi functional.`;
  } else {
      periodStyling = `WARDROBE: Contemporary ${year} fashion.`;
  }

  // Prehistoric override
  if (year < 1000) {
      periodStyling = "WARDROBE: Prehistoric clothing (furs, robes).";
  }
  
  // Expression handling
  let expressionStr = "Natural, neutral expression";
  if (advanced && advanced.expression) {
    const expressionPreset = EXPRESSION_PRESETS.find(p => p.id === advanced.expression);
    if (expressionPreset) {
      expressionStr = expressionPreset.label;
    }
  }
  
  // Detect if this is a transformation style (Animal Kingdom or contains transformation keywords)
  const isTransformationStyle = expandedStyleLower.includes('anthropomorphic') || 
                                expandedStyleLower.includes('transformation') ||
                                expandedStyleLower.includes('hybrid') ||
                                expandedStyleLower.includes('creature') ||
                                expandedStyleLower.includes('beast') ||
                                expandedStyleLower.includes('maintain subject') ||
                                expandedStyleLower.includes('maintain identity') ||
                                expandedStyleLower.includes('wolf form') ||
                                expandedStyleLower.includes('animal features') ||
                                expandedStyleLower.includes('feline') ||
                                expandedStyleLower.includes('lion features') ||
                                expandedStyleLower.includes('panther features') ||
                                expandedStyleLower.includes('fox features');
  
  // PROMPT STRATEGY: Explicit Safety Context
  let instructionSection = '';
  if (isTransformationStyle) {
    // For transformation styles, emphasize maintaining human features with subtle animal enhancements
    instructionSection = `
  IDENTITY PRESERVATION (CRITICAL):
  - KEEP THE HUMAN FACE AS THE PRIMARY FEATURE - the person must look clearly human.
  - Maintain the subject's unique facial structure, bone structure, and recognizable features.
  - Preserve the original person's identity - they must be recognizable as the same individual.
  - Keep the same facial proportions, eye shape, nose structure, mouth, and overall human face shape.
  - The person's human face should remain the dominant feature - animal elements are subtle enhancements.
  - Subject Expression: ${expressionStr}
  
  TRANSFORMATION INSTRUCTIONS (ANTHROPOMORPHIC - HUMAN-FIRST):
  - The person must retain their HUMAN FACE - do not replace it with an animal head.
  - Add animal features as subtle enhancements: small animal ears on top of head, slight fur texture on skin, animal-like eye color/shape, but keep the human facial structure.
  - The transformation should be anthropomorphic (human with animal traits), NOT a full animal transformation.
  - Maintain the same human head shape, jawline, and facial bone structure from the original image.
  - Animal features should complement the human face, not dominate it.
  - The result should look like a human with animal characteristics, not an animal with human characteristics.`;
  } else {
    // For regular styles, keep the original instructions
    instructionSection = `
  INSTRUCTION:
  - Keep the same person and facial features.
  - Focus on lighting, color, background, and wardrobe only.
  - Do not create a new face or a new person.
  - Subject Expression: ${expressionStr}`;
  }
  
  // Detect creative/artistic styles that might need extra context
  const isCreativeStyle = expandedStyleLower.includes('minecraft') || 
                         expandedStyleLower.includes('blocky') || 
                         expandedStyleLower.includes('pixelated') ||
                         expandedStyleLower.includes('artistic') ||
                         expandedStyleLower.includes('creative');
  
  // Multi-Image weighting instructions
  let imageWeighting = "";
  if (multiImage) {
      imageWeighting = `
  IMAGE REFERENCE WEIGHTING:
  - PRIMARY REFERENCE: The first image provided is the PRIMARY source for facial identity. It carries 50% weight.
  - SECONDARY REFERENCES: The other images provided are for additional angle and feature context. They carry 50% weight combined.
  - Use the PRIMARY image as the main anchor for the subject's look.`;
  }

  let prompt = `
  CONTEXT AND CONSENT:
  - Apply the selected visual style to the user-provided image.
  - The subject is an adult and has consented to editing.
  - This is not a public figure.
  - Do not infer identity, age, or name.
  ${isCreativeStyle ? '- This is a creative artistic style transformation for portrait photography. The style is purely visual and artistic.' : ''}
  ${imageWeighting}
  ${instructionSection}
  
  TARGET STYLE:
  ${styleText}
  
  ${periodStyling}
  
  EXECUTION: High quality, photorealistic style transfer.
  `;

  return prompt;
};

// Helper to convert File to Base64
export const fileToGenerativePart = async (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      const base64Data = base64String.split(',')[1];
      resolve(base64Data);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export const generateHeadshot = async (imageFiles: File | File[], styleDesc: string, year: number = 2025, advanced?: AdvancedSettings): Promise<string> => {
  if (!process.env.API_KEY) {
    throw new Error("API Key is missing.");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // Ensure we have an array of files
  const files = Array.isArray(imageFiles) ? imageFiles : [imageFiles];
  
  // Convert all files to base64 parts
  const imageParts = await Promise.all(files.map(async (file) => {
    const base64Data = await fileToGenerativePart(file);
    return {
      inlineData: {
        mimeType: file.type || 'image/jpeg',
        data: base64Data
      }
    };
  }));

  const prompt = buildPrompt(styleDesc, year, advanced, files.length > 1);

  // Configure Safety Settings to allow more creative freedom (BLOCK_ONLY_HIGH)
  const safetySettings = [
    { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
    { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
    { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH },
    { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH }
  ];

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image', 
    contents: {
      parts: [
        ...imageParts,
        {
          text: prompt
        }
      ]
    },
    config: {
      imageConfig: {
        aspectRatio: "1:1"
      },
      safetySettings: safetySettings
    }
  });

  const candidate = response.candidates?.[0];

  // Check for Image part
  const parts = candidate?.content?.parts;
  if (parts) {
    for (const part of parts) {
      if (part.inlineData && part.inlineData.data) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
  }
  
  // If no image, check for text response
  let textResponse = "";
  if (parts) {
      for (const part of parts) {
          if (part.text) textResponse += part.text;
      }
  }

  if (textResponse) {
      console.warn("AI Text Response:", textResponse);
      // Providing a more user-friendly error for safety refusals
      throw new Error(`The AI refused this request. Try a different photo (avoid close-ups of kids or sensitive content) or a less specific style.`);
  }

  if (candidate?.finishReason) {
       let msg = `Generation stopped (${candidate.finishReason}).`;
       if (candidate.finishReason === 'SAFETY') {
           msg += " The AI safety filters flagged this request. Please try a different photo (avoid sensitive content) or a simpler style.";
       } else if (candidate.finishReason === 'IMAGE_OTHER') { // Recitation / Other Policy
           msg += " The AI declined this specific request. This can happen with complex prompts or strict policy filters. Try selecting a different style.";
       } else {
           msg += " The AI may have flagged this request. Please try a different photo.";
       }
       throw new Error(msg);
  }
  
  throw new Error("No image generated. Please try again.");
};

// Kept for future use (Magic Editor)
export const editImageWithPrompt = async (imageFile: File, userPrompt: string): Promise<string> => {
  // Placeholder for now
  throw new Error("Magic Editor is coming soon.");
};
