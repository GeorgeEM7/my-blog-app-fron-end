import { Link } from "react-router-dom";

import { AiTwotoneHome } from "react-icons/ai";
import { BsPostcard } from "react-icons/bs";
import { MdOutlinePostAdd, MdLock } from "react-icons/md";

const Navbar = ({ toggle, setToggle }) => {
  return (
    <div className="navbar-container">
      <nav
        style={{
          clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%",
        }}
        className="navbar"
      >
        <ul className="nav-links">
          <Link to="/" className="nav-link">
            <AiTwotoneHome /> Home
          </Link>
          <Link to="/posts" className="nav-link">
            <BsPostcard /> Posts
          </Link>
          <Link to="/posts/create-post" className="nav-link">
            <MdOutlinePostAdd /> Create
          </Link>
          <Link to="/admin-dashboard" className="nav-link">
            <MdLock /> Admin Dashboard
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
