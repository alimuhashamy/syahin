import React from 'react';
import BannerImage from "../assets/skhomebanner2.jpg";
import "../Styles/Home.css";
import { Link } from "react-router-dom";




function Home() {
    return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }} >
        <div  className="headerContainer">
            <h1 id="heading">Syahins Kitchen</h1>
            <p id="tagline">"Tickling your tastebuds"</p>
            <Link to="/menu">
            <button>ORDER NOW </button>
            </Link>
        </div>
    </div>
    );
}
export default Home;
