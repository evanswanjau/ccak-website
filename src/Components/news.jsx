import { Fade } from "react-reveal";

export const News = ({ data: { title, published, excerpt, image, url } }) => {
    return (
        <Fade>
            <a href={`/media-centre/news/${url}`} className="group">
                <div
                    style={{
                        backgroundImage: `url(${
                            import.meta.env.VITE_IMAGEKIT + image
                        })`,
                    }}
                    className={`bg-cover bg-center bg-no-repeat rounded-lg text-white h-40`}
                ></div>
                <p className="text-sm py-2 text-gray-400">{published}</p>
                <h3 className="text-black group-hover:text-[#ED7423] font-medium transition duration-300 ease-in-out">
                    {title}
                </h3>
                <p className="text-gray-600">{excerpt}</p>
            </a>
        </Fade>
    );
};
