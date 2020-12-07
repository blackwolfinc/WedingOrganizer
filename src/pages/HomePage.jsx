import CarouselHomePage from "../components/HomePage/CarouselHomePage/CarouselHomePage";
import Navbar from "../components/Navbar/Navbar";
import React, { Fragment } from "react";
import { MDBBtn, MDBIcon } from "mdbreact";
import FloatingButton from "../components/Reusable/FloatingButton";
import Styles from "./homepage.module.css" ;

const HomePage = () => {
  return (
    <>
    <Navbar />
    <div className={Styles.wrapper} >
        <CarouselHomePage />
        
        <div style={{height:'fit-content',width:'fit-content'}}>
          <FloatingButton />
        </div>
    </div>
    </>
  );
};

export default HomePage;
