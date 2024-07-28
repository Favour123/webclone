import { Icon } from "@iconify/react/dist/iconify.js";
import { React, useState } from "react";
import { Business, College, Remote, Young } from "../../assets2";

const Learning = () => {
   const [sumit, setSumit] = useState("");
   return (
      <div className="">
         <div className="learning__head space__padding">
            <div className="flex flex-col md:flex-row gap-3 justify-center items-center px-10 py-8">
               <div className="flex-1 flex flex-col justify-between gap-2 text-white">
                  <p className="flex">Homepage / Web Design</p>
                  <h2 className="text-[46px] font-bold">Introduction to Web Design 101</h2>
                  <div>
                     <button className="bg-[var(--secondary-color)] text-xl font-semibold text-white px-4 py-3 rounded-[100px]">Read more</button>
                     <Icon></Icon>
                  </div>
               </div>
               <div className="flex-1 ml-4 self-center rounded-2xl overflow-hidden ">
                  <img src={Remote} alt="eye" />
               </div>
            </div>
         </div>
         <section className="space__padding flex flex-col justify-center items-center  w-full">
            <div className="head  max-w-[700px] w-full">
               <h3 className="text-3xl text-black mb-5 font-semibold text-center">Introduction to Web Design</h3>
               <p className="text-[var(--p-color)] text-xl mb-5">
                  So how can you stand out, do something unique and interesting, build an online business, and get paid enough to change life. Please visit TemplateMo website to download free website
                  templates.
               </p>
               <p className="text-[var(--p-color)] text-xl">
                  <strong className="font-bold">There are so many ways to make money online.</strong> Below are several platforms you can use to find success. Keep in mind that there is no one path
                  everyone can take. If that were the case, everyone would have a million dollars.
               </p>
            </div>
            <blockquote className="m-[30px] p-10 text-[28px] text-center rounded-2xl font-bold bg-[var(--secondary-bg-color)] max-w-[500px] w-full">
               Freelancing your skills isn’t going to make you a millionaire overnight.
            </blockquote>
            <div className="boottm  max-w-[600px] w-full">
               <div className="flex flex-col md:flex-row sm:flex-row gap-1 items-center">
                  <div className="flex-1 rounded-2xl overflow-hidden m-5">
                     <img src={Business} alt="business" />
                  </div>
                  <div className="flex-1 rounded-2xl overflow-hidden m-5">
                     <img src={College} alt="college working" />
                  </div>
               </div>
               <p className="text-xl text-[var(--p-color)] font-normal mx-5">
                  Most people start with freelancing skills they already have as a side hustle to build up income. This extra cash can be used for a vacation, to boost up savings, investing, build
                  business.
               </p>
            </div>
         </section>
      <div className="flex flex-col items-center justify-center bg-[var(--secondary-bg-color)]">
         <div className=" py-11 px-10 flex flex-col md:flex-row sm:flex-row  items-center justify-between gap-4  max-w-[900px] w-full">
            <div className=" flex-1 rounded-2xl overflow-hidden">
               <img src={Young} alt="young" />
            </div>
            <div className="flex-1 p-[50px]">
               <h3 className="mb-5 text-2xl text-black">Get Newsletter</h3>
               <form>
                  <input  type="text" placeholder="Email Address" value={sumit} onChange={(e) => setSumit(e.target.value)} className="border-solid border-[var(--p-color)] border-[1px] mb-6 w-full py-[13px] pl-[20px] rounded-[100px] h-14 leading-tight text-2xl" />
                  <button className="bg-[var(--secondary-color)] text-xl font-semibold text-white px-4 py-3 rounded-[100px] w-full">Subscribe</button>
               </form>
            </div>
         </div>
         </div>
      </div>
   );
};

export default Learning;
