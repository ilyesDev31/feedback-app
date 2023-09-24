import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedBackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "text from context",
      rating: 9,
    },
  ]);
  const [feedBackEdit, setFeedBackEdit] = useState({
    item: {},
    edit: false,
  });
  // update feedback item
  const updateItem = (id, updatedItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
  };
  // setItem to be updated
  const handleEdit = (item) => {
    setFeedBackEdit({
      item,
      edit: true,
    });
  };
  // delete feedback
  const handleDelete = (id) => {
    if (window.confirm("do you want to delete this feedback")) {
      setFeedback((prev) => prev.filter((a) => a.id !== id));
    }
  };
  const addFeedBack = (obj) => {
    obj.id = uuidv4();
    setFeedback((prev) => [obj, ...prev]);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        handleDelete,
        handleAdd: addFeedBack,
        handleEdit,
        feedBackEdit,
        updateItem,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
