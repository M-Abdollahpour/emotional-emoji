import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import type { Mood } from "~/type/mood";
import { moods } from "~/utiles/dictionaries/moods";
export default function MoodSelector({
  onSubmit,
}: {
  onSubmit: (newMood: Mood) => void;
}) {
  const { register, handleSubmit } = useForm();
  const option = Object.entries(moods).map(([key, value]) => ({
    type: key,
    title: value.title,
    emoji: value.emoji,
  }));
  const createNewMood = (data: any) => {
    onSubmit({ id: nanoid(), type: data.newMood, create_at: new Date() });
  };
  return (
    <div className="bg-gray-900 p-6 my-4 rounded">
      <h2 className="text-2xl font-bold mb-4">Selector:</h2>
      <form onSubmit={handleSubmit(createNewMood)}>
        <div className="flex gap-5">
          <select
            {...register("newMood")}
            className=" block w-full bg-gray-400 rounded  p-2"
          >
            {option.length
              ? option.map((item) => (
                  <option value={item.type} key={item.type}>
                    {item.title}
                    {item.emoji}
                  </option>
                ))
              : "-"}
          </select>
          <button
            className="bg-blue-800 px-6 py-2 rounded hover:bg-blue-500 transition-all duration-200 cursor-pointer"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
