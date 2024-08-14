import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import "../contactinner/contactinner.css";
const Footer = () => {
   const [selectOption, setselectOption] = useState("English");
   return (
      <div className="footer pt-4 md:py-8">
         <div className="contact__title flex justify-between flex-wrap gap-6 space__padding">
            <div className="header__logo flex flex-1  items-stretch text-[30px] px-6">
               <Link to="/" className="flex justify-center items-stretch">
                  <Icon icon="bi:back" style={{ color: "black", fontSize: "30px" }} />
                  <span className="text-[30px] text-[var(--dark-color)] pl-1 font-semibold relative">Topics</span>
               </Link>
            </div>
            <div className="contact__center">
               <h4>Resources</h4>
               <p className="p__text">
                  <Link to="/">Home</Link>
               </p>
               <p className="p__text">
                  {" "}
                  <Link to="/">How it works</Link>
               </p>
               <p className="p__text">
                  {" "}
                  <Link to="/">FAQs</Link>
               </p>
               <p className="p__text">
                  {" "}
                  <Link to="/">Contact</Link>
               </p>
            </div>
            <div className="contact__center">
               <h4>Information</h4>
               <p className="p__text">
                  <a href="tel:305-240-9671">305-240-9671</a>
               </p>

               <p className="p__text">
                  <a href="malto:info@company.com">info@company.com</a>
               </p>
            </div>
            <div className="contact__center">
               <form>
                  <select
                     className="bg-[var(--secondary-color)] text-white text-xl p-4 rounded-xl"
                     value={selectOption}
                     onChange={(e) => {
                        setselectOption(e.target.value);
                     }}
                  >
                     <option value="Spanish">Spanish</option>
                     <option value="Irish">Irish</option>
                  </select>
               </form>

               <p className="p__text">Copyright © 2048 Topic Listing Center. All rights reserved.</p>
               <p className="p__text">Design: TemplateMo</p>
            </div>
         </div>
      </div>
   );
};

export default Footer;
