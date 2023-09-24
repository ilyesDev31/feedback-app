import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedBackContext from "../context/FeedbackContext";

const FeedBackLi = () => {
  const { handleDelete, feedback } = useContext(FeedBackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No FeedBack</p>;
  }
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              key2={item.id}
              num={item.rating}
              text={item.text}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedBackLi;
