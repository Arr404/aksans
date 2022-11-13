import { useState } from "react";
import { Link } from "react-router-dom";

import {
  AiOutlineDown,
  AiOutlineRight,
  // AiFillHome,
  // AiTwotoneAppstore,
  AiOutlineCloseSquare,
} from "react-icons/ai";
import {
  // BsPeopleFill,
  BsList,
} from "react-icons/bs";
import "./Nav.css";

const Nav = (props) => {
  const [toggle, setToggle] = useState({ platform: false, media: false });
  const [dropdown, setDropdown] = useState(false);
  const handleTogglePlatform = () => {
    setToggle((prevState) => ({ ...prevState, platform: true }));
  };
  const handleToggleMedia = () => {
    setToggle((prevState) => ({ ...prevState, media: !toggle.media }));
  };
  const handleLeave = () => {
    setToggle((prevState) => ({ ...prevState, platform: false }));
  };
  const handleDropdown = () => setDropdown(!dropdown);
  return (
    <>
      <ul className="nav">
        <div className="link">
          <div className="logo">
            <Link to="/">
              <img src="./logo.svg" alt="Logo" />
            </Link>
          </div>
         </div>

        <div className="login-navigasi">
          <Link to="/login">
            <button className="button">LOGIN</button>
          </Link>
        </div>
      </ul>
      <ul className={`nav-mobile ${dropdown ? "active" : ""}`}>
        <div className="link">
                  <div className="logo">
                    <Link to="/">
                      <img src="./logo.svg" alt="Logo" />
                    </Link>
                  </div>
                 </div>

                <div className="login-navigasi">
                  <Link to="/login">
                    <button className="button">LOGIN</button>
                  </Link>
                </div>
      </ul>
      <div
        className="nav-dropdown-content"
        style={{
          transform: `scale(${dropdown ? "1" : "0"})`,
          animation: dropdown ? "nav-dropdown 0.2s" : "",
        }}
      >
        <Link to="/">
          <div className="dropdown-menu">
            {/* <AiFillHome /> */}
            Home
          </div>
        </Link>
        <Link to="/caleg">
          <div className="dropdown-menu">
            {/* <BsPeopleFill /> */}
            Caleg
          </div>
        </Link>
        <div
          className="dropdown-menu"
          onClick={() => setToggle({ platform: !toggle.platform })}
        >
          Platform
        </div>
        <div className={`menu-content ${toggle.platform ? "" : "hidden"}`}>
          {/* <AiTwotoneAppstore /> */}
          <Link to="/sejarah">
            <li>Sejarah</li>
          </Link>
          <Link to="/prinsip">
            <li>Prinsip Dasar</li>
          </Link>
          <Link to="/politik">
            <li>Politik</li>
          </Link>
        </div>
        <div
          className="dropdown-menu"
          onClick={() => setToggle({ media: !toggle.media })}
        >
          Media
        </div>
        <div className={`menu-content ${toggle.media ? "" : "hidden"}`}>
          <Link to="/news">
            <li>News</li>
          </Link>
          <Link to="/dokumentasi">
            <li>Dokumentasi</li>
          </Link>
        </div>
        <Link to="/login">
          <button className="dropdown-button">LOGIN</button>
        </Link>
      </div>
    </>
  );
};
Nav.defaultProps = {
  index: 1,
};
export default Nav;
