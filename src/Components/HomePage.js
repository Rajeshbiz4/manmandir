import React from "react";
import LogoComponent from "./LogoComponents";
import CardComponents from "./CardComponents";
import AboutYourSelf from "./AboutyourselfComponents";
import OurPurpose from "./OurPurpose";
import ContactUs from "./ContactUs";
import Navbar from "./Navbar";
import CardImageMap from "./CardImageMap";
import Login from "./login";
import Signup from "./Signup";
import HeaderComponent from "./HeaderComponents";
import FooterComponents from "./FooterComponents";
 //import "../styles/Sass.scss";
import Categories from "./Categories";
import CardComponent from "./CardComponents";
import "../styles/logo.scss"
import "../styles/about.scss"
import "../styles/ourPurpose.scss"
import "../styles/contactus.scss"
import "../styles/navbar.scss"
import "../styles/login.scss"
import "../styles/signup.scss"
import "../styles/header.scss"
import "../styles/card.scss"
import "../styles/categories.scss"
import "../styles/navbar2.scss"



const HomePage = () => {
  return (
    <div>
      <LogoComponent />
      <Navbar />
      <CardComponent/>
      <Categories/>
      <AboutYourSelf />
      <OurPurpose />
      <ContactUs />
    </div>
  );
};
export default HomePage;
