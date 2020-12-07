import React from "react";
import CarouselHomePage from "../components/HomePage/CarouselHomePage/CarouselHomePage";
import Navbar from "../components/Navbar/Navbar";


const HomePage = () => {
  return (
    <>
    <Navbar />
    <div className="wraper" style={{marginTop:'4.3rem'}}>
        <CarouselHomePage />
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero doloribus assumenda eveniet ipsa, debitis nihil natus neque, nam commodi voluptas corporis similique consequatur, impedit totam voluptate? Ratione, error quo soluta harum labore ipsa eum dolorum tempore. Corrupti minus earum molestiae tempore, sed nemo laborum praesentium tempora numquam nobis quia perspiciatis!</h1>
    </div>
    </>
  );
};

export default HomePage;
