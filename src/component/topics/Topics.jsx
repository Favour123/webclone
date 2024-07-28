import React from "react";
import "./topic.css";
const Topics = ({ heading, text, ranks, Image, summary, barge, Show }) => {
   return (
      <div className={`topics__list shadow ${Show && "flex flex-col justify-between  max-w-3xl w-full"} `}>
         <div className=" flex justify-between gap-8 flex-1">
            <div className={`hero__upperone ${Show && "flex flex-col justify-between  gap-2"}`}>
               <h4 className="text-2xl font-semibold">{heading}</h4>
               <p className=" text-2xl text-[#717275]">{text}</p>
               <div>{Show && <button className="bg-[var(--secondary-color)] text-xl font-semibold text-white px-4 py-3 rounded-[100px]"> Learn More</button>}</div>
            </div>
            <div className={`rounded-lg w-max text-[var(--white)] p-2 h-max ${barge}`}>{ranks}</div>
         </div>
         <div className="flex-1">
            <img src={Image} alt={summary} />
         </div>
      </div>
   );
};

export default Topics;
