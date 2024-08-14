import { React, useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Header = () => {
   const [toggle, setToggle] = useState(false);
   const [isFixed, setIsFixed] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         const currentScrollPosition = window.scrollY;
         setIsFixed(currentScrollPosition >= 30);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);
   return (
      <div
         className={`header__head space__padding flex justify-between items-center gap-4 relative top-0 left-0 w-full z-50 ${
            isFixed ? " bg-[var(--secondary-color)] sticky translate-y-0" : " bg-color translate-y-0"
         }`}
      >
         <div className="header__logo flex items-center justify-center">
            <Link to="/" className="flex justify-center items-center">
               <Icon icon="bi:back" style={{ color: "black", fontSize: "30px" }} />
               <span className="text-[30px] text-[var(--dark-color)] pl-1 font-semibold relative">Topics</span>
            </Link>
         </div>
         <div className="links__head hidden md:flex items-center justify-between gap-6">
            <Link to="/">Home</Link>
            <a href="/#browse">browse topics</a>
            <a href="#work">how it works</a>
            <a href="#faqs">faqs</a>
            <Link to="contact">contact</Link>
            <span className="sub__link ">
               <Link to="/" className="sub__inner flex justify-center items-center">
                  pages <Icon icon="iconamoon:arrow-down-2-thin" style={{ fontSize: "30px" }} />
               </Link>
               <ul className="dropdown">
                  <li>
                     <Link to="/listing-page">Public Listing</Link>
                  </li>
                  <li>
                     <Link to="/contact">Contact Form</Link>
                  </li>
               </ul>
            </span>
         </div>
         <div className="flex gap-4 items-center">
            <div className=" bg-[var(--white)] p-[10px] rounded-[50%]">
               <Icon icon="material-symbols-light:person-outline" style={{ fontSize: "30px" }} />
            </div>
            <div className="nav__md block md:hidden md:flex-col gap-1">
               {toggle ? (
                  <button onClick={() => setToggle(false)}>
                     <Icon icon="charm:cross" style={{ fontSize: "30px", color: "white" }} />
                  </button>
               ) : (
                  <button onClick={() => setToggle(true)}>
                     <Icon icon="fluent:navigation-16-filled" style={{ fontSize: "30px", color: "white" }} />
                  </button>
               )}

               {toggle && (
                  <div className="header__linksMd bg-[var(--secondary-color)] flex flex-col top-full left-0 absolute w-full space__padding">
                     <Link to="/" className="links py-3" onClick={() => setToggle(false)}>
                        Home
                     </Link>
                     <a href="#browse" className="links py-3" onClick={() => setToggle(false)}>
                        browse topics
                     </a>
                     <a href="#work" className="links py-3" onClick={() => setToggle(false)}>
                        how it works
                     </a>
                     <a href="#faqs" className="links py-3" onClick={() => setToggle(false)}>
                        faqs
                     </a>
                     <a href="#contact" className="links py-3" onClick={() => setToggle(false)}>
                        contact
                     </a>
                     <span className="sub__link pb-8 md:pb-0 ">
                        <Link to="/" className="flex  items-center">
                           pages <Icon icon="iconamoon:arrow-down-2-light" style={{ fontSize: "30px" }} />
                        </Link>
                        <ul className="dropdown opacity-100 md:opacity-0">
                           <li onClick={() => setToggle(false)}>
                              <Link to="/listing-page">Public Listing</Link>
                           </li>
                           <li onClick={() => setToggle(false)}>
                              <Link to="/contact">Contact Form</Link>
                           </li>
                        </ul>
                     </span>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};

export default Header;
