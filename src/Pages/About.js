import React from 'react';
import BannerImage from "../assets/menuBanner2.jpg";
//menuBanner2.jpgr
//aboutBanner.jpg
import "../Styles/About.css";

function About() {
    return (
        <div className="about">
            <div className="aboutTop"
            style={{ backgroundImage: `url(${BannerImage})` }} ></div>
            <div className="aboutBottom">
                <h1> ABOUT US</h1>
                <p> A family owned business dedicated to creating sweet and savoury treats for you and your loved ones.
                 From afternoon tea to parties and functions, we are here to add some sweetness to your occassions! Reach out to us and let us know how we can fulfil your sweet cravings....
                 </p>
            </div>
        </div>
    );
}
export default About;
