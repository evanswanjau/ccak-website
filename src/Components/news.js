import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

export const News = ({
    data: { category, title, published, excerpt, image, url },
}) => {
    return (
        <Fade>
            <Link
                to={`/media-centre/${category}/read-more/${url}`}
                className="group"
            >
                <div
                    style={{
                        backgroundImage: `url(${
                            process.env.REACT_APP_IMAGEKIT + image
                        })`,
                    }}
                    className={`bg-cover bg-center bg-no-repeat rounded-lg text-white h-40`}
                ></div>
                <p className="text-sm py-2 text-gray-400">{published}</p>
                <h3 className="text-black group-hover:text-[#ED7423] font-medium transition duration-300 ease-in-out">
                    {title}
                </h3>
                <p className="text-gray-600">{excerpt}</p>
            </Link>
        </Fade>
    );
};
