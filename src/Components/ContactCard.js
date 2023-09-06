import React from "react";
import cardimage from "../assets/contactcard.png";

function contactCard( ) {
    return (
        <div className="contactCard">
            <div style={{ backgroundImage: `url(${cardimage})` }}></div>
            <h1>Whatsapp : 601110955291</h1>
            <p>Address : No. 6377, Jalan Wan Mohammad Salleh, 33300, Gerik Perak </p>
         </div>
    );
}
export default contactCard;
