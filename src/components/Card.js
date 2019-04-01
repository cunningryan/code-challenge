import React from "react";

const Card = ({ title, content, buttonText, buttonLink }) => (
  <div className="col-lg-4 single-card">
    <svg
      className="bd-placeholder-img rounded-circle"
      width="140"
      height="140"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
    >
      <rect width="100%" height="100%" fill="#777" />
    </svg>
    <h2>{title}</h2>
    <p>{content}</p>
    <p>
      <a
        className="btn btn-secondary"
        href={`${buttonLink ? buttonLink : "#"}`}
        role="button"
      >
        {buttonText}
      </a>
    </p>
  </div>
);

export default Card;
