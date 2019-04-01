import React from "react";

// ${ active > id ? "carousel-item-prev" : "" }
// ${ active < id ? "carousel-item-next" : "" }

const CarouselItem = ({ id, content, active }) => (
  <div
    className={`carousel-item ${id === active ? "active" : ""}${
      active > id ? " carousel-item-prev" : ""
    }${active < id ? " carousel-item-next" : ""}
  `}
    style={{
      transform: `translateX(${(id - active) * 100}%)`
    }}
  >
    <svg
      className="bd-placeholder-img"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      focusable="false"
      role="img"
    >
      <rect width="100%" height="100%" fill="#777" />
    </svg>
    <div className="container">{content}</div>
  </div>
);

export default CarouselItem;
