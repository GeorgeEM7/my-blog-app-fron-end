import { useState } from "react";
import { toast } from "react-toastify";
import "./add-comment.css";

const AddComment = () => {
  const [text, setText] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (text.trim() === "") return toast.error("Please write somthing");
    console.log(text);
    setText("");
  };

  return (
    <form onSubmit={formSubmitHandler} className="add-comment-form">
      <input
        className="add-comment-input"
        placeholder="Add Comment"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="add-comment-btn" type="submit">Comment</button>
    </form>
  );
};

export default AddComment;
