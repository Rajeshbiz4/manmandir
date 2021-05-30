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

const HomePage = () => {
  return (
    <div>
      <LogoComponent />
      <Navbar />
      <AboutYourSelf />
      <OurPurpose />
      <ContactUs />
    </div>
  );
};
export default HomePage;
