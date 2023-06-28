import { useState } from "react";
import { toast } from "react-toastify";
import "./create-post.css";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);

  const formSubmitHandeller = (e) => {
    e.preventDefault();
    if (title.trim() === "") return toast.error("Post Title is required!");
    if (category.trim() === "")
      return toast.error("Post category is required!");
    if (content.trim() === "") return toast.error("Post Content is required!");

    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);

    console.log({ title, category, content, file });
  };

  return (
    <section className="create-post">
      <h1 className="create-post-title">Create new Post</h1>
      <form onSubmit={formSubmitHandeller} className="create-post-form">
        <input
          className="create-post-input"
          type="text"
          placeholder="Post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          className="create-post-input"
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
          className="create-post-textarea"
          rows="5"
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <input
          type="file"
          name="file"
          id="file"
          className="create-post-image-upload"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit" className="create-post-btn">
          Create
        </button>
      </form>
    </section>
  );
};

export default CreatePost;
