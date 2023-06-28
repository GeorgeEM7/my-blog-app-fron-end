import { MdOutlinePostAdd, MdLogin, MdOutlineMenu } from "react-icons/md";
import { AiTwotoneHome, AiOutlineUserAdd } from "react-icons/ai";
import { Link } from "react-router-dom";

const HeaderRight = () => {
  return (
    <div className="header-right">
      <Link to="/signin" className="header-right-link">
        <MdLogin />
        <span>Signin</span>
      </Link>
      <Link to="signup" className="header-right-link">
        <AiOutlineUserAdd />
        <span>Signup</span>
      </Link>
    </div>
  );
};

export default HeaderRight;
