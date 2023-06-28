import { Link } from "react-router-dom";
import "./posts.css";

const PostItem = ({ post }) => {
  const ScrollUp = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="post-item">
      <div className="post-item-image-wrapper">
        <img src={post.image} alt={post.title} className="post-item-image" />
      </div>
      <div className="post-item-info-wrapper">
        <div className="post-item-info">
          <div className="post-item-auther">
            <strong>Auther: </strong>
            <Link className="post-item-aouther-username" to="/profile/1">
              {post.user.username}
            </Link>
          </div>
          <div className="post-item-date">
            {new Date(post.createdAt).toDateString()}
          </div>
        </div>
        <div className="post-item-details">
          <h4 className="post-item-title">{post.title}</h4>
          <Link
            onClick={ScrollUp}
            className="post-item-category"
            to={`/posts/categories/${post.category}`}
          >
            {post.category}
          </Link>
        </div>
        <p className="post-item-content">{post.content}</p>
        <Link className="post-item-link" to={`/posts/post-details/${post._id}`}>
          Reed more...
        </Link>
      </div>
    </div>
  );
};

export default PostItem;
