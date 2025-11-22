export interface StyleDefinition {
  id: string;
  title: string;
  category: string;
  desc: string;
  funFactor: number;
  moodPalette: string[];
}

export interface GeneratedResult {
  id: string;
  imageUrl: string;
  styleId: string;
  promptUsed: string;
  timestamp: number;
  isPaid: boolean;
}

export type AppMode = 'headshot' | 'editor';

export interface CameraGear {
  camera: string;
  lens: string;
  iso: string;
  aperture: string;
  shutter: string;
  lighting: string;
}

export interface AdvancedSettings {
  angle: string;
  lens: string;
  aperture: string;
  lighting: string;
  filmStock: string;
}