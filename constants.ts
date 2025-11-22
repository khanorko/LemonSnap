import { StyleDefinition } from './types';

export const CATEGORIES = [
  "Professional & Personal Branding",
  "Creative & Artsy",
  "Retro & Analog",
  "Futuristic & Cyber",
  "Pop Culture & Fun",
  "Rockstar & Rebellion",
  "Animal Kingdom"
];

export const STYLES: StyleDefinition[] = [
  // 1. Professional & Personal Branding
  { id: "professional", title: "Professional", category: "Professional & Personal Branding", desc: "Corporate, crisp, confident. Feels like LinkedIn but better.", funFactor: 3, moodPalette: ["#f9f9f9", "#e0e0e0", "#c4c4c4"] },
  { id: "studio", title: "Studio", category: "Professional & Personal Branding", desc: "Neutral background, pure lighting, zero distractions.", funFactor: 3, moodPalette: ["#ffffff", "#eeeeee", "#dcdcdc"] },
  { id: "editorial", title: "Editorial", category: "Professional & Personal Branding", desc: "Magazine style, sharp contrasts, confident gaze.", funFactor: 6, moodPalette: ["#faf7f5", "#cfc6be", "#7f7b76"] },
  { id: "tech_corp", title: "Tech", category: "Professional & Personal Branding", desc: "Cool lighting, futuristic corporate tone.", funFactor: 4, moodPalette: ["#e0f2f1", "#b2dfdb", "#009688"] },
  { id: "executive", title: "Executive Glow", category: "Professional & Personal Branding", desc: "Luxurious softness, high-end lighting.", funFactor: 4, moodPalette: ["#fff9c4", "#fbc02d", "#f57f17"] },
  { id: "startup", title: "Startup Founder", category: "Professional & Personal Branding", desc: "Optimistic, energetic, ready to pitch.", funFactor: 5, moodPalette: ["#e3f2fd", "#2196f3", "#1565c0"] },
  { id: "consultant", title: "Consultant Cool", category: "Professional & Personal Branding", desc: "Business casual in natural light.", funFactor: 4, moodPalette: ["#f5f5f5", "#9e9e9e", "#616161"] },
  { id: "conference", title: "Conference Hero", category: "Professional & Personal Branding", desc: "Stage lighting, slight vignette, keynote speaker vibes.", funFactor: 6, moodPalette: ["#212121", "#424242", "#ffffff"] },
  { id: "minimalist", title: "Minimalist Focus", category: "Professional & Personal Branding", desc: "Monochrome with strong contrast.", funFactor: 5, moodPalette: ["#000000", "#ffffff", "#bdbdbd"] },
  { id: "headshot_plus", title: "Headshot+", category: "Professional & Personal Branding", desc: "Ultra-realism with micro-details.", funFactor: 3, moodPalette: ["#d7ccc8", "#a1887f", "#5d4037"] },
  { id: "nordic", title: "Nordic Worklight", category: "Professional & Personal Branding", desc: "Soft white light, Scandinavian tone.", funFactor: 4, moodPalette: ["#eceff1", "#cfd8dc", "#b0bec5"] },
  { id: "ai_office", title: "AI Office", category: "Professional & Personal Branding", desc: "Glass reflections, modern tech environment.", funFactor: 5, moodPalette: ["#e8eaf6", "#c5cae9", "#3f51b5"] },

  // 2. Creative & Artsy
  { id: "lemon", title: "Lemon Edition 🍋", category: "Creative & Artsy", desc: "Bright, tangy, unapologetically fun. Joy and energy.", funFactor: 10, moodPalette: ["#fff44f", "#ffd700", "#ffa500"] },
  { id: "creative", title: "Creative", category: "Creative & Artsy", desc: "Vibrant colors, bold lighting, slightly unhinged energy.", funFactor: 8, moodPalette: ["#ffd6d6", "#ff7b00", "#6b00ff"] },
  { id: "cinematic", title: "Cinematic", category: "Creative & Artsy", desc: "Filmic and dramatic. Deep shadows.", funFactor: 9, moodPalette: ["#0f0f0f", "#ff9d00", "#1a5cff"] },
  { id: "vintage_art", title: "Vintage", category: "Creative & Artsy", desc: "Warm, nostalgic tone with a classic feel.", funFactor: 5, moodPalette: ["#e1b382", "#c89666", "#2d545e"] },
  { id: "surreal", title: "Surreal Pop", category: "Creative & Artsy", desc: "Collage feel with floating elements.", funFactor: 9, moodPalette: ["#ff4081", "#7c4dff", "#536dfe"] },
  { id: "street_art", title: "Street Art Vibes", category: "Creative & Artsy", desc: "Textures and paint splatters.", funFactor: 8, moodPalette: ["#ffea00", "#ff1744", "#000000"] },
  { id: "dreamscape", title: "Dreamscape", category: "Creative & Artsy", desc: "Soft pastel and floating shapes.", funFactor: 7, moodPalette: ["#f8bbd0", "#e1bee7", "#b2dfdb"] },
  { id: "prisma", title: "Prisma", category: "Creative & Artsy", desc: "Reflective color shifts.", funFactor: 8, moodPalette: ["#64ffda", "#18ffff", "#80d8ff"] },
  { id: "watercolor", title: "Watercolor", category: "Creative & Artsy", desc: "Painterly, pale light.", funFactor: 6, moodPalette: ["#e0f7fa", "#b2ebf2", "#80deea"] },
  { id: "gallery", title: "Gallery Wall", category: "Creative & Artsy", desc: "Neutral but artistic.", funFactor: 5, moodPalette: ["#f5f5f5", "#eeeeee", "#bdbdbd"] },
  { id: "splash", title: "Paint Splash", category: "Creative & Artsy", desc: "Dynamic, like brushstrokes.", funFactor: 8, moodPalette: ["#ff5252", "#ffeb3b", "#448aff"] },
  { id: "avant", title: "Avant Glow", category: "Creative & Artsy", desc: "Soft light, art school on LSD.", funFactor: 9, moodPalette: ["#ce93d8", "#ab47bc", "#8e24aa"] },

  // 3. Retro & Analog
  { id: "vintage_film", title: "Vintage Film", category: "Retro & Analog", desc: "Film aesthetic and warmth.", funFactor: 5, moodPalette: ["#d7ccc8", "#8d6e63", "#5d4037"] },
  { id: "polaroid90s", title: "Polaroid 90s", category: "Retro & Analog", desc: "Direct flash, retro vibe.", funFactor: 7, moodPalette: ["#fff9c4", "#fff59d", "#fbc02d"] },
  { id: "noir", title: "Analog Film Noir", category: "Retro & Analog", desc: "50s contrast, black and white.", funFactor: 7, moodPalette: ["#212121", "#757575", "#bdbdbd"] },
  { id: "sunset70s", title: "70s Sunset", category: "Retro & Analog", desc: "Orange glow, soft lens flare.", funFactor: 6, moodPalette: ["#ffcc80", "#ffb74d", "#ff9800"] },
  { id: "instant", title: "Instant Classic", category: "Retro & Analog", desc: "Washed tones, Polaroid frame.", funFactor: 6, moodPalette: ["#f0f4c3", "#e6ee9c", "#c0ca33"] },
  { id: "mall80s", title: "80s Mall Photo", category: "Retro & Analog", desc: "Flash, soft focus, gradient background.", funFactor: 8, moodPalette: ["#e1bee7", "#ce93d8", "#ba68c8"] },
  { id: "dusty", title: "Dusty Frames", category: "Retro & Analog", desc: "Film grain and scratches.", funFactor: 5, moodPalette: ["#efebe9", "#d7ccc8", "#a1887f"] },
  { id: "analog_love", title: "Analog Love", category: "Retro & Analog", desc: "Yellowed tone, romantic look.", funFactor: 6, moodPalette: ["#fff3e0", "#ffe0b2", "#ffb74d"] },
  { id: "retro_glam", title: "Retro Glam", category: "Retro & Analog", desc: "Studio with 60s aura.", funFactor: 7, moodPalette: ["#fce4ec", "#f8bbd0", "#f48fb1"] },
  { id: "boho", title: "Boho Fade", category: "Retro & Analog", desc: "Sun-bleached, warm tone.", funFactor: 6, moodPalette: ["#fff8e1", "#ffecb3", "#ffe082"] },
  { id: "cineprint", title: "CinePrint", category: "Retro & Analog", desc: "Inspired by film negatives.", funFactor: 7, moodPalette: ["#cfd8dc", "#b0bec5", "#90a4ae"] },
  { id: "disposable", title: "Disposable Camera", category: "Retro & Analog", desc: "The feeling of chance and charm.", funFactor: 7, moodPalette: ["#f5f5f5", "#e0e0e0", "#9e9e9e"] },

  // 4. Futuristic & Cyber
  { id: "tech_neon", title: "Tech", category: "Futuristic & Cyber", desc: "Neon lights, cold palette.", funFactor: 8, moodPalette: ["#e0f7fa", "#80deea", "#26c6da"] },
  { id: "neon_noir", title: "Neon Noir", category: "Futuristic & Cyber", desc: "Cyberpunk style.", funFactor: 8, moodPalette: ["#f3e5f5", "#e1bee7", "#ab47bc"] },
  { id: "minecraft_block", title: "Minecraft", category: "Futuristic & Cyber", desc: "Cubic, playful.", funFactor: 10, moodPalette: ["#a5d6a7", "#66bb6a", "#4caf50"] },
  { id: "ai_core", title: "AI Core", category: "Futuristic & Cyber", desc: "Glowing geometry.", funFactor: 9, moodPalette: ["#ffebee", "#ef9a9a", "#e57373"] },
  { id: "metaverse", title: "Metaverse Glow", category: "Futuristic & Cyber", desc: "Holographic surface.", funFactor: 8, moodPalette: ["#e3f2fd", "#90caf9", "#42a5f5"] },
  { id: "code_mode", title: "Code Mode", category: "Futuristic & Cyber", desc: "Binary code and light trails.", funFactor: 7, moodPalette: ["#e8f5e9", "#a5d6a7", "#66bb6a"] },
  { id: "digital_twin", title: "Digital Twin", category: "Futuristic & Cyber", desc: "Mirror fusion of the face.", funFactor: 8, moodPalette: ["#f3e5f5", "#ce93d8", "#ab47bc"] },
  { id: "cyber_halo", title: "Cyber Halo", category: "Futuristic & Cyber", desc: "Blue aura, laser shadows.", funFactor: 9, moodPalette: ["#e0f2f1", "#80cbc4", "#26a69a"] },
  { id: "glitch", title: "Glitch Portrait", category: "Futuristic & Cyber", desc: "Pixelated interference.", funFactor: 8, moodPalette: ["#eceff1", "#b0bec5", "#78909c"] },
  { id: "space_punk", title: "Space Punk", category: "Futuristic & Cyber", desc: "Metallic and space background.", funFactor: 9, moodPalette: ["#37474f", "#455a64", "#546e7a"] },
  { id: "holo", title: "Holo Light", category: "Futuristic & Cyber", desc: "Prism effect, reflections.", funFactor: 8, moodPalette: ["#e1f5fe", "#81d4fa", "#29b6f6"] },
  { id: "quantum", title: "Quantum Self", category: "Futuristic & Cyber", desc: "Double exposures, glitch fade.", funFactor: 9, moodPalette: ["#f3e5f5", "#e1bee7", "#ce93d8"] },

  // 5. Pop Culture & Fun
  { id: "lemon_pop", title: "Lemon Edition 🍋", category: "Pop Culture & Fun", desc: "Full energy.", funFactor: 10, moodPalette: ["#fffde7", "#fff9c4", "#fff59d"] },
  { id: "minecraft_fun", title: "Minecraft", category: "Pop Culture & Fun", desc: "Fun, blocky.", funFactor: 10, moodPalette: ["#dcedc8", "#aed581", "#8bc34a"] },
  { id: "barbie", title: "Barbiecore", category: "Pop Culture & Fun", desc: "Pink light, shiny filters.", funFactor: 9, moodPalette: ["#fce4ec", "#f8bbd0", "#f48fb1"] },
  { id: "anime", title: "Anime Portrait", category: "Pop Culture & Fun", desc: "Cellshade, big eyes.", funFactor: 9, moodPalette: ["#e3f2fd", "#bbdefb", "#90caf9"] },
  { id: "superhero", title: "Superhero Mode", category: "Pop Culture & Fun", desc: "Comics look.", funFactor: 9, moodPalette: ["#ffebee", "#ffcdd2", "#ef9a9a"] },
  { id: "8bit", title: "8Bit Hero", category: "Pop Culture & Fun", desc: "Pixel art with retro color.", funFactor: 8, moodPalette: ["#f1f8e9", "#dcedc8", "#c5e1a5"] },
  { id: "reality", title: "Reality Show", category: "Pop Culture & Fun", desc: "Color filters and 'TV light'.", funFactor: 7, moodPalette: ["#fff3e0", "#ffe0b2", "#ffcc80"] },
  { id: "meme", title: "Meme Lord", category: "Pop Culture & Fun", desc: "Consciously too much.", funFactor: 10, moodPalette: ["#fff9c4", "#fff176", "#ffee58"] },
  { id: "cartoon", title: "Saturday Cartoon", category: "Pop Culture & Fun", desc: "Hand-drawn feel.", funFactor: 9, moodPalette: ["#e0f7fa", "#b2ebf2", "#80deea"] },
  { id: "retro_gamer", title: "Retro Gamer", category: "Pop Culture & Fun", desc: "CRT filter.", funFactor: 8, moodPalette: ["#eceff1", "#cfd8dc", "#b0bec5"] },
  { id: "action_figure", title: "Action Figure", category: "Pop Culture & Fun", desc: "3D rendered doll.", funFactor: 8, moodPalette: ["#ffe0b2", "#ffcc80", "#ffb74d"] },
  { id: "viral", title: "Viral Frame", category: "Pop Culture & Fun", desc: "Flashy light, TikTok ready.", funFactor: 9, moodPalette: ["#f8bbd0", "#f48fb1", "#f06292"] },

  // 6. Rockstar & Rebellion
  { id: "cinematic_rock", title: "Cinematic", category: "Rockstar & Rebellion", desc: "Shadow rich, intense.", funFactor: 9, moodPalette: ["#212121", "#424242", "#616161"] },
  { id: "noir_rock", title: "Analog Film Noir", category: "Rockstar & Rebellion", desc: "Black & white, strong light.", funFactor: 7, moodPalette: ["#000000", "#212121", "#424242"] },
  { id: "stage", title: "Stage Light", category: "Rockstar & Rebellion", desc: "Spotlight with smoke.", funFactor: 8, moodPalette: ["#311b92", "#4527a0", "#512da8"] },
  { id: "indie", title: "Indie Band Poster", category: "Rockstar & Rebellion", desc: "Grainy, dreamy.", funFactor: 7, moodPalette: ["#f3e5f5", "#e1bee7", "#ce93d8"] },
  { id: "punk", title: "Punk Flash", category: "Rockstar & Rebellion", desc: "High contrast, edgy lighting.", funFactor: 8, moodPalette: ["#ffcdd2", "#ef9a9a", "#e57373"] },
  { id: "rocknroll", title: "Rock 'n' Roll Grain", category: "Rockstar & Rebellion", desc: "Raw, energetic and real.", funFactor: 9, moodPalette: ["#3e2723", "#4e342e", "#5d4037"] },
  { id: "basement", title: "Basement Gig", category: "Rockstar & Rebellion", desc: "Dark background, eye contact.", funFactor: 7, moodPalette: ["#263238", "#37474f", "#455a64"] },
  { id: "vinyl", title: "Vinyl Soul", category: "Rockstar & Rebellion", desc: "70s rock tone.", funFactor: 8, moodPalette: ["#fff8e1", "#ffecb3", "#ffe082"] },
  { id: "garage", title: "Garage Light", category: "Rockstar & Rebellion", desc: "Direct flash.", funFactor: 7, moodPalette: ["#cfd8dc", "#b0bec5", "#90a4ae"] },
  { id: "riot", title: "Riot Red", category: "Rockstar & Rebellion", desc: "Red light and intense energy.", funFactor: 9, moodPalette: ["#b71c1c", "#c62828", "#d32f2f"] },
  { id: "electric", title: "Electric Fade", category: "Rockstar & Rebellion", desc: "Neon in the dark.", funFactor: 8, moodPalette: ["#311b92", "#4a148c", "#880e4f"] },
  { id: "tourbus", title: "Tour Bus", category: "Rockstar & Rebellion", desc: "Soft light and decadence.", funFactor: 7, moodPalette: ["#3e2723", "#4e342e", "#5d4037"] },

  // 7. Animal Kingdom
  { id: "wild", title: "Wild Mode", category: "Animal Kingdom", desc: "Animal traits (lion, wolf, fox).", funFactor: 9, moodPalette: ["#fff3e0", "#ffe0b2", "#ffcc80"] },
  { id: "pet", title: "Pet Power", category: "Animal Kingdom", desc: "Dog/Cat palettes.", funFactor: 8, moodPalette: ["#efebe9", "#d7ccc8", "#a1887f"] },
  { id: "fantasy", title: "Fantasy Beasts", category: "Animal Kingdom", desc: "Dragons, unicorns.", funFactor: 10, moodPalette: ["#fce4ec", "#f8bbd0", "#f48fb1"] },
  { id: "arctic", title: "Arctic Fox", category: "Animal Kingdom", desc: "Icy light, white background.", funFactor: 8, moodPalette: ["#e3f2fd", "#bbdefb", "#90caf9"] },
  { id: "jungle", title: "Jungle Spirit", category: "Animal Kingdom", desc: "Green, shadowy light.", funFactor: 8, moodPalette: ["#e8f5e9", "#c8e6c9", "#a5d6a7"] },
  { id: "safari", title: "Safari Gold", category: "Animal Kingdom", desc: "Sun-bleached and warm.", funFactor: 7, moodPalette: ["#fff8e1", "#ffecb3", "#ffe082"] },
  { id: "mythic", title: "Mythic Lion", category: "Animal Kingdom", desc: "Gold and strength.", funFactor: 9, moodPalette: ["#fffde7", "#fff9c4", "#fff59d"] },
  { id: "raven", title: "Raven Shadow", category: "Animal Kingdom", desc: "Dark, mysterious.", funFactor: 8, moodPalette: ["#212121", "#424242", "#616161"] },
  { id: "tiger", title: "Tiger Light", category: "Animal Kingdom", desc: "Orange and black contrast.", funFactor: 9, moodPalette: ["#ffe0b2", "#ffcc80", "#ffb74d"] },
  { id: "aquatic", title: "Aquatic Dream", category: "Animal Kingdom", desc: "Ocean tones, soft lighting.", funFactor: 8, moodPalette: ["#e0f7fa", "#b2ebf2", "#80deea"] },
  { id: "wolf", title: "Spirit Wolf", category: "Animal Kingdom", desc: "Milky blue light.", funFactor: 8, moodPalette: ["#eceff1", "#cfd8dc", "#b0bec5"] },
  { id: "cosmic_cat", title: "Cosmic Cat", category: "Animal Kingdom", desc: "Starlight, glimmer and mystery.", funFactor: 10, moodPalette: ["#f3e5f5", "#e1bee7", "#ce93d8"] },
];

export const ADVANCED_OPTIONS = {
  angles: [
    { value: 'default', label: 'Auto / Natural' },
    { value: 'front', label: 'Frontal (Passport)' },
    { value: 'three_quarter', label: '3/4 Profile (Classic)' },
    { value: 'side', label: 'Side Profile (Dramatic)' },
    { value: 'low', label: 'Low Angle (Power)' },
  ],
  lenses: [
    { value: 'default', label: 'Auto / Standard' },
    { value: '24mm', label: '24mm (Wide/Environment)' },
    { value: '35mm', label: '35mm (Street/Casual)' },
    { value: '50mm', label: '50mm (Human Eye)' },
    { value: '85mm', label: '85mm (Portrait Pro)' },
    { value: '135mm', label: '135mm (Telephoto)' },
  ],
  apertures: [
    { value: 'default', label: 'Auto / Balanced' },
    { value: 'f1.2', label: 'f/1.2 (Dreamy Blur)' },
    { value: 'f2.8', label: 'f/2.8 (Pro Bokeh)' },
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
  ],
  filmStocks: [
    { value: 'default', label: 'Auto / Digital Clean' },
    { value: 'fine_grain', label: 'Fine Grain (Subtle)' },
    { value: 'iso400', label: 'ISO 400 (Classic Film)' },
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