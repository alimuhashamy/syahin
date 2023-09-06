import React from 'react';
//import logo from "../assets/logo.jpeg";
import {Link as Link} from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import "../Styles/Footer.css";




function Footer() {
    return (
    <div className="footer" >
        <div className="socialMedia">
        <Link to="https://www.facebook.com/syahinkitchen"><FacebookIcon /></Link> <Link to="https://www.instagram.com/syahins_kitchen/"> <InstagramIcon /> </Link>
        <p> &copy; 2018 syahinskitchen.com  </p>
        </div >
    </div>
    );
}
export default Footer;
