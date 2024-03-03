import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

const NextArrow = ({ className, onClick }) => {
    return (
        <HiArrowRight
            color="#000"
            className={className}
            style={{
                display: "block",
                background: "#fff",
                width: "50px",
                height: "50px",
                borderRadius: "100%",
                padding: "10px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                marginRight: "-10px",
                zIndex: 10,
            }}
            onClick={onClick}
        />
    );
};

const PrevArrow = ({ className, onClick }) => {
    return (
        <HiArrowLeft
            color="#000"
            className={className}
            style={{
                display: "block",
                background: "#fff",
                width: "50px",
                height: "50px",
                borderRadius: "100%",
                padding: "10px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                marginLeft: "-10px",
                zIndex: 10,
            }}
            onClick={onClick}
        />
    );
};

export const Carousel = ({ items, autoplay, slides, show, reverse, arrow }) => {
    let settings = {
        infinite: true,
        speed: 2000,
        autoplaySpeed: 5000,
        slidesToShow: show,
        slidesToScroll: slides,
        autoplay: autoplay,
        rtl: reverse,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    if (arrow)
        settings = {
            ...settings,
            arrows: true,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
        };

    return <Slider {...settings}>{items}</Slider>;
};
