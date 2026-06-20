import type { Mood } from "~/type/mood";
import MoodItem from "./item";
import type { Id } from "~/type";

export default function MoodHistory({
  moods,
  onDelete,
}: {
  moods: Mood[];
  onDelete: (id: Id) => void;
}) {
  return (
    <div className="bg-gray-900 p-6 my-4 rounded">
      <h2 className="text-2xl font-bold mb-4">History:</h2>
      {moods.length ? (
        <ul className="flex flex-col gap-3">
          {moods.map((mood) => (
            <li key={mood.id}>
              <MoodItem mood={mood} onDelete={onDelete} />
            </li>
          ))}
        </ul>
      ) : (
        <div>No moods recorded</div>
      )}
    </div>
  );
}
