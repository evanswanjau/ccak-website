import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const LogoCarousel = ({
    logos,
    show = 6,
    reverse = false,
    size = '4em',
}) => {
    const settings = {
        infinite: true,
        speed: 2000,
        slidesToShow: show,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: reverse,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            {logos.map((logo, i) => {
                return (
                    <div
                        key={i}
                        className="hover:scale-[1.1] duration-300 ease-in-out border-none"
                        title={logo.name}
                    >
                        <a
                            href={logo.link}
                            target="_blank"
                            rel="noreferrer"
                            className="flex justify-center items-center border-none"
                        >
                            <img
                                src={logo.image}
                                alt={logo.name}
                                style={{ maxHeight: size }}
                            />
                        </a>
                    </div>
                );
            })}
        </Slider>
    );
};
