import React from "react";
import HeroSlider from "react-slick";

//Component
import { NextArrow, PrevArrow } from "./Arrows.component";


const HeroCarousal = () => {
    const settingsLG = {
        arrows: true,
        autoplay:true,
        centerMode: true,
        centerPadding: "300px",
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    const  settings = { 
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const images = [
        "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1627463869605-48fbcda8253b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1627412466304-5ea99923ab5a?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1627421097282-b548dcefd1ad?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    ];
    return (
    <>
       <div className="lg:hidden">
       <HeroSlider {...settings}>
            {images.map((image) => (
                <div className="w-full h-44 md:h-80 py-3">
                    <img src={image} alt = "testing" className="w-full h-full "/>
                </div>
            ))}
        </HeroSlider>
       </div>

       <div className="hidden lg:block">
       <HeroSlider {...settingsLG}>
            {images.map((image) => (
                <div className="w-full h-96 px-2 py-3">
                    <img src={image} alt = "testing" className="w-full h-full"/>
                </div>
            ))}
        </HeroSlider>
       </div>
    </>
    );
};

export default HeroCarousal;