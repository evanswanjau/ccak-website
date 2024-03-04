import { Fade } from "react-reveal";
import { simpleDate } from "../helpers/date";

export const ResearchRead = ({
    data: { id, category, title, published, excerpt, image, folder },
}) => {
    image = image === "" ? "pdf-icon.png" : image;

    return (
        <Fade>
            <a
                href={`/resource-centre/${category}/read-more/${id}/${title
                    .replace(/ /g, "-")
                    .replace("'", "")
                    .toLowerCase()}`}
                className="group flex bg-gray-50 rounded-lg p-5 space-x-4 items-center"
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
                    className={`w-[180px] h-[250px] bg-cover bg-center bg-no-repeat text-white`}
                ></div>
                <div className="w-9/12 text-left">
                    <p className="text-sm py-2 text-gray-500">
                        {simpleDate(published)}
                    </p>
                    <h3 className="text-gray-700 group-hover:text-[#ED7423] text-xl font-bold transition duration-300 ease-in-out">
                        {title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2" title={excerpt}>
                        {excerpt}
                    </p>
                </div>
            </a>
        </Fade>
    );
};
