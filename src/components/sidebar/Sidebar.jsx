import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = ({ categories }) => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Categories</h2>
      <ul className="sidebar-links">
        {categories.map((category) => (
          <Link className="sidebar-link" key={category._id} to={`/posts/categories/${category.title}`}>
            {category.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
