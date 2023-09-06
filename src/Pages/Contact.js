import React from 'react';
import contactBanner from "../assets/menuBanner.jpg";
import "../Styles/Contact.css";




function Contact() {
    return (
        <div className="contact" >
            <div className="leftSide" style={{ backgroundImage: `url(${contactBanner})` }} >


            </div>

            <div className="rightSide">
                <div className="contactcard">
                <h1>Contact US</h1>
                <p>Do reach out to us via Whatsapp contact details as below </p>
                <p><b>Syahin</b><span> : </span>+60 11 1095 5291</p>
                </div>
            </div>

         </div>
    );
}
export default Contact;
