import { useState } from "react";
import { toast } from "react-toastify";

import "./update-comment.css";

const UpdateCommentModel = ({ setUpdateComment }) => {
  const [text, setText] = useState("post.title");

  const formSubmitHandler = (e) => {
    e.preventDefault()
    if (text.trim() === "") return toast.error("Please write something!");
  };

  return (
    <div className="update-comment">
      <form onSubmit={formSubmitHandler} className="update-comment-form">
        <abbr title="close">
          <span
            onClick={() => setUpdateComment(false)}
            className="update-Comment-form-close"
          >
            X
          </span>
        </abbr>
        <h1 className="update-comment-h1">Edit Comment</h1>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="update-comment-input"
        />
        <button className="update-comment-btn" type="submit">
          Edite Comment
        </button>
      </form>
    </div>
  );
};

export default UpdateCommentModel;
