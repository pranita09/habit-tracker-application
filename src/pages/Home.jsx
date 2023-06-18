import { useNavigate } from "react-router-dom";
import { HabitTile } from "../components/HabitTile/HabitTile";
import { habits } from "../data/data";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <h1 className="title">Home</h1>
      <hr />
      <div className="habit-tiles">
        {habits?.map((habit) => (
          <HabitTile key={habit.id} habit={habit} />
        ))}
      </div>
      <div>
        <button
          className="archieve-page-btn"
          onClick={() => navigate("/archieves")}
        >
          Go to Archieves
        </button>
      </div>
    </div>
  );
};
