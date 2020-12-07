import CarouselHomePage from "../components/HomePage/CarouselHomePage/CarouselHomePage";
import Navbar from "../components/Navbar/Navbar";
import React, { Fragment } from "react";
import { MDBBtn, MDBIcon } from "mdbreact";
import FloatingButton from "../components/Reusable/FloatingButton";


const HomePage = () => {
  return (
    <>
    <Navbar />
    <div className="wraper" style={{marginTop:'4.3rem'}}>
        <CarouselHomePage />
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero doloribus assumenda eveniet ipsa, debitis nihil natus neque, nam commodi voluptas corporis similique consequatur, impedit totam voluptate? Ratione, error quo soluta harum labore ipsa eum dolorum tempore. Corrupti minus earum molestiae tempore, sed nemo laborum praesentium tempora numquam nobis quia perspiciatis!</h1>
        <button type="button" class="btn btn-primary">Primary</button>
        <a class="btn-floating btn-lg btn-default"><i class="fas fa-bolt"></i></a>
        <div>
          <FloatingButton />
        </div>
    </div>
    </>
  );
};

export default HomePage;
