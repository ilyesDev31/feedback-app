import { useContext } from "react";
import FeedBackContext from "../context/FeedbackContext";
const FeedBackStats = () => {
  const { feedback } = useContext(FeedBackContext);
  // calculate rating average
  let average =
    feedback.reduce((a, b) => {
      return a + b.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h4> {feedback.length} Reviews </h4>
      <h4>Average Rating : {isNaN(average) ? 0 : average}</h4>
    </div>
  );
};

export default FeedBackStats;
