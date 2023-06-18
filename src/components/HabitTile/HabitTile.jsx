import "./HabitTile.css";
import { MdArchive } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";

export const HabitTile = ({ habit }) => {
  const { name } = habit;
  return (
    <div className="habit-tile">
      <h1>{name}</h1>
      <div className="action-icons">
        <MdArchive className="archieve-icon" />
        <FaTrashAlt className="trash-icon" />
      </div>
    </div>
  );
};
