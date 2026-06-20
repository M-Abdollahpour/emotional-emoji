import dayjs from "dayjs";
import { useMemo } from "react";
import type { Id } from "~/type";
import type { Mood } from "~/type/mood";
import { moods as moodDec } from "~/utiles/dictionaries/moods";
export default function MoodItem({
  mood,
  onDelete,
}: {
  mood: Mood;
  onDelete: (id: Id) => void;
}) {
  const moodDetail = useMemo(() => {
    return moodDec[mood.type];
  }, [mood]);
  const createAt = useMemo(() => dayjs(mood.create_at), [mood]);

  return (
    <div className="border border-white/5 rounded p-4 flex items-center justify-between">
      <span className="grow">
        {" "}
        {moodDetail.title}
        {moodDetail.emoji}
      </span>
      <span className="opacity-40 mr-5">
        {createAt.format("YYYY-MM-dddd-hh-mm-ss")}
      </span>
      <span
        onClick={() => onDelete(mood.id)}
        className="block bg-blue-800 p-1 rounded cursor-pointer hover:bg-blue-500 transition-all duration-200"
      >
        🗑️
      </span>
    </div>
  );
}
