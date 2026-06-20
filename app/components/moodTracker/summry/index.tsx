import { useMemo } from "react";
import type { Mood, MoodDetailObj } from "~/type/mood";
import { moods as moodsDic } from "~/utiles/dictionaries/moods";
export default function MoodSummary({ moods }: { moods: Mood[] }) {
  const latest = useMemo<MoodDetailObj | null>(() => {
    if (!moods.length) return null;
    return moodsDic[moods[0].type];
  }, [moods]);
  return (
    <div className="bg-gray-900 p-6 my-4 rounded">
      <h2 className="text-2xl font-bold mb-4">Summary:</h2>
      <div>Total Mood: {moods.length}</div>
      <div>
        Last mood:{" "}
        {latest ? (
          <>
            <span>{latest.title}</span>
            <span>{latest.emoji}</span>
          </>
        ) : (
          "-"
        )}
      </div>
    </div>
  );
}
