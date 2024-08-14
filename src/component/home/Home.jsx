import React from "react";
import Hero from "../hero/Hero";
import About from "../about/About";
import Timeline from "../timeline/Timeline";
import { Contactinner } from "..";

const Home = () => {
   return (
      <div className="home__head">
         <Hero />
         <About />
         <Contactinner />
      </div>
   );
};

export default Home;
