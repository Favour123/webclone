import React from "react";
import Hero from "../hero/Hero";
import About from "../about/About";
import Timeline from "../timeline/Timeline";

const Home = () => {
   return (
      <div className="home__head">
         <Hero />
         <About />
         <Timeline />
      </div>
   );
};

export default Home;
