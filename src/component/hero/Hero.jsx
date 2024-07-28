import React, { useState } from "react";
import "./hero.css";
import { Icon } from "@iconify/react";
import { Business, Remote } from "../../assets2";
import { Link } from "react-router-dom";

const Hero = () => {
   const [intext, setIntext] = useState("");
   return (
      <div className="hero__head ">
         <div className="hero__upper">
            <h1>Discover. Learn. Enjoy</h1>
            <p>platform for creatives around the world </p>
            <div className="hero__input">
               <Icon icon="marketeq:search-alt-3" style={{ fontSize: "30px", color: "black" }} />
               <input type="text" value={intext} placeholder="Design,code,marketing,finace..." onChange={(e) => setIntext(e.target.value)} />
               <button>Search</button>
            </div>
         </div>
         <div className="hero__lower">
         <div className="hero__lower__left flex relative flex-col md:flex-row justify-center gap-6 top-[-100px] space__padding">
               <div className="hero__lower__upper">
                  <div className="prob__hero">
                     <div className="hero__upperone">
                        <h4>Web Designer</h4>
                        <p className="para">When you search for free CSS templates, you will notice that TemplateMo is one of the best websites.</p>
                     </div>
                     <div className="barge">14</div>
                  </div>
                 <div className="flex-1"> <img src={Remote} alt="remote" /></div>
               </div>

               <div className="hero__lowerdown">
                  <div className="hero__upper__in">
                     <div className="hero__lower-dow">
                        <div>
                           <h4>Finance</h4>
                           <p className="para2">
                              Topic Listing Template includes homepage, listing page, detail page, and contact page. You can feel free to edit and adapt for your CMS requirements.
                           </p>
                           <button className="learn"><Link to="/Web-design">Learn More</Link></button>
                        </div>
                        <div className="barge">25</div>
                     </div>
                     <div className="hero__lower-bottom">
                        <p>
                           Share
                           <span>
                              <Link>face</Link>
                              <Link>inst</Link>
                              <Link>X</Link>
                           </span>
                        </p>

                        <Icon icon="marketeq:search-alt-3" style={{ fontSize: "30px", color: "black" }} />
                     </div>
                  </div>
                  <img src={Business} alt="statistics" />
                  <section className="bg"></section>
               </div>
            </div>
         </div>
         
      </div>
   );
};

export default Hero;
