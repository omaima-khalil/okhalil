import React from "react";

const Header = ({ siteTitle, siteDescription }) => {
  return (
    <div className="sticky-nav">
      <a href="/" className="sticky-nav-button">
        Home
      </a>
      <div className="sticky-nav-stack">
        <a href="/" className="sticky-nav-button">
          Blog
        </a>
        <a href="/" className="sticky-nav-button">
          Contact{" "}
        </a>
        <a href="/about" className="sticky-nav-button">
          About us
        </a>
      </div>
    </div>
  );
};

export default Header;
