import CarouselHomePage from "../components/HomePage/CarouselHomePage/CarouselHomePage";
import Navbar from "../components/Navbar/Navbar";
import React, { Fragment } from "react";
import { MDBBtn, MDBIcon } from "mdbreact";
import FloatingButton from "../components/Reusable/FloatingButton";
import Styles from "./homepage.module.css" ;
import WhyUsHomePage from "../components/HomePage/Whyus/WhyUsHomePage";
import OurClient from "../components/HomePage/OurClinet/OurClient";
import FooterPage from "../components/Footer/FooterPage";
import OurService from "../components/HomePage/OurService/OurService";

const HomePage = () => {
  return (
    <>
    <Navbar />
    <div className={Styles.wrapper} >
        <CarouselHomePage />
        <WhyUsHomePage/>
        <OurClient/>
        <OurService/>
        <FooterPage/>
    </div>
   
    </>
  );
};

export default HomePage;
