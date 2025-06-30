import React, { useEffect } from "react";
import Banner from "./Banner";
import NewsLater from "./NewsLater";
import FeaturesSection from "./FeaturesSection";
import Marquiee from "./Marquiee";
import UpcomingEvents from "./UpcomingEvents";
import CountAnimation from "./CountAnimation";
import Organizer from './Organizer';
import Faq from './Faq';

const Home = () => {
  useEffect(() => {
    document.title = "All Event | Home";
  }, []);
  return (
    <div>
      <section>
        <Banner />
      </section>
      <section className=" bg-primary/80 mt-4">
        <Marquiee />
      </section>
      <section>
        <UpcomingEvents />
      </section>
      <section>
        <Organizer />
      </section>
            <section>
        <Faq/>
      </section>
      <section>
        <FeaturesSection />
      </section>
      <section>
        <CountAnimation />
      </section>
      <section>
        <NewsLater />
      </section>
    </div>
  );
};

export default Home;
