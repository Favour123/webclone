import React from "react";
import "./contactinner.css";
const Contact = () => {
   return (
      <div className="contact__info">
         <h2 className="text-center py-4 w-full font-semibold text-4xl mb-4 ">Get in touch</h2>
         <div className="flex-nowrap  flex-col md:flex-row justify-between gap-7 space__padding">
            <div className="map__location">
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15812.00728555005!2d4.485214165282802!3d7.7896301612042045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103787c0698166b5%3A0xdd7a00eb58713bf8!2sANETTCOM%20TECHNOLOGIES!5e0!3m2!1sen!2sng!4v1713482434954!5m2!1sen!2sng"
                  width="100%"
                  height="250"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
               ></iframe>
            </div>
            <div className="contact__center">
               <h4 className="text-black font-semibold text-[28px]">Head office</h4>
               <p className="p__text1">Bay St &, Larkin St, San Francisco, CA 94109, United States</p>
               <p className="p__text">
                  Phone <a href="305-240-9671">305-240-9671</a>
               </p>

               <p className="p__text">
                  Email <a href="info@company.com">info@company.com</a>
               </p>
            </div>
            <div className="contact__center">
               <h4 className="text-black font-semibold text-[28px] ">Head office</h4>
               <p className="p__text1">Bay St &, Larkin St, San Francisco, CA 94109, United States</p>
               <p className="p__text">
                  Phone <a href="305-240-9671"> 305-240-9671</a>
               </p>
               <p className="p__text">
                  Email <a href="info@company.com">info@company.com</a>
               </p>
            </div>
         </div>
      </div>
   );
};

export default Contact;
