import React from 'react';
import { MenuList } from '../Components/MenuList';
import MenuItem from '../Components/MenuItem';
import "../Styles/Menu.css";
import BannerImage from "../assets/menubackground2.jpg";



function Menu() {
    return (
        <div className="menu" style={{ backgroundImage: `url(${BannerImage})` }} >
            <h1 classname="menuTitle" id="menuhead"> OUR MENU </h1>
            <div className="menuList" id="overlay">
                {MenuList.map((menuItem, key) => {
                    return <MenuItem image={menuItem.image} name={menuItem.name} price={menuItem.price} />
                })}
            </div>
         </div>
    );
}
export default Menu;
