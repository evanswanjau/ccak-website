import { Slide } from "react-reveal";

export const News = ({ data: { title, published, excerpt, image, url } }) => {
    return (
        <Slide bottom carousel>
            <a href={`/media-centre/news/${url}`} className="group">
                <div
                    className={`bg-[url('${image}')] bg-cover bg-center bg-no-repeat rounded-lg text-white h-40`}
                ></div>
                <p className="text-sm py-2 text-gray-400">{published}</p>
                <h3 className="text-black group-hover:text-[#ED7423] font-medium transition duration-300 ease-in-out">
                    {title}
                </h3>
                <p>{excerpt}</p>
            </a>
        </Slide>
    );
};
