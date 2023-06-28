import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { posts } from "../../dummyData";
import { TbFileUpload } from "react-icons/tb";
import { AiFillLike, AiFillDelete } from "react-icons/ai";
import { HiPencilAlt } from "react-icons/hi";

import "./post-details.css";
import AddComment from "../../components/comments/AddComent";
import CommentList from "../../components/comments/CommentList";
import UpdatePostModel from "./Update-post-model";

const PostDetails = () => {
  const { id } = useParams();
  const post = posts.find((p) => p._id === parseInt(id));
  
  useEffect(() => window.scrollTo(0, 0), []);

  const [file, setFile] = useState(null);
  const [updatePost, setUpdatePost] = useState(false);

  const updateImageSubmitHandler = (e) => {
    e.preventDefault();
    if (!file) return toast.warning("There is no image");
    console.log("updated Succefully");
  };

  const deletePostHandler = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Post has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Changes are not saved");
      }
    });
  }

  return (
    <section className="post-details">
      <div className="post-details-image-wrapper">
        <img
          className="post-details-image"
          src={file ? URL.createObjectURL(file) : post.image}
          alt={post.title}
        />
        <form
          onSubmit={updateImageSubmitHandler}
          className="update-post-image-form"
        >
          <label htmlFor="file" className="update-image-label">
            <TbFileUpload />
            Select new image
          </label>
          <input
            onChange={(e) => setFile(e.target.files[0])}
            style={{ display: "none" }}
            type="file"
            name="file"
            id="file"
          />
          <button className="upload-btn" type="submit">
            Upload
          </button>
        </form>
      </div>
      <h1 className="post-detials-title">{post.title}</h1>
      <div className="post-details-user-info">
        <img src={post.user.image} alt="" className="post-details-user-image" />
        <div className="post-details-username">
          <strong>
            <Link to="/profile/1">{post.user.username}</Link>
          </strong>
          <span>{post.createdAt}</span>
        </div>
      </div>
      <p className="post-details-content">{post.content}</p>
      <div className="post-details-icons-wrapper">
        <div>
          <span>
            <AiFillLike />
          </span>{" "}
          <small>{post.likes.length} likes</small>
        </div>
        <div>
          <span onClick={()=> setUpdatePost(true)}>
            <HiPencilAlt />
          </span>{" "}
          <span onClick={deletePostHandler}>
            <AiFillDelete />
          </span>
        </div>
      </div>
      <AddComment />
      <CommentList />
      {updatePost && <UpdatePostModel post={post} setUpdatePost={setUpdatePost}/>}
    </section>
  );
};

export default PostDetails;
