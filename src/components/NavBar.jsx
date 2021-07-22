import React from "react";
import "./css/NavBar.css";

//render the app Navbar
export default function NavBar() {
  return (
    <nav className="navbar navbar-custom bg-custom">
      <a className="navbar-brand" href="../public/index.js">
        <img
          src={"media/logo.png"}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Logo"
        />
        Pomo
      </a>
    </nav>
  );
}
