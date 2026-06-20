import type { Id } from ".";

export type Emotion = "happy" | "sad" | "sleepy" | "neutral";
export type Mood = {
  id: Id;
  type: Emotion;
  create_at: Date;
};
export type MoodDetailObj = {
  emoji: string;
  title: string;
};
export type MoodDetail = Record<Emotion, MoodDetailObj>;
