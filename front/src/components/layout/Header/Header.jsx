import React from 'react';
import {ReactNavbar} from "overlay-navbar";
import logo from '../../../images/logo.png';
import {FaUserAlt} from 'react-icons/fa';
import {BsSearch} from 'react-icons/bs';
import {BsCart3} from 'react-icons/bs';

function Header() {
  return (
    <ReactNavbar 
        burgerColor="#11425e"
        burgerColorHover="#db1212"
        logo={logo}
        logoWidth="15vmax"
        logoHoverColor="#e8dae4"
        logoHoverSize="10px"
        navColor1="#061c40"
        link1Text="Home"
        link2Text="Products"
        link3Text="About Us"
        link4Text="Contact"
        link1Url="/"
        link2Url="/products"
        link3Url="/about"
        link4Url="/contact"
        link1Size="1.5vmax"
        link1Color="#f2f3f5"
        nav1justifyContent="flex-end"
        nav2justifyContent="flex-end"
        nav3justifyContent="flex-start"
        nav4justifyContent="flex-start"
        nav1Transition="0.2"
        link1ColorHover="#1863db"
        link2Margin="1.5vmax"
        link3Margin="0"
        link4Margin="1.5vmax"
        profileIcon="true"
        profileIconUrl="/login"
        ProfileIconElement={FaUserAlt}
        profileIconColor="#1863db"
        profileIconColorHover="#f2f3f5"
        profileIconMargin="1vmax"
        profileIconTransition="0.7"
        searchIcon="true"
        SearchIconElement={BsSearch}
        searchIconColor="#1863db"
        searchIconColorHover="#f2f3f5"
        searchIconMargin="1vmax"
        searchIconTransition="0.7"
        cartIcon="true"
        CartIconElement={BsCart3}
        cartIconColor="#1863db"
        cartIconColorHover="#f2f3f5"
        cartIconMargin="1vmax"
        cartIconTransition="0.7"
    />
  )
}

export default Header