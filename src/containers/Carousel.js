import React, { useState } from "react";

import CarouselItem from "../components/CarouselItem";

// Collecting the JSX content and slide info here
const carouselItems = [
  {
    id: 1,
    content: (
      <div className="carousel-caption text-left">
        <h1>Example headline.</h1>
        <p>
          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id
          elit non mi porta gravida at eget metus. Nullam id dolor id nibh
          ultricies vehicula ut id elit.
        </p>
        <p>
          <a className="btn btn-lg btn-primary" href="#" role="button">
            Sign up today
          </a>
        </p>
      </div>
    )
  },
  {
    id: 2,
    content: (
      <div className="carousel-caption">
        <h1>Another example headline.</h1>
        <p>
          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id
          elit non mi porta gravida at eget metus. Nullam id dolor id nibh
          ultricies vehicula ut id elit.
        </p>
        <p>
          <a className="btn btn-lg btn-primary" href="#" role="button">
            Learn more
          </a>
        </p>
      </div>
    )
  },
  {
    id: 3,
    content: (
      <div className="carousel-caption text-right">
        <h1>One more for good measure.</h1>
        <p>
          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id
          elit non mi porta gravida at eget metus. Nullam id dolor id nibh
          ultricies vehicula ut id elit.
        </p>
        <p>
          <a className="btn btn-lg btn-primary" href="#" role="button">
            Browse gallery
          </a>
        </p>
      </div>
    )
  }
];

const Carousel = () => {
  const [slideId, setSlideId] = useState(1);

  return (
    <div className="carousel slide">
      <ol className="carousel-indicators">
        {carouselItems.map(item => (
          <li
            onClick={() => setSlideId(item.id)}
            className={`${slideId === item.id ? "active" : ""}`}
          />
        ))}
      </ol>
      <div className="carousel-inner">
        {carouselItems.map(item => (
          <CarouselItem id={item.id} active={slideId} content={item.content} />
        ))}
      </div>
      <a
        className="carousel-control-prev"
        href="#"
        role="button"
        onClick={() =>
          setSlideId(slideId === 1 ? carouselItems.length : slideId - 1)
        }
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#"
        role="button"
        onClick={() =>
          setSlideId(slideId === carouselItems.length ? 1 : slideId + 1)
        }
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
