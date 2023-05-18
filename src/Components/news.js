import { Fade } from "react-reveal";
import { simpleDate } from "../helpers/date";

export const News = ({
    data: { id, category, title, published, excerpt, image, folder },
}) => {
    return (
        <Fade>
            <a
                href={`/media-centre/${category}/read-more/${id}/${title
                    .replace(/ /g, "-")
                    .replace("'", "")
                    .toLowerCase()}`}
                className="group"
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
                    className={`bg-cover bg-center bg-no-repeat rounded-lg text-white h-40`}
                ></div>
                <p className="text-sm py-2 text-gray-400">
                    {simpleDate(published)}
                </p>
                <h3 className="text-black group-hover:text-[#ED7423] font-medium transition duration-300 ease-in-out">
                    {title}
                </h3>
                <p className="text-gray-600 line-clamp-2" title={excerpt}>
                    {excerpt}
                </p>
            </a>
        </Fade>
    );
};
