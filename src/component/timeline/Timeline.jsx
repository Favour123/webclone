import React, { useState } from "react";
import { Faq } from "../../assets2";
import "./timeline.css";
import { Icon } from "@iconify/react";



const Timeline = () => {
   
   const [activeIndex, setActiveIndex] = useState(0); 

   const handleAccordionClick = (index) => {
      setActiveIndex(index === activeIndex ? -1 : index);
   };

   const accordions = [
      {
         title: "What is Topics listing",
         content:
            "Topic Listing is free Bootstrap 5 CSS template. You are not allowed to redistribute this template on any other template collection website without our permission. Please contact TemplateMo for more detail. Thank you.",
      },
      {
         title: "How to find a topic",
         content:
            "Topic Listing is free Bootstrap 5 CSS template. You are not allowed to redistribute this template on any other template collection website without our permission. Please contact TemplateMo for more detail. Thank you.",
      },
      {
         title: "Does it need to pay",
         content:
            "Topic Listing is free Bootstrap 5 CSS template. You are not allowed to redistribute this template on any other template collection website without our permission. Please contact TemplateMo for more detail. Thank you.",
      },
   ];

   return (
      <div className="timeline__section">
         <div className="timeline__top space__padding" id="work">
            <section className="timeline__inner">
               <h1>How does it work?</h1>
               <div className="timeline__div">
                  <div className="line"></div>
                  <ul>
                     <li>
                        <h3>Search your favourite topic</h3>
                        <div className="time__inner">
                           <div className="icon"></div>
                           <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, cumque magnam? Sequi, cupiditate quibusdam alias illum sed esse ad dignissimos libero sunt, quisquam
                              numquam aliquam? Voluptas, accusamus omnis?
                           </p>
                        </div>
                     </li>
                     <li>
                        <h3>Bookmark & Keep it for yourself</h3>
                        <div className="time__inner">
                           <div className="icon"></div>
                           <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, cumque magnam? Sequi, cupiditate quibusdam alias illum sed esse ad dignissimos libero sunt, quisquam
                              numquam aliquam? Voluptas, accusamus omnis?
                           </p>
                        </div>
                     </li>
                     <li>
                        <h3>Read & Enjoy</h3>
                        <div className="time__inner">
                           <div className="icon"></div>
                           <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, cumque magnam? Sequi, cupiditate quibusdam alias illum sed esse ad dignissimos libero sunt, quisquam
                              numquam aliquam? Voluptas, accusamus omnis?
                           </p>
                        </div>
                     </li>
                  </ul>
               </div>
               <div className="timeline__bottom">
                  <p>Want to learn more?</p>
                  <button>Check out Youtube</button>
               </div>
            </section>
            <div className="timeline__bg"></div>
         </div>
         <div className="frequenccy space__padding" id="faqs">
            <h1 className="faq__head">Frequently Asked Questions</h1>
            <div className="accordion">
               <img src={Faq} alt="person thinking"  />
               <div className="accordion__head">
                  {accordions.map((accordion, index) => (
                     <div className="accordion__div" key={index}>
                        <div className="accordion__title" style={{ color: activeIndex === index ? "var(--primary-color)" : "",backgroundColor: activeIndex === index ? "#e7f1ff": "white" }} onClick={() => handleAccordionClick(index)}>
                           <h4 className="text-2xl">{accordion.title}</h4>
                           <Icon icon={activeIndex === index ? "iconamoon:arrow-up-2-thin" : "iconamoon:arrow-down-2-thin"} style={{ fontSize: "30px" }} />
                        </div>
                        <div className={`accordion-para ${activeIndex === index ? "active" : ""}`}>
                           <p>{accordion.content}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Timeline;
