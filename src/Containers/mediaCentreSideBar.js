import { TwitterEmbedd } from "../Components/twitterEmbedd";
import { Fade } from "react-reveal";

export const MediaCentreSideBar = ({ category }) => {
    return (
        <div>
            <Fade>
                <input
                    className="w-full bg-gray-100 mb-5 font-manjari outline-0 rounded-md pt-3 pb-2 px-3"
                    type="text"
                    placeholder={`Search ${category}`}
                />
            </Fade>

            <TwitterEmbedd />
        </div>
    );
};
