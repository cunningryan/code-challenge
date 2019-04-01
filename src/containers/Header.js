import React, { useState } from "react";

import NavItem from "../components/NavItem";

// Separating this out for reduced repitition
// Also prepares for the case when there's user data
// coming in for this
const navLinks = [
  { title: "Home", active: true },
  { title: "Link" },
  { title: "Disabled", disabled: true }
];

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <header>
      <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Carousel
        </a>
        <button className="navbar-toggler" onClick={() => setShowNav(!showNav)}>
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse ${showNav ? "show" : ""}`}>
          <ul className="navbar-nav mr-auto" onClick={() => setShowNav(false)}>
            {navLinks.map(linkObj => (
              <NavItem
                title={linkObj.title}
                link={linkObj.link}
                active={linkObj.active}
                disabled={linkObj.disabled}
              />
            ))}
          </ul>
          <form className="form-inline mt-2 mt-md-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};
export default Header;
