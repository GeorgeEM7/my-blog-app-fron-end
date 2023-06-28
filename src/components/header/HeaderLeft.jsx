
import { ImPencil } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
const HeaderLeft = ({toggle, setToggle}) => {
    return ( 
<div className="header-left">
<div
  onClick={() => setToggle((prev) => !prev)}
  className="header-menu"
>
  <GiHamburgerMenu />
</div>

<div className="header-logo">
  <strong>Glog</strong>
  <ImPencil />
</div>
</div>
     );
}
 
export default HeaderLeft;