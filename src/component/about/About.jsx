import React, { useState } from "react";
import Topics from "../topics/Topics";
import { Remote } from "../../assets2";
import "./about.css";

const About = () => {
   const [activeTab, setActiveTab] = useState("Design");

   const tabs = ["Design", "Marketing", "Finance", "Music", "Education"];

   const handleTabClick = (tab) => {
      setActiveTab(tab);
   };

   return (
      <div className="about p-5" id="browse">
         <div className="about__title">
            <h1 className="text-2xl text-[var(--p-color)] font-semibold">Browse Topics</h1>
            <ul>
               {tabs.map((tab, index) => (
                  <li key={index} className={activeTab === tab ? "active" : ""} onClick={() => handleTabClick(tab)}>
                     {tab}
                  </li>
               ))}
            </ul>
         </div>
         <div className="abouts__lists space__padding">
            <div className={`abouts ${activeTab === "Design" ? "active" : ""}`} style={{ display: activeTab === "Design" ? "flex" : "none" }}>
               <Topics heading={"Web Design"} text={"Topics Listing Template based on Bootstrap 5"} ranks={14} Image={Remote} barge={"barge grey"} summary={"cartoon picture"} />
               <Topics heading={"Graphic"} text={"Lorem ipsum dolor sit amet consectetur"} ranks={75} Image={Remote} barge={"barge grey"} summary={"woman looking circle"} />
               <Topics heading={"Logo Design"} text={"Lorem ipsum dolor sit amet consectetur"} ranks={100} Image={Remote} barge={"barge grey"} summary={"woman with arrow up"} />
            </div>
            <div className={`abouts ${activeTab === "Marketing" ? "active" : ""}`} style={{ display: activeTab === "Marketing" ? "flex" : "none" }}>
               <Topics heading={"Advertising"} text={"Lorem ipsum dolor sit amet consectetur"} ranks={30} Image={Remote} barge={"barge grey"} summary={"laptop with a person"} />
               <Topics heading={"Video content"} text={"Lorem ipsum dolor sit amet consectetur"} ranks={65} Image={Remote} barge={"barge grey"} summary={"man and a girl"} />
               <Topics heading={"Viral Tweet"} text={"Lorem ipsum dolor sit amet consectetur"} ranks={50} Image={Remote} barge={"barge grey"} summary={"woman with twitter logo"} />
            </div>
            <div className={`abouts ${activeTab === "Finance" ? "active" : ""}`} style={{ display: activeTab === "Finance" ? "flex" : "none" }}>
               <Topics heading={"Investments"} text={"Lorem ipsum dolor sit amet consectetur"} ranks={30} Image={Remote} barge={"barge red"} summary={"person looking on a laptop"} />
               <Topics heading={"Investments"} text={"Lorem ipsum dolor sit amet consectetur"} ranks={30} Image={Remote} barge={"barge red"} summary={"person looking on a laptop"} />
               <Topics heading={"Investments"} text={"Lorem ipsum dolor sit amet consectetur"} ranks={30} Image={Remote} barge={"barge red"} summary={"person looking on a laptop"} />
            </div>
            <div className={`abouts ${activeTab === "Music" ? "active" : ""}`} style={{ display: activeTab === "Music" ? "flex" : "none" }}>
               <Topics heading={"Composing"} text={"Lorem ipsum dolor sit amet consectetur"} ranks={45} Image={Remote} barge={"barge green"} summary={"piano"} />
               <Topics heading={"Online Music"} text={"Lorem ipsum dolor sit amet consectetur"} ranks={45} Image={Remote} barge={"barge green"} summary={"scared logo"} />
               <Topics heading={"Podcast"} text={"Lorem ipsum dolor sit amet consectetur"} ranks={20} Image={Remote} barge={"barge green"} summary={"woman and man on wheelchair"} />
            </div>
            <div className={`abouts ${activeTab === "Education" ? "active" : ""}`} style={{ display: activeTab === "Education" ? "flex" : "none" }}>
               <Topics heading={"Graduation"} text={"Lorem ipsum dolor sit amet consectetur"} ranks={80} Image={Remote} barge={"barge black"} summary={"graduation"} />
               <Topics heading={"Graduation"} text={"Lorem ipsum dolor sit amet consectetur"} ranks={80} Image={Remote} barge={"barge black"} summary={"graduation"} />
               <Topics heading={"Graduation"} text={"Lorem ipsum dolor sit amet consectetur"} ranks={80} Image={Remote} barge={"barge black"} summary={"graduation"} />
            </div>
         </div>
      </div>
   );
};

export default About;
