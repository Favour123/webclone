import React from "react";
import { Girl, Podcast, Remote } from "../assets2";
import Topics from "./topics/Topics";
const topicpage = () => {
   return (
      <div className="contact__first">
         <div className="header__con space__padding">
            <p className="my-8">Homepage / Topics Listing</p>
            <h2 className="text-[46px]">Topics Listing</h2>
         </div>
         <div className="topicpage bg-white  space__padding">
            <h3 className="text-center py-8 font-bold text-3xl">Popular Topics</h3>
            <div className="card flex flex-col items-center gap-8  ">
               <Topics
                  className=""
                  Show={true}
                  heading={"Website Design"}
                  text={"Topic Listing includes home, listing, detail and contact pages. Feel free to modify this template for your custom websites."}
                  ranks={14}
                  Image={Remote}
                  barge={"barge blue"}
                  summary={"woman with arrow up"}
               />
               <Topics
                  Show={true}
                  heading={"Advertising"}
                  text={"Visit TemplateMo website to download free CSS templates. Lorem ipsum dolor, sit amet consectetur adipisicing elit animi necessitatibus"}
                  ranks={30}
                  Image={Girl}
                  barge={"barge red"}
                  summary={"woman with arrow up"}
               />
               <Topics
                  Show={true}
                  heading={"Podcast"}
                  text={"Lorem ipsum dolor sit amet consectetur mplateMo website to download "}
                  ranks={20}
                  Image={Podcast}
                  barge={"barge yellow"}
                  summary={"woman with arrow up"}
               />

               <div className="progess">
                  <ul className="flex flex-wrap md:flex-nowrap align-center justify-center gap-4 py-5 font-medium  sm:text-2xl md:text-2xl text-[--p-color]">
                     <li className="px-5 py-[10px] mx-1 bg-[var(--secondary-bg-color)] rounded-[10px] cursor-pointer ">Prev</li>
                     <li className="px-5 py-[10px] bg-[var(--secondary-color)] rounded-[10px] cursor-pointer">1</li>
                     <li className="px-5 py-[10px] rounded-[10px] cursor-pointer">2</li>
                     <li className="px-5 py-[10px] rounded-[10px] cursor-pointer">3</li>
                     <li className="px-5 py-[10px] cursor-pointer">4</li>
                     <li className="px-5 py-[10px] bg-[var(--secondary-bg-color)] rounded-[10px] cursor-pointer">Next</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};

export default topicpage;
