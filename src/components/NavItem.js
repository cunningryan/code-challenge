import React from "react";

const NavItem = ({ title, link, active, disabled }) => (
  <li className="nav-item">
    <a
      className={`nav-link ${disabled ? "disabled" : ""} ${
        active ? "active" : ""
      }`}
      href={`${link || "#"}`}
    >
      {title}
    </a>
  </li>
);

export default NavItem;
