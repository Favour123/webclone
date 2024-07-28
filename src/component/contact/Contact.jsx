import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
   const[value, setValue]=useState("");
   const[email, setEmail]=useState("");
   const[area, setArea]=useState("");
   const[textup, setTextup]=useState("");
   return (
      <div className="contact__first">
         <div className="header__con space__padding">
            <p className="my-8">Homepage / Contact Form</p>
            <h2 className="text-[46px]">Contact Form</h2>
         </div>
         <div className="contact__middle py-[100px] px-24 bg-[var(--secondary-bg-color)] ">
            <h3 className="text-[32px] p-4 mb-6">We'd love to hear from you</h3>
            <div className="flex flex-col gap-8 sm:flex-row md:flex-row">
               <div className="contact__Mfirst">
                  <form>
                     <div className="form__top flex gap-4">
                        <input className="mb-6 w-full py-[13px] pl-[20px] rounded-[100px] h-14 leading-tight text-2xl" type="text"  value={value} onChange={(e)=> setValue(e.target.value)} placeholder="Name" />
                        <input className="mb-6 w-full py-[13px] pl-[20px] rounded-[100px] h-14 leading-tight text-2xl" type="email"   value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Email address"  />
                     </div>

                     <input className="mb-6 w-full py-[13px] pl-[20px] rounded-[100px] h-14 leading-tight text-2xl" type="text" value={area} onChange={(e)=> setArea(e.target.value)} placeholder="Subject" />
                     <div className="flex flex-col">
                        <textarea className="w-full rounded-[20px] h-36 text-2xl py-[13px] pl-5" value={textup} onChange={(e)=> setTextup(e.target.value)} placeholder="Tell me about the project"></textarea>
                        <button className="rounded-[100px] bg-[var(--secondary-color)] py-[15px] px-5 mt-6 text-xl font-semibold text-white ml-auto">Submit</button>
                     </div>
                  </form>
               </div>
               <div className="map">
                  <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15812.00728555005!2d4.485214165282802!3d7.7896301612042045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103787c0698166b5%3A0xdd7a00eb58713bf8!2sANETTCOM%20TECHNOLOGIES!5e0!3m2!1sen!2sng!4v1713482434954!5m2!1sen!2sng"
                     width="100%"
                     height="250"
                     allowFullScreen=""
                     loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <div className="map__inner">
                     <h3 className="text-[32px] font-semibold mb-6"> Topic Listing Center</h3>
                     <p> Bay St &, Larkin St, San Francisco, CA 94109, United States</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Contact;
