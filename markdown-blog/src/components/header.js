import React from "react";
import "./components.css";
import { Link } from "react-router-dom";
import avatar from "../images/engineer.png";
import githubIcon from "../images/github.png";
import IgIcon from "../images/instagram.png";
import "../global.css"

const user = {
  githubLink: "https://github.com/yeumkyuseok",
  igLink: "https://www.instagram.com/kyuseok_y/",
};

const Header = () => {
  return (
    <header className="site-header">
      <div className="branding">
        <img className="avatar" src={avatar} alt="" />
        <p className="header">
          <Link id="header-title" to="/">
            Q's blog
          </Link>
        </p>
      </div>
      <nav className="site-nav">
        <ul>
          <li>
            <Link className="links" to="/about">
              About
            </Link>
          </li>
          <li>
            <a href={user.githubLink}>
              <img className="icon-button" src={githubIcon} alt="" />
            </a>
          </li>
          <li>
            <a href={user.igLink}>
              <img
                className="icon-button"
                href="https://www.instagram.com/kyuseok_y/"
                src={IgIcon}
                alt=""
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
