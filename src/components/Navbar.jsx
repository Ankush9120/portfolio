import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo";

const Navbar = () => {
  return (
    <nav>
      <div className="font-semibold text-2xl flex items-center">
        <Logo /> <span className="ml-12">Portfolio</span>
      </div>

      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
        <li>
          <NavLink to="/Skills">Skills</NavLink>
        </li>
        <li>
          <NavLink to="/Projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
