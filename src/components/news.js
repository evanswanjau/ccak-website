import { Fade } from "react-reveal";
import { simpleDate } from "../helpers/date";

export const News = ({
    data: { id, category, title, published, excerpt, image, folder },
    carousel = false,
}) => {
    return (
        <Fade>
            <div
                className={`group bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-b-xl ${
                    carousel && "mr-3"
                }`}
            >
                <a
                    href={`/media-centre/${category}/read-more/${id}/${title
                        .replace(/ /g, "-")
                        .replace("'", "")
                        .toLowerCase()}`}
                >
                    <div
                        style={{
                            backgroundImage: `url(${
                                process.env.REACT_APP_IMAGEKIT_URL +
                                folder +
                                "/" +
                                image
                            })`,
                        }}
                        className={`bg-cover bg-center bg-no-repeat text-white h-48 rounded-t-xl`}
                    ></div>
                    <div className="bg-white p-3 rounded-lg">
                        <p className="text-sm py-2 text-gray-400">
                            Published: {simpleDate(published)}
                        </p>
                        <h3 className="mb-2 text-black group-hover:text-[#ED7423] font-medium transition duration-300 ease-in-out">
                            {title}
                        </h3>
                        <p
                            className="text-gray-600 line-clamp-2"
                            title={excerpt}
                        >
                            {excerpt}
                        </p>
                    </div>
                </a>
            </div>
        </Fade>
    );
};
