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
                <div
                    className={` lg:mb-5 ${
                        [
                            "external-publications",
                            "internal-publications",
                            "newsletters",
                        ].includes(category)
                            ? "mx-auto w-full lg:w-4/12 text-center"
                            : "w-full"
                    }`}
                >
                    <InputForm
                        type="text"
                        name="keyword"
                        label={`Search ${category.replace(/-/g, " ")}`}
                        data={searchData}
                        updateData={updateSearchData}
                    />
                </div>
            </Fade>
            <div
                className={`hidden lg:${
                    ![
                        "external-publications",
                        "internal-publications",
                        "newsletters",
                    ].includes(category) && "block"
                }`}
            >
                <TwitterEmbedd />
            </div>
        </div>
    );
};
