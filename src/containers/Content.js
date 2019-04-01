import React from "react";

import Card from "../components/Card";
import Featurette from "../components/Featurette";

// Setting up our content up here, separate from view logic
const defaultText =
  "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam \
      id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac \
      consectetur ac, vestibulum at eros. Praesent commodo cursus magna.";

const cardInfo = [
  { title: "Heading", content: defaultText, buttonText: "View details >>" },
  { title: "Heading", content: defaultText, buttonText: "View details >>" },
  { title: "Heading", content: defaultText, buttonText: "View details >>" }
];

const featuretteInfo = [
  {
    title: "First featurette heading.",
    subtitle: "It'll blow your mind.",
    content: defaultText
  },
  {
    title: "Oh yeah, it's that good.",
    subtitle: "See for yourself.",
    content: defaultText
  },
  {
    title: "And lastly, this one.",
    subtitle: "Checkmate.",
    content: defaultText
  }
];

const Content = () => (
  <div className="container marketing content-area">
    <div className="row card-area">
      {cardInfo.map(card => (
        <Card
          title={card.title}
          content={card.content}
          buttonText={card.buttonText}
        />
      ))}
    </div>
    {featuretteInfo.map((featurette, id) => (
      <Featurette
        title={featurette.title}
        subtitle={featurette.subtitle}
        content={featurette.content}
        mirror={id % 2} // Alternate these left/right
      />
    ))}
  </div>
);

export default Content;
