import React from "react";
import Banner from "./Banner";
import NewsLater from "./NewsLater";
import FeaturesSection from "./FeaturesSection";
import Marquiee from "./Marquiee";
import UpcomingEvents from "./UpcomingEvents";
import CountAnimation from "./CountAnimation";

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
      <UpcomingEvents/>
    </section>
      <section>
        <FeaturesSection />
      </section>
      <section>
        <CountAnimation/>
      </section>
      <section>
        <NewsLater />
      </section>
    </div>
  );
};

export default Home;
