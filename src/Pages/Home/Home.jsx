import React from "react";
import Banner from "./Banner";
import NewsLater from "./NewsLater";
import FeaturesSection from "./FeaturesSection";
import Marquiee from "./Marquiee";

const Home = () => {
  return (
    <div>
      <section>
        <Banner />
      </section>
    <section className=" bg-primary/50 mt-4">
        <Marquiee/>
    </section>
      <section>
        <FeaturesSection />
      </section>
      <section>
        <NewsLater />
      </section>
    </div>
  );
};

export default Home;
