import { useState } from "react";

import HeaderLeft from "./HeaderLeft";
import Navbar from "./Navbar";
import HeaderRight from "./HeaderRight";

import "./header.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="header-container">
      <header className="header">
        <HeaderLeft togglr={toggle} setToggle={setToggle} />
        <Navbar toggle={toggle} setToggle={setToggle} />
        <HeaderRight />
      </header>
    </div>
  );
};

export default Header;
