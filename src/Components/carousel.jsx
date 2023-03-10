export const LogoCarousel = ({ logos }) => {
    return (
        <div className=" flex items-center justify-center">
            {/* 1. */}
            <div className="w-[200%] h-20 overflow-hidden relative">
                {/* 2. */}
                <div className="w-[200%] flex items-center h-20 justify-around absolute left-0 animate gap-5 sm:gap-16 md:gap-20 lg:gap-32 animate">
                    {/* 3 */}
                    {logos.map((logo) => {
                        return (
                            <div className="flex justify-center items-start w-32 hover:scale-[1.1] duration-300 ease-in-out]">
                                <a href={logo.link} target="_blank">
                                    <img src={logo.image} alt={logo.name} />
                                </a>
                            </div>
                        );
                    })}
                    {logos.map((logo) => {
                        return (
                            <div className="flex justify-center items-start w-32 hover:scale-[1.1] duration-300 ease-in-out">
                                <a href={logo.link} target="_blank">
                                    <img src={logo.image} alt={logo.name} />
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
