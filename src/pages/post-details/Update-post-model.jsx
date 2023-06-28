import { useState } from "react";
import { toast } from "react-toastify";

import "./update-post.css";

const UpdatePostModel = ({ setUpdatePost, post }) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [category, setCategory] = useState(post.category);

  const formSubmitHandler = (e) => {
    e.preventDefault()
    if (title.trim() === "") return toast.error("Post Title is required!");
    if (category.trim() === "")
      return toast.error("Post category is required!");
    if (content.trim() === "") return toast.error("Post Content is required!");
    console.log({title, content, category});
    setUpdatePost(false)
  };

  return (
    <div className="update-post">
      <form onSubmit={formSubmitHandler} className="update-post-form">
        <abbr title="close">
          <span
            onClick={() => setUpdatePost(false)}
            className="update-post-form-close"
          >
            X
          </span>
        </abbr>
        <h1 className="update-post-h1">Update Post</h1>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="update-post-input"
        />
        <select
          className="update-post-input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" disabled>
            Select a Category
          </option>
          <option value="music">Music</option>
          <option value="coffe">Coffe</option>
        </select>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="5"
          className="update-post-textarea"
        ></textarea>
        <button className="update-post-btn" type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdatePostModel;
