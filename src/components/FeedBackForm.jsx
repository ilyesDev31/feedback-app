import { useState, useContext, useEffect } from "react";
import RatingSelect from "./RatingSelect";
import Card from "./shared/Card";
import Button from "./shared/Button";
import FeedbackContext from "../context/FeedbackContext";

const FeedBackForm = () => {
  const { handleAdd, feedBackEdit, updateItem } = useContext(FeedbackContext);
  const [input, setInput] = useState("");
  const [disabledBtn, setDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  useEffect(() => {
    if (feedBackEdit.edit === true) {
      setDisabled(false);
    }
    setInput(feedBackEdit.item.text);
    setRating(feedBackEdit.item.rating);
  }, [feedBackEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim().length > 10) {
      const newFeedBack = {
        text: input,
        rating,
      };
      if (feedBackEdit.edit === true) {
        updateItem(feedBackEdit.item.id, newFeedBack);
      } else {
        handleAdd(newFeedBack);
      }
      setInput("");
    }
  };

  const handleText = (e) => {
    setInput(e.target.value);
    if (e.target.value.trim().length >= 10) {
      setDisabled(false);
      setMessage(null);
    } else if (e.target.value.trim().length === 0) {
      setMessage(null);
    } else {
      setDisabled(true);
      setMessage("Text must be atleast 10 characters");
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            value={input}
            onChange={handleText}
            type="text"
            placeholder="write a review"
          />
          <Button type="submit" version="primary" isDisabled={disabledBtn}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedBackForm;
