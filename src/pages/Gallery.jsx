import React from "react";
import GalleryWithCard from "../components/Gallery/GalleryWithCard";
import GalleryWithGallery from "../components/Gallery/GalleryWithGallery";
import Navbar from "../components/Navbar/Navbar";


const Gallery = () => {
  return (
    <>
    <Navbar />
    <h1 style={{marginTop:'4.3rem'}}>mas tomo ganteng Galery</h1>
    <GalleryWithGallery />
    
    </>
  );
};

export default Gallery;
