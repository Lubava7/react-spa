import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <div className="container">
        {/* <div className='header-brand'>{props.brand}</div> */}
        <Link to="/" className="header-brand">
          {props.brand}
        </Link>
      </div>
    </header>
  );
}

export default Header;
