import { StyleDefinition, ExpressionOption } from './types';

export const CATEGORIES = [
  "Professional & Personal Branding",
  "Creative & Artsy",
  "Retro & Analog",
  "Futuristic & Cyber",
  "Pop Culture & Fun",
  "Rockstar & Rebellion",
  "Animal Kingdom",
  "Nature",
  "Space",
  "Sports",
  "Music",
  "Fantasy",
  "Seasons",
  "Travel",
  "Food"
];

export const EXPRESSION_PRESETS: { id: ExpressionOption; label: string; icon: string }[] = [
  { id: 'neutral', label: 'Neutral', icon: '😐' },
  { id: 'soft_smile', label: 'Soft Smile', icon: '🙂' },
  { id: 'full_smile', label: 'Full Smile', icon: '😃' },
  { id: 'confident', label: 'Confident', icon: '😎' },
  { id: 'relaxed', label: 'Relaxed', icon: '😌' },
  { id: 'approachable', label: 'Kind', icon: '🤗' },
  { id: 'focused', label: 'Focused', icon: '🧐' },
  { id: 'thoughtful', label: 'Thinking', icon: '🤔' },
  { id: 'friendly', label: 'Friendly', icon: '😊' },
  { id: 'serious', label: 'Serious', icon: '😐' },
  { id: 'energetic', label: 'Energetic', icon: '🤩' },
  { id: 'calm', label: 'Calm', icon: '🍃' },
];

export const STYLES: StyleDefinition[] = [
  // 1. Professional & Personal Branding
  { id: "professional", title: "Professional", category: "Professional & Personal Branding", desc: "High-end Vanity Fair style corporate headshot. Annie Leibovitz inspired soft dramatic lighting. Rich textures, hand-painted canvas backdrop. Professional attire, confident expression. 85mm f/1.2 lens depth.", funFactor: 3, moodPalette: ["#f9f9f9", "#e0e0e0", "#c4c4c4"] },
  { id: "studio", title: "Studio", category: "Professional & Personal Branding", desc: "World-class headshot aesthetic (Peter Hurley style). Pure white high-key background. Shadowless butterfly lighting to accentuate jawline. 'Squinch' expression confidence. Ultra-sharp focus.", funFactor: 3, moodPalette: ["#ffffff", "#eeeeee", "#dcdcdc"] },
  { id: "editorial", title: "Editorial", category: "Professional & Personal Branding", desc: "Vogue-style fashion portraiture. Complex color grading, layered lighting, environmental storytelling. Cinematic depth and high fashion styling. Confident, intense gaze.", funFactor: 6, moodPalette: ["#faf7f5", "#cfc6be", "#7f7b76"] },
  { id: "tech_corp", title: "Tech", category: "Professional & Personal Branding", desc: "Dan Winters inspired environmental portrait. Technical excellence, rich blacks, precise lighting ratios. Modern tech setting but with dramatic, moody atmosphere.", funFactor: 4, moodPalette: ["#e0f2f1", "#b2dfdb", "#009688"] },
  { id: "executive", title: "Executive Power", category: "Professional & Personal Branding", desc: "Platon style power portrait. Wide angle perspective (simulated), intense micro-contrast, stark/bold lighting. Authoritative, commanding presence. High-detail texture.", funFactor: 4, moodPalette: ["#fff9c4", "#fbc02d", "#f57f17"] },
  { id: "startup", title: "Startup Founder", category: "Professional & Personal Branding", desc: "Energetic and approachable startup founder look. Bright, natural light in a modern co-working space. Casual but sharp attire. Optimistic atmosphere.", funFactor: 5, moodPalette: ["#e3f2fd", "#2196f3", "#1565c0"] },
  { id: "consultant", title: "Consultant Cool", category: "Professional & Personal Branding", desc: "Relaxed yet professional consultant style. Natural window lighting, urban cafe or modern lobby background. Business casual layering.", funFactor: 4, moodPalette: ["#f5f5f5", "#9e9e9e", "#616161"] },
  { id: "conference", title: "Conference Hero", category: "Professional & Personal Branding", desc: "Keynote speaker on stage style. Spotlight on subject, dark background with bokeh stage lights. Dynamic, authoritative presence.", funFactor: 6, moodPalette: ["#212121", "#424242", "#ffffff"] },
  { id: "minimalist", title: "Minimalist Focus", category: "Professional & Personal Branding", desc: "Black and white minimalist portrait. High contrast, clean lines, negative space. Focus purely on expression and texture. timeless elegance.", funFactor: 5, moodPalette: ["#000000", "#ffffff", "#bdbdbd"] },
  { id: "headshot_plus", title: "Headshot+", category: "Professional & Personal Branding", desc: "Ultra-high resolution photorealistic portrait. Macro details on skin texture and eyes. Perfect studio lighting. 8k quality.", funFactor: 3, moodPalette: ["#d7ccc8", "#a1887f", "#5d4037"] },
  { id: "nordic", title: "Nordic Worklight", category: "Professional & Personal Branding", desc: "Scandi-style clean aesthetic. Soft, diffused white light. minimalist interior background with pale wood and white tones. Fresh and airy.", funFactor: 4, moodPalette: ["#eceff1", "#cfd8dc", "#b0bec5"] },
  { id: "ai_office", title: "AI Office", category: "Professional & Personal Branding", desc: "Modern high-tech workspace. Sleek architectural lines, soft blue ambient lighting, abstract digital aesthetics in background. Smart and future-forward professional look.", funFactor: 5, moodPalette: ["#e8eaf6", "#c5cae9", "#3f51b5"] },

  // 2. Creative & Artsy
  { id: "lemon", title: "Lemon Edition 🍋", category: "Creative & Artsy", desc: "Signature LemonSnap style. Vibrant yellow and citrus tones. Bright, energetic lighting. Playful and zesty atmosphere. Pop art aesthetic.", funFactor: 10, moodPalette: ["#fff44f", "#ffd700", "#ffa500"] },
  { id: "creative", title: "Creative", category: "Creative & Artsy", desc: "Artistic portrait with bold color gels. Mixed lighting (blue/orange or purple/cyan). Creative composition and expressive mood.", funFactor: 8, moodPalette: ["#ffd6d6", "#ff7b00", "#6b00ff"] },
  { id: "cinematic", title: "Cinematic", category: "Creative & Artsy", desc: "Movie scene aesthetic. Anamorphic lens flare, wide aspect ratio composition. Dramatic color grading (teal and orange). Narrative-driven lighting.", funFactor: 9, moodPalette: ["#0f0f0f", "#ff9d00", "#1a5cff"] },
  { id: "vintage_art", title: "Vintage", category: "Creative & Artsy", desc: "Nostalgic art photography. Sepia or warm muted tones. Texture overlay (canvas or paper). Soft focus and painterly quality.", funFactor: 5, moodPalette: ["#e1b382", "#c89666", "#2d545e"] },
  { id: "surreal", title: "Surreal Pop", category: "Creative & Artsy", desc: "Surrealist pop art collage style. Floating objects, unexpected color combinations, dreamlike logic. Playful and bizarre.", funFactor: 9, moodPalette: ["#ff4081", "#7c4dff", "#536dfe"] },
  { id: "street_art", title: "Street Art Vibes", category: "Creative & Artsy", desc: "Urban graffiti style. Background of colorful street art. High contrast, gritty texture. Edgy and bold.", funFactor: 8, moodPalette: ["#ffea00", "#ff1744", "#000000"] },
  { id: "dreamscape", title: "Dreamscape", category: "Creative & Artsy", desc: "Ethereal dream world. Soft pastel clouds, floating lights, gentle blur. Magical and soothing atmosphere.", funFactor: 7, moodPalette: ["#f8bbd0", "#e1bee7", "#b2dfdb"] },
  { id: "prisma", title: "Prisma", category: "Creative & Artsy", desc: "Prismatic light refraction effects. Rainbow flares, crystal reflections across the face. Abstract and radiant.", funFactor: 8, moodPalette: ["#64ffda", "#18ffff", "#80d8ff"] },
  { id: "watercolor", title: "Watercolor", category: "Creative & Artsy", desc: "Digital watercolor painting style. Bleeding colors, paper texture, soft edges. Artistic and fluid.", funFactor: 6, moodPalette: ["#e0f7fa", "#b2ebf2", "#80deea"] },
  { id: "gallery", title: "Gallery Wall", category: "Creative & Artsy", desc: "Contemporary art gallery setting. Clean, sophisticated lighting. Subject framed like a piece of art. Intellectual and polished.", funFactor: 5, moodPalette: ["#f5f5f5", "#eeeeee", "#bdbdbd"] },
  { id: "splash", title: "Paint Splash", category: "Creative & Artsy", desc: "Dynamic action shot with colorful paint splashes. High shutter speed freezing droplets. Expressive and messy fun.", funFactor: 8, moodPalette: ["#ff5252", "#ffeb3b", "#448aff"] },
  { id: "avant", title: "Avant Glow", category: "Creative & Artsy", desc: "Avant-garde fashion photography. Unusual lighting angles, bold makeup or styling accents. Experimental and trendy.", funFactor: 9, moodPalette: ["#ce93d8", "#ab47bc", "#8e24aa"] },

  // 3. Retro & Analog
  { id: "vintage_film", title: "Vintage Film", category: "Retro & Analog", desc: "Authentic 35mm film look. Kodak Portra 400 emulation. Fine grain, warm skin tones, natural daylight. Nostalgic and timeless.", funFactor: 5, moodPalette: ["#d7ccc8", "#8d6e63", "#5d4037"] },
  { id: "polaroid90s", title: "Polaroid 90s", category: "Retro & Analog", desc: "1990s Polaroid aesthetic. Flash photography, slight vignette, characteristic color shift. Casual, candid vibe.", funFactor: 7, moodPalette: ["#fff9c4", "#fff59d", "#fbc02d"] },
  { id: "noir", title: "Analog Film Noir", category: "Retro & Analog", desc: "1940s Film Noir style. High contrast Black & White. Dramatic shadows (venetian blinds effect). Fedora/Trench coat styling cues. Mysterious.", funFactor: 7, moodPalette: ["#212121", "#757575", "#bdbdbd"] },
  { id: "sunset70s", title: "70s Sunset", category: "Retro & Analog", desc: "1970s California sunset vibe. Warm orange/gold flare. Vintage lens artifacts. Bohemain styling. Free-spirited.", funFactor: 6, moodPalette: ["#ffcc80", "#ffb74d", "#ff9800"] },
  { id: "instant", title: "Instant Classic", category: "Retro & Analog", desc: "Fujifilm Instax look. Soft focus, cool shadows, washed-out highlights. White border framing suggestion. Intimate.", funFactor: 6, moodPalette: ["#f0f4c3", "#e6ee9c", "#c0ca33"] },
  { id: "mall80s", title: "80s Mall Photo", category: "Retro & Analog", desc: "Classic 1980s Mall Portrait. Laser background or cloudy sky backdrop. Soft focus filter. Denim jacket or colorful sweater styling.", funFactor: 8, moodPalette: ["#e1bee7", "#ce93d8", "#ba68c8"] },
  { id: "dusty", title: "Dusty Frames", category: "Retro & Analog", desc: "Aged photograph look. Scratches, dust, sepia toning. Found in an attic vibe. Historical memory.", funFactor: 5, moodPalette: ["#efebe9", "#d7ccc8", "#a1887f"] },
  { id: "analog_love", title: "Analog Love", category: "Retro & Analog", desc: "Soft, romantic film look. Overexposed highlights, pastel color palette. Dreamy and sentimental.", funFactor: 6, moodPalette: ["#fff3e0", "#ffe0b2", "#ffb74d"] },
  { id: "retro_glam", title: "Retro Glam", category: "Retro & Analog", desc: "Old Hollywood Glamour. 1950s studio lighting. Soft focus, glowing skin. Elegant styling (pearls, tux). Star quality.", funFactor: 7, moodPalette: ["#fce4ec", "#f8bbd0", "#f48fb1"] },
  { id: "boho", title: "Boho Fade", category: "Retro & Analog", desc: "Faded vintage magazine look. Matte blacks, desaturated colors. Outdoor nature setting. Indie vibes.", funFactor: 6, moodPalette: ["#fff8e1", "#ffecb3", "#ffe082"] },
  { id: "cineprint", title: "CinePrint", category: "Retro & Analog", desc: "Cinematic film stock emulation (Kodak Vision3). Rich colors, halation on highlights. Cinematic aspect ratio crop.", funFactor: 7, moodPalette: ["#cfd8dc", "#b0bec5", "#90a4ae"] },
  { id: "disposable", title: "Disposable Camera", category: "Retro & Analog", desc: "Disposable camera party shot. Hard flash, high contrast, vignetting. Candid, fun, unpolished aesthetic.", funFactor: 7, moodPalette: ["#f5f5f5", "#e0e0e0", "#9e9e9e"] },

  // 4. Futuristic & Cyber
  { id: "tech_neon", title: "Tech Neon", category: "Futuristic & Cyber", desc: "Cyberpunk city night. Neon signs reflecting on wet pavement. Blue and pink lighting scheme. High-tech streetwear.", funFactor: 8, moodPalette: ["#e0f7fa", "#80deea", "#26c6da"] },
  { id: "neon_noir", title: "Neon Noir", category: "Futuristic & Cyber", desc: "Dark, moody cyberpunk portrait. Rain, shadows, and neon accents. Blade Runner aesthetic. Intense and brooding.", funFactor: 8, moodPalette: ["#f3e5f5", "#e1bee7", "#ab47bc"] },
  { id: "minecraft_block", title: "Minecraft", category: "Futuristic & Cyber", desc: "Minecraft-inspired blocky, pixelated art style. Playful, geometric, low-poly aesthetic with cubic/blocky visual elements. Creative digital art transformation.", funFactor: 10, moodPalette: ["#a5d6a7", "#66bb6a", "#4caf50"] },
  { id: "ai_core", title: "AI Core", category: "Futuristic & Cyber", desc: "Representation of an AI entity. Glowing circuit patterns on skin, digital eyes. ethereal and synthetic beauty.", funFactor: 9, moodPalette: ["#ffebee", "#ef9a9a", "#e57373"] },
  { id: "metaverse", title: "Metaverse Glow", category: "Futuristic & Cyber", desc: "Virtual reality avatar style. Smooth, perfect skin, glowing aura. Digital landscape background. Future-forward.", funFactor: 8, moodPalette: ["#e3f2fd", "#90caf9", "#42a5f5"] },
  { id: "code_mode", title: "Code Mode", category: "Futuristic & Cyber", desc: "The Matrix code rain effect. Green digital characters cascading in background or overlay. Hacker vibe.", funFactor: 7, moodPalette: ["#e8f5e9", "#a5d6a7", "#66bb6a"] },
  { id: "digital_twin", title: "Digital Twin", category: "Futuristic & Cyber", desc: "Symmetrical, perfect digital clone. High-gloss finish, unnatural perfection. Studio lighting simulated in 3D.", funFactor: 8, moodPalette: ["#f3e5f5", "#ce93d8", "#ab47bc"] },
  { id: "cyber_halo", title: "Cyber Halo", category: "Futuristic & Cyber", desc: "Saintly halo made of neon lights or data. Tech-religious imagery. Ethereal and powerful.", funFactor: 9, moodPalette: ["#e0f2f1", "#80cbc4", "#26a69a"] },
  { id: "glitch", title: "Glitch Portrait", category: "Futuristic & Cyber", desc: "Datamosh and glitch art effect. Pixel sorting, RGB shift, digital distortion. Chaotic and modern.", funFactor: 8, moodPalette: ["#eceff1", "#b0bec5", "#78909c"] },
  { id: "space_punk", title: "Space Punk", category: "Futuristic & Cyber", desc: "Sci-fi rebel. Distressed space gear, tattoos, industrial background. Gritty spaceship interior lighting.", funFactor: 9, moodPalette: ["#37474f", "#455a64", "#546e7a"] },
  { id: "holo", title: "Holo Light", category: "Futuristic & Cyber", desc: "Holographic projection look. Translucent, glowing, scan lines. Sci-fi communication interface style.", funFactor: 8, moodPalette: ["#e1f5fe", "#81d4fa", "#29b6f6"] },
  { id: "quantum", title: "Quantum Self", category: "Futuristic & Cyber", desc: "Quantum superposition visual. Multiple exposure echoes, atomic structures. Scientific and abstract.", funFactor: 9, moodPalette: ["#f3e5f5", "#e1bee7", "#ce93d8"] },

  // 5. Pop Culture & Fun
  { id: "lemon_pop", title: "Lemon Edition 🍋", category: "Pop Culture & Fun", desc: "Maximum Lemon Energy. Bright yellow background, lemons everywhere. Fun sunglasses, joyful expression. Summer vibes.", funFactor: 10, moodPalette: ["#fffde7", "#fff9c4", "#fff59d"] },
  { id: "minecraft_fun", title: "Minecraft", category: "Pop Culture & Fun", desc: "Minecraft-inspired blocky, pixelated art style. Playful, geometric, low-poly aesthetic with cubic/blocky visual elements. Creative digital art transformation.", funFactor: 10, moodPalette: ["#dcedc8", "#aed581", "#8bc34a"] },
  { id: "barbie", title: "Barbiecore", category: "Pop Culture & Fun", desc: "Plastic fantastic. Excessive pink, bright lighting, doll-like styling. Fun, campy, and fashionable.", funFactor: 9, moodPalette: ["#fce4ec", "#f8bbd0", "#f48fb1"] },
  { id: "anime", title: "Anime Portrait", category: "Pop Culture & Fun", desc: "Japanese animation style. Large expressive eyes, cel-shading, dynamic hair. 2D animation look.", funFactor: 9, moodPalette: ["#e3f2fd", "#bbdefb", "#90caf9"] },
  { id: "superhero", title: "Superhero Mode", category: "Pop Culture & Fun", desc: "Comic book hero pose. Dramatic lighting, cape blowing in wind, city skyline background. Powerful and epic.", funFactor: 9, moodPalette: ["#ffebee", "#ffcdd2", "#ef9a9a"] },
  { id: "8bit", title: "8Bit Hero", category: "Pop Culture & Fun", desc: "Retro video game pixel art. 8-bit graphics, limited color palette. Nostalgic gaming aesthetic.", funFactor: 8, moodPalette: ["#f1f8e9", "#dcedc8", "#c5e1a5"] },
  { id: "reality", title: "Reality Show", category: "Pop Culture & Fun", desc: "Reality TV confessional interview look. Ring light, blurred glamorous background. Bright makeup, dramatic expression.", funFactor: 7, moodPalette: ["#fff3e0", "#ffe0b2", "#ffcc80"] },
  { id: "meme", title: "Meme Lord", category: "Pop Culture & Fun", desc: "Deep fried meme aesthetic. High contrast, saturation, lens flare eyes. Internet humor style.", funFactor: 10, moodPalette: ["#fff9c4", "#fff176", "#ffee58"] },
  { id: "cartoon", title: "Saturday Cartoon", category: "Pop Culture & Fun", desc: "Classic Saturday morning cartoon style. Bold outlines, flat colors, expressive features. Fun and nostalgic.", funFactor: 9, moodPalette: ["#e0f7fa", "#b2ebf2", "#80deea"] },
  { id: "retro_gamer", title: "Retro Gamer", category: "Pop Culture & Fun", desc: "Arcade gamer vibe. CRT monitor glow on face, headphones. 80s/90s arcade background.", funFactor: 8, moodPalette: ["#eceff1", "#cfd8dc", "#b0bec5"] },
  { id: "action_figure", title: "Action Figure", category: "Pop Culture & Fun", desc: "Mint in box action figure look. Plastic texture, stiff pose, packaging background. Toy photography style.", funFactor: 8, moodPalette: ["#ffe0b2", "#ffcc80", "#ffb74d"] },
  { id: "viral", title: "Viral Frame", category: "Pop Culture & Fun", desc: "TikTok/Social Media influencer style. RGB ring light, trendy filter look, engaging expression. Mobile first aesthetic.", funFactor: 9, moodPalette: ["#f8bbd0", "#f48fb1", "#f06292"] },

  // 6. Rockstar & Rebellion
  { id: "cinematic_rock", title: "Cinematic", category: "Rockstar & Rebellion", desc: "Music video cinematic look. Moody lighting, smoke, leather jacket. Intense and cool.", funFactor: 9, moodPalette: ["#212121", "#424242", "#616161"] },
  { id: "noir_rock", title: "Analog Film Noir", category: "Rockstar & Rebellion", desc: "Rock noir. Gritty black and white, grain, street setting. Sunglasses at night. Mysterious.", funFactor: 7, moodPalette: ["#000000", "#212121", "#424242"] },
  { id: "stage", title: "Stage Light", category: "Rockstar & Rebellion", desc: "Live concert performance. Backlit by stage lights, lens flare, sweat, energy. The moment of glory.", funFactor: 8, moodPalette: ["#311b92", "#4527a0", "#512da8"] },
  { id: "indie", title: "Indie Band Poster", category: "Rockstar & Rebellion", desc: "Lo-fi indie album cover. Flash photo against a brick wall. Irony, vintage clothes, casual cool.", funFactor: 7, moodPalette: ["#f3e5f5", "#e1bee7", "#ce93d8"] },
  { id: "punk", title: "Punk Flash", category: "Rockstar & Rebellion", desc: "DIY Punk aesthetic. Photocopy texture, safety pins, mohawk or messy hair. Aggressive and raw.", funFactor: 8, moodPalette: ["#ffcdd2", "#ef9a9a", "#e57373"] },
  { id: "rocknroll", title: "Rock 'n' Roll Grain", category: "Rockstar & Rebellion", desc: "Classic 70s rock photography. Heavy grain, backstage vibe. Rolling Stones tour aesthetic.", funFactor: 9, moodPalette: ["#3e2723", "#4e342e", "#5d4037"] },
  { id: "basement", title: "Basement Gig", category: "Rockstar & Rebellion", desc: "Underground show. Low light, red gels, cramped space energy. Authentic grunge.", funFactor: 7, moodPalette: ["#263238", "#37474f", "#455a64"] },
  { id: "vinyl", title: "Vinyl Soul", category: "Rockstar & Rebellion", desc: "Soul/Jazz record cover. Warm, rich tones, close-up portrait. Velvet texture, emotional depth.", funFactor: 8, moodPalette: ["#fff8e1", "#ffecb3", "#ffe082"] },
  { id: "garage", title: "Garage Light", category: "Rockstar & Rebellion", desc: "Garage band practice. Messy room, instruments in background. Unpretentious and loud.", funFactor: 7, moodPalette: ["#cfd8dc", "#b0bec5", "#90a4ae"] },
  { id: "riot", title: "Riot Red", category: "Rockstar & Rebellion", desc: "Intense red lighting (emergency or stage). Chaos, energy, shouting or intense expression. High impact.", funFactor: 9, moodPalette: ["#b71c1c", "#c62828", "#d32f2f"] },
  { id: "electric", title: "Electric Fade", category: "Rockstar & Rebellion", desc: "Synthwave rocker. Neon grid, sunglasses, retro-future vibe. Cool electric blues and magentas.", funFactor: 8, moodPalette: ["#311b92", "#4a148c", "#880e4f"] },
  { id: "tourbus", title: "Tour Bus", category: "Rockstar & Rebellion", desc: "Life on the road. Looking out a bus window, reflections, passing lights. Melancholic rock star.", funFactor: 7, moodPalette: ["#3e2723", "#4e342e", "#5d4037"] },

  // 7. Animal Kingdom
  { id: "wild", title: "Wild Hybrid", category: "Animal Kingdom", desc: "Anthropomorphic lion/wolf hybrid. Distinct animal fur texture and ears while maintaining human facial structure. Regal and untamed.", funFactor: 9, moodPalette: ["#fff3e0", "#ffe0b2", "#ffcc80"] },
  { id: "pet", title: "Pet Power", category: "Animal Kingdom", desc: "Subtle anthropomorphic features (cat/dog ears, nose). Whimsical pet-owner hybrid portrait. Cute and friendly.", funFactor: 8, moodPalette: ["#efebe9", "#d7ccc8", "#a1887f"] },
  { id: "fantasy_animal", title: "Fantasy Creature", category: "Animal Kingdom", desc: "Fantasy hybrid creature (dragon/unicorn scales or horns). Magical aura, iridescent textures. Mythical elegance.", funFactor: 10, moodPalette: ["#fce4ec", "#f8bbd0", "#f48fb1"] },
  { id: "arctic", title: "Arctic Fox Hybrid", category: "Animal Kingdom", desc: "White fox anthropomorphic features. Icy blue eyes, subtle white fur, snowy background. Cold and pristine.", funFactor: 8, moodPalette: ["#e3f2fd", "#bbdefb", "#90caf9"] },
  { id: "jungle", title: "Jungle Panther", category: "Animal Kingdom", desc: "Black panther features on human face. Sleek, shadowy, green jungle light. Predatory and stealthy.", funFactor: 8, moodPalette: ["#e8f5e9", "#c8e6c9", "#a5d6a7"] },
  { id: "safari", title: "Safari Guide", category: "Animal Kingdom", desc: "Human explorer with subtle cheetah print textures on skin. Khaki clothing, savannah background. Adventure ready.", funFactor: 7, moodPalette: ["#fff8e1", "#ffecb3", "#ffe082"] },
  { id: "mythic", title: "Mythic Lion King", category: "Animal Kingdom", desc: "Golden lion mane integration. Regal, powerful, anthropomorphic lion features. Crown or royal attire hints.", funFactor: 9, moodPalette: ["#fffde7", "#fff9c4", "#fff59d"] },
  { id: "raven", title: "Raven Shifter", category: "Animal Kingdom", desc: "Feather textures integrating into hair and shoulders. Dark, mysterious raven hybrid. Gothic atmosphere.", funFactor: 8, moodPalette: ["#212121", "#424242", "#616161"] },
  { id: "tiger", title: "Tiger King", category: "Animal Kingdom", desc: "Subtle tiger stripes on skin. Intense orange and black contrast. Fierce feline gaze.", funFactor: 9, moodPalette: ["#ffe0b2", "#ffcc80", "#ffb74d"] },
  { id: "aquatic", title: "Aquatic Hybrid", category: "Animal Kingdom", desc: "Gills or scales hint. Ocean tones, soft underwater lighting, wet look. Amphibious human hybrid.", funFactor: 8, moodPalette: ["#e0f7fa", "#b2ebf2", "#80deea"] },
  { id: "wolf", title: "Spirit Wolf Transformation", category: "Animal Kingdom", desc: "Full anthropomorphic wolf transformation. Fur texture, wolf ears, glowing blue eyes. Maintain subject's identity in wolf form. Mystical night setting.", funFactor: 8, moodPalette: ["#eceff1", "#cfd8dc", "#b0bec5"] },
  { id: "cosmic_cat", title: "Cosmic Cat Hybrid", category: "Animal Kingdom", desc: "Space cat hybrid. Starry fur texture, feline eyes, glimmer and mystery. Galaxy background.", funFactor: 10, moodPalette: ["#f3e5f5", "#e1bee7", "#ce93d8"] },

  // 8. Nature
  { id: "forest-spirit", title: "Forest Glow", category: "Nature", desc: "Mystical forest setting. Dappled sunlight through leaves (komorebi). Organic textures, flowers in hair. Earthy and magical.", funFactor: 7, moodPalette: ["#2d5a27", "#8fbc8f", "#c1e1c1"] },
  { id: "ocean-breeze", title: "Ocean Breeze", category: "Nature", desc: "Beach portrait. Wind in hair, soft sunset light, ocean background. Salty air feel, relaxed and free.", funFactor: 7, moodPalette: ["#006994", "#4f97a3", "#a6d5e3"] },
  { id: "desert-gold", title: "Desert Gold", category: "Nature", desc: "Golden Hour in the desert. Warm, orange tones, sand dunes background. High contrast, heat haze. Cinematic vastness.", funFactor: 6, moodPalette: ["#edc9af", "#d2b48c", "#c2b280"] },
  { id: "aurora-night", title: "Aurora Night", category: "Nature", desc: "Northern Lights background. Green and purple sky glow. Silhouette or lit by starlight. Wonder and awe.", funFactor: 9, moodPalette: ["#00ff7f", "#4b0082", "#191970"] },

  // 9. Space
  { id: "star-portrait", title: "Star Field", category: "Space", desc: "Floating in deep space. Surrounded by stars and nebulae. Zero gravity hair effect. Cosmic scale.", funFactor: 9, moodPalette: ["#0f0f23", "#4b0082", "#ffffff"] },
  { id: "planet-halo", title: "Planet Halo", category: "Space", desc: "Backlit by a giant alien planet. Rim lighting, atmospheric glow. Sci-fi explorer vibe.", funFactor: 9, moodPalette: ["#8a2be2", "#483d8b", "#000000"] },
  { id: "space-lab", title: "Space Lab", category: "Space", desc: "Interior of a high-tech space station. Clean white panels, LED status lights. Scientific and sterile.", funFactor: 7, moodPalette: ["#e0e0e0", "#b0c4de", "#f0f8ff"] },
  { id: "stasis-pod", title: "Stasis Pod", category: "Space", desc: "Inside a cryo-sleep pod. Blue liquid light, condensation on glass, peaceful sleep or awakening. Sci-fi drama.", funFactor: 8, moodPalette: ["#add8e6", "#e0ffff", "#f0ffff"] },

  // 10. Sports
  { id: "gym-hero", title: "Gym Hero", category: "Sports", desc: "Intense workout portrait. Sweat sheen, gym lighting, determination. Weights or equipment in background. Fitness motivation.", funFactor: 6, moodPalette: ["#808080", "#d3d3d3", "#ffffff"] },
  { id: "track-motion", title: "Track Motion", category: "Sports", desc: "Sprinter on the track. Motion blur background, focused expression. Golden hour stadium lighting. Speed and power.", funFactor: 7, moodPalette: ["#cd5c5c", "#f08080", "#ffe4c4"] },
  { id: "ring-light", title: "Fight Night", category: "Sports", desc: "Boxer in the ring. Top-down spotlight, shadowy crowd background. Gritty, tough, adrenaline fueled.", funFactor: 8, moodPalette: ["#000000", "#2f4f4f", "#ffffff"] },
  { id: "calisthenics", title: "Calisthenics", category: "Sports", desc: "Outdoor fitness park. Blue sky, pull-up bars. Healthy, active, sunshine.", funFactor: 6, moodPalette: ["#708090", "#778899", "#b0c4de"] },

  // 11. Music
  { id: "stage-smoke", title: "Stage Smoke", category: "Music", desc: "Moody musician portrait. Thick smoke/fog, single spotlight beam. Jazz club atmosphere. Cool and mysterious.", funFactor: 8, moodPalette: ["#ff4500", "#800000", "#000000"] },
  { id: "record-sleeve", title: "Record Sleeve", category: "Music", desc: "Classic vinyl album cover composition. Square crop, bold typography space (implied). Artistic and iconic.", funFactor: 7, moodPalette: ["#deb887", "#f5deb3", "#fff8dc"] },
  { id: "amp-room", title: "Amp Room", category: "Music", desc: "Surrounded by guitar amplifiers. Rock texture, cables, messy creative space. Raw musical energy.", funFactor: 7, moodPalette: ["#2f4f4f", "#556b2f", "#ffd700"] },
  { id: "festival-glow", title: "Festival", category: "Music", desc: "Outdoor music festival. Sunset, crowd lights bokeh, confetti. Joyful communal music experience.", funFactor: 9, moodPalette: ["#ff69b4", "#ba55d3", "#00bfff"] },

  // 12. Fantasy
  { id: "forest-mage", title: "Forest Mage", category: "Fantasy", desc: "Druid or Mage character. Robes, staff, glowing magical runes. Ancient forest setting. Mystical power.", funFactor: 9, moodPalette: ["#228b22", "#32cd32", "#90ee90"] },
  { id: "crystal-cave", title: "Crystal Cave", category: "Fantasy", desc: "Underground cavern filled with glowing crystals. Bioluminescent lighting (blue/purple). Wonder and exploration.", funFactor: 9, moodPalette: ["#00ced1", "#40e0d0", "#e0ffff"] },
  { id: "ember-forge", title: "Ember Forge", category: "Fantasy", desc: "Blacksmith or warrior at the forge. Fire glow, sparks flying, metallic textures. Heat and strength.", funFactor: 8, moodPalette: ["#ff4500", "#b22222", "#ffa07a"] },
  { id: "sky-ruins", title: "Sky Ruins", category: "Fantasy", desc: "Fantasy ruins floating in the sky. Clouds, birds, ancient stone. Epic scale and freedom.", funFactor: 8, moodPalette: ["#87ceeb", "#b0c4de", "#f0f8ff"] },

  // 13. Seasons
  { id: "spring-bloom", title: "Spring Bloom", category: "Seasons", desc: "Cherry blossoms (Sakura) in full bloom. Soft pinks and whites. Gentle spring light. Fresh beginnings.", funFactor: 7, moodPalette: ["#ffb6c1", "#ffc0cb", "#fff0f5"] },
  { id: "summer-heat", title: "Summer Heat", category: "Seasons", desc: "High noon summer sun. Hard shadows, saturated colors, sunglasses (optional). Poolside or beach vibe. Hot.", funFactor: 7, moodPalette: ["#ffa500", "#ff8c00", "#fffacd"] },
  { id: "autumn-fall", title: "Autumn Leaves", category: "Seasons", desc: "Crisp fall day. Orange and red maple leaves. Sweater weather styling. Cozy and warm.", funFactor: 7, moodPalette: ["#daa520", "#b8860b", "#cd853f"] },
  { id: "winter-frost", title: "Winter Frost", category: "Seasons", desc: "Snowy winter portrait. Snowflakes falling, breath vapor. Winter coat/scarf. Quiet and cold.", funFactor: 7, moodPalette: ["#f0ffff", "#e0ffff", "#afeeee"] },

  // 14. Travel
  { id: "tokyo-alley", title: "Tokyo Alley", category: "Travel", desc: "Nighttime Tokyo street. Neon kanji signs, lanterns, rain reflections. Cyberpunk-adjacent but grounded in reality.", funFactor: 8, moodPalette: ["#ff1493", "#00ff00", "#000000"] },
  { id: "mediterranean", title: "Mediterranean", category: "Travel", desc: "Santorini or Greek Island style. White stucco, blue domes, bright sun. Vacation luxury.", funFactor: 6, moodPalette: ["#008b8b", "#20b2aa", "#ffffff"] },
  { id: "nordic-minimal", title: "Nordic Minimal", category: "Travel", desc: "Copenhagen street style. Minimalist architecture, bicycles, flat light. Design-conscious travel.", funFactor: 5, moodPalette: ["#d3d3d3", "#f5f5f5", "#ffffff"] },
  { id: "nyc-rooftop", title: "NYC Rooftop", category: "Travel", desc: "Manhattan skyline background at dusk. City lights, urban attitude. The city that never sleeps.", funFactor: 7, moodPalette: ["#191970", "#483d8b", "#ff69b4"] },

  // 15. Food
  { id: "cafe-vibes", title: "Cafe Vibes", category: "Food", desc: "Cozy coffee shop portrait. Latte art, warm tungsten light, window condensation. Relaxed and caffeinated.", funFactor: 6, moodPalette: ["#8b4513", "#a0522d", "#deb887"] },
  { id: "chef-board", title: "Chef Board", category: "Food", desc: "Professional chef look. Chef whites, busy kitchen background (blurred). Focus on culinary expertise.", funFactor: 6, moodPalette: ["#d3d3d3", "#c0c0c0", "#ffffff"] },
  { id: "street-food", title: "Street Food", category: "Food", desc: "Night market food stall. Steam, hanging bulbs, delicious snacks. Vibrant and sensory.", funFactor: 8, moodPalette: ["#ff4500", "#ffd700", "#2f4f4f"] },
  { id: "citrus-pop", title: "Citrus Pop", category: "Food", desc: "Fresh fruit styling. Bright colors, fruit props, high key lighting. Commercial food photography style.", funFactor: 8, moodPalette: ["#ffa500", "#ffff00", "#ffffff"] },
];

export const ADVANCED_OPTIONS = {
  cameras: [
    { value: 'default', label: 'Auto / Era Authentic' },
    { value: 'hasselblad', label: 'Hasselblad (Medium Format)' },
    { value: 'leica', label: 'Leica M Series (Street)' },
    { value: 'phaseone', label: 'Phase One (High Res)' },
    { value: 'fujigfx', label: 'Fujifilm GFX (Digital Medium)' },
    { value: 'canon_r5', label: 'Canon R5 (Modern)' },
    { value: 'sony_a7', label: 'Sony A7 (Sharp)' },
    { value: 'film_slr', label: 'Vintage SLR (Grain)' },
    { value: 'polaroid', label: 'Polaroid (Instant)' },
  ],
  angles: [
    { value: 'default', label: 'Auto / Natural' },
    { value: 'front', label: 'Frontal (Passport)' },
    { value: 'three_quarter', label: '3/4 Profile (Classic)' },
    { value: 'side', label: 'Side Profile (Dramatic)' },
    { value: 'low', label: 'Low Angle (Power)' },
    { value: 'high', label: 'High Angle (Flattering)' },
  ],
  lenses: [
    { value: 'default', label: 'Auto / Standard' },
    { value: '24mm', label: '24mm (Wide/Environment)' },
    { value: '35mm', label: '35mm (Street/Casual)' },
    { value: '50mm', label: '50mm (Human Eye)' },
    { value: '85mm', label: '85mm (Portrait Pro)' },
    { value: '135mm', label: '135mm (Telephoto)' },
    { value: '110mm', label: '110mm f/2 (Medium Format)' },
    { value: 'tilt_shift', label: 'Tilt-Shift (Miniature)' },
  ],
  apertures: [
    { value: 'default', label: 'Auto / Balanced' },
    { value: 'f1.2', label: 'f/1.2 (Dreamy Blur)' },
    { value: 'f1.4', label: 'f/1.4 (Creamy Bokeh)' },
    { value: 'f2.8', label: 'f/2.8 (Pro Bokeh)' },
    { value: 'f4', label: 'f/4 (Standard)' },
    { value: 'f8', label: 'f/8 (Sharp Details)' },
    { value: 'f16', label: 'f/16 (Everything in Focus)' },
  ],
  lighting: [
    { value: 'default', label: 'Auto / Style Default' },
    { value: 'softbox', label: 'Softbox (Flattering)' },
    { value: 'natural', label: 'Natural Window' },
    { value: 'rembrandt', label: 'Rembrandt (Moody)' },
    { value: 'ring', label: 'Ring Light (Even)' },
    { value: 'neon', label: 'Neon (Colorful)' },
    { value: 'golden', label: 'Golden Hour' },
    { value: 'studio_strobe', label: 'Studio Strobe (Crisp)' },
    { value: 'cinematic', label: 'Cinematic (Dramatic)' },
  ],
  filmStocks: [
    { value: 'default', label: 'Auto / Digital Clean' },
    { value: 'fine_grain', label: 'Fine Grain (Subtle)' },
    { value: 'portra400', label: 'Kodak Portra 400' },
    { value: 'cinestill800t', label: 'Cinestill 800T' },
    { value: 'kodachrome', label: 'Kodachrome 64' },
    { value: 'ilford', label: 'Ilford HP5 (B&W)' },
    { value: 'iso400', label: 'ISO 400 (Classic)' },
    { value: 'iso3200', label: 'ISO 3200 (Gritty)' },
    { value: 'bw_contrast', label: 'B&W High Contrast' },
  ]
};

export const PROMPT_CONFIG = {
  sections: {
    styleEra: {
      title: "STYLE & ERA",
      template: "A {{stylePrompt}} portrait in the visual style of {{year}}.\nCamera Settings: {{camera}} body with {{lens}} lens. Aperture set to {{aperture}} for {{dof}}. Shutter {{shutter}} at {{iso}}.\nLighting: {{lighting}}.\nAngle: {{angle}}.\nMatch the era's atmosphere in color tone, background, and composition."
    },
    identity: { title: "", content: "" },
    priority: { title: "", content: "" }
  }
};
