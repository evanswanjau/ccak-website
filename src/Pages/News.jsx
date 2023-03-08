import { News } from "../Components/News";
import { MediaCentreSideBar } from "../Containers/mediaCentreSideBar";
import { UpcomingEvents } from "../Containers/upcomingEvents";
import { Slide } from "react-reveal";

export const NewsPage = () => {
    const data = [
        {
            title: "Don’t destroy greenery and don’t spoil scenery",
            published: "February 20, 2023",
            excerpt: "Lorem ipsum dolor sit amet, conser adipiscing elit...",
            image: "http://localhost:5173/src/assets/home/BGHomeVid.png",
            url: "url",
        },
        {
            title: "Don’t destroy greenery and don’t spoil scenery",
            published: "February 20, 2023",
            excerpt: "Lorem ipsum dolor sit amet, conser adipiscing elit...",
            image: "http://localhost:5173/src/assets/home/BGHomeVid.png",
            url: "url",
        },
        {
            title: "Don’t destroy greenery and don’t spoil scenery",
            published: "February 20, 2023",
            excerpt: "Lorem ipsum dolor sit amet, conser adipiscing elit...",
            image: "http://localhost:5173/src/assets/home/BGHomeVid.png",
            url: "url",
        },
        {
            title: "Don’t destroy greenery and don’t spoil scenery",
            published: "February 20, 2023",
            excerpt: "Lorem ipsum dolor sit amet, conser adipiscing elit...",
            image: "http://localhost:5173/src/assets/home/BGHomeVid.png",
            url: "url",
        },
        {
            title: "Don’t destroy greenery and don’t spoil scenery",
            published: "February 20, 2023",
            excerpt: "Lorem ipsum dolor sit amet, conser adipiscing elit...",
            image: "http://localhost:5173/src/assets/home/BGHomeVid.png",
            url: "url",
        },
        {
            title: "Don’t destroy greenery and don’t spoil scenery",
            published: "February 20, 2023",
            excerpt: "Lorem ipsum dolor sit amet, conser adipiscing elit...",
            image: "http://localhost:5173/src/assets/home/BGHomeVid.png",
            url: "url",
        },
        {
            title: "Don’t destroy greenery and don’t spoil scenery",
            published: "February 20, 2023",
            excerpt: "Lorem ipsum dolor sit amet, conser adipiscing elit...",
            image: "http://localhost:5173/src/assets/home/BGHomeVid.png",
            url: "url",
        },
        {
            title: "Don’t destroy greenery and don’t spoil scenery",
            published: "February 20, 2023",
            excerpt: "Lorem ipsum dolor sit amet, conser adipiscing elit...",
            image: "http://localhost:5173/src/assets/home/BGHomeVid.png",
            url: "url",
        },
        {
            title: "Don’t destroy greenery and don’t spoil scenery",
            published: "February 20, 2023",
            excerpt: "Lorem ipsum dolor sit amet, conser adipiscing elit...",
            image: "http://localhost:5173/src/assets/home/BGHomeVid.png",
            url: "url",
        },
        {
            title: "Don’t destroy greenery and don’t spoil scenery",
            published: "February 20, 2023",
            excerpt: "Lorem ipsum dolor sit amet, conser adipiscing elit...",
            image: "http://localhost:5173/src/assets/home/BGHomeVid.png",
            url: "url",
        },
        {
            title: "Don’t destroy greenery and don’t spoil scenery",
            published: "February 20, 2023",
            excerpt: "Lorem ipsum dolor sit amet, conser adipiscing elit...",
            image: "http://localhost:5173/src/assets/home/BGHomeVid.png",
            url: "url",
        },
        {
            title: "Don’t destroy greenery and don’t spoil scenery",
            published: "February 20, 2023",
            excerpt: "Lorem ipsum dolor sit amet, conser adipiscing elit...",
            image: "http://localhost:5173/src/assets/home/BGHomeVid.png",
            url: "url",
        },
    ];

    return (
        <div>
            <section className="text-center py-12">
                <Slide bottom>
                    <h1 className="text-4xl font-semibold my-5">
                        News Page
                    </h1>
                </Slide>
                <Slide bottom>
                    <p className="w-full px-5 md:w-6/12 mx-auto">
                        Welcome to our news page. Here you will find a variety
                        of news articles covering topics such as product
                        innovations, industry trends, company events, and more.
                    </p>
                </Slide>
            </section>
            <div className="flex flex-row px-6 lg:px-16">
                <div className="w-full lg:w-9/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 sm:gap-6 py-10">
                    {data.map((item) => {
                        return <News data={item} />;
                    })}
                </div>
                <div className="hidden lg:block w-4/12 pt-10 pl-10">
                    <MediaCentreSideBar category="press release" />
                </div>
            </div>
            <section>
                <UpcomingEvents/>
            </section>
        </div>
    );
};
