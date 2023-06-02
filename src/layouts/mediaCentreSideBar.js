import { InputForm } from "../components/forms/input-form";
import { TwitterEmbedd } from "../components/twitterEmbedd";
import { Fade } from "react-reveal";

export const MediaCentreSideBar = ({
    category,
    searchData,
    updateSearchData,
}) => {
    return (
        <div>
            <Fade>
                <div className="mb-5">
                    <InputForm
                        type="text"
                        name="keyword"
                        label={`Search ${category.replace(/-/g, " ")}`}
                        data={searchData}
                        updateData={updateSearchData}
                    />
                </div>
            </Fade>

            <TwitterEmbedd />
        </div>
    );
};
