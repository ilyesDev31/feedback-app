import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "./shared/Card";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
const FeedbackItem = ({ key2, num, text }) => {
  const { handleDelete, handleEdit } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display"> {num} </div>
      <button onClick={() => handleDelete(key2)} className="close">
        <FaTimes color="purple" />
      </button>

      <button
        className="edit"
        onClick={() => handleEdit({ id: key2, rating: num, text })}
      >
        <FaEdit color="purple" />
      </button>
      <div className="text-display"> {text} </div>
    </Card>
  );
};

export default FeedbackItem;
