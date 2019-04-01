import React from "react";

const Featurette = ({ title, subtitle, content, mirror }) => (
  <>
    <hr className="featurette-divider" />
    <div className="row featurette">
      <div className={`col-md-7 ${mirror ? "order-md-2" : ""}`}>
        <h2 className="featurette-heading">
          {title} <span className="text-muted">{subtitle}</span>
        </h2>
        <p className="lead">{content}</p>
      </div>
      <div className={`col-md-5 ${mirror ? "order-md-1" : ""}`}>
        <svg
          className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
          width="500"
          height="500"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
          aria-label="Placeholder: 500x500"
        >
          <rect width="100%" height="100%" fill="#eee" />
        </svg>
      </div>
    </div>
  </>
);

export default Featurette;
