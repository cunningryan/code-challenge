import React from "react";

import Carousel from "./containers/Carousel";
import Content from "./containers/Content";
import Header from "./containers/Header";
import Footer from "./containers/Footer";

const App = () => (
  <>
    <Header />
    <main role="main">
      <Carousel />
      <Content />
      <Footer />
    </main>
  </>
);

export default App;
