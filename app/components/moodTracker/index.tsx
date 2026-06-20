import type { Mood } from "~/type/mood";
import MoodHistory from "./history";
import MoodSelector from "./selector";
import MoodSummary from "./summry";
import { nanoid } from "nanoid";
import { useState } from "react";
import type { Id } from "~/type";

const MoodTracker = () => {
  // const moods: Mood[] = [
  //   { id: nanoid(), type: "happy" },
  //   { id: nanoid(), type: "sad" },
  //   { id: nanoid(), type: "neutral" },
  //   { id: nanoid(), type: "sleepy" },
  // ];
  const [moods, setMoods] = useState<Mood[]>([]);
  const addNewMood = (newMood: Mood) => {
    setMoods((prev) => {
      return [...prev, newMood];
    });
  };
  const removeMood = (id: Id) => {
    setMoods((prev) => {
      return prev.filter((moods) => moods.id !== id);
    });
  };
  return (
    <div className="container p-6 mx-auto">
      <MoodSelector onSubmit={addNewMood} />
      <MoodSummary moods={moods} />
      <MoodHistory moods={moods} onDelete={removeMood} />
    </div>
  );
};
export default MoodTracker;
