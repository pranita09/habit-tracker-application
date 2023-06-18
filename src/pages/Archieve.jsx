import { useNavigate } from "react-router-dom";
import { HabitTile } from "../components/HabitTile/HabitTile";
import { habits } from "../data/data";

export const Archieve = () => {
  const navigate = useNavigate();
  const archieveHabits = habits.filter((habit) => habit.archieved);
  return (
    <div className="home">
      <h1 className="title">Archieves</h1>
      <hr />
      <div className="habit-tiles">
        {archieveHabits?.map((habit) => (
          <HabitTile key={habit.id} habit={habit} />
        ))}
      </div>
      <div>
        <button className="archieve-page-btn" onClick={() => navigate("/")}>
          Go to Home
        </button>
      </div>
    </div>
  );
};
