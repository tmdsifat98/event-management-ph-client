import React from "react";
import Banner from "./Banner";
import NewsLater from "./NewsLater";

const Home = () => {
  return (
    <div>
      <section>
        <Banner />
      </section>

      <section>
        <NewsLater />
      </section>
    </div>
  );
};

export default Home;
