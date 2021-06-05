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
import "../styles/Sass.scss";
import Categories from "./Categories";
import CardComponent from "./CardComponents";

const HomePage = () => {
  return (
    <div>
      <LogoComponent />
      <Navbar />
      <Categories/>
      <AboutYourSelf />
      <OurPurpose />
      <ContactUs />
    </div>
  );
};
export default HomePage;
