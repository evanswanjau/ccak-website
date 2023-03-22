import { News } from "../../Components/news";
import { MediaCentreSideBar } from "../../Containers/mediaCentreSideBar";
import { UpcomingEvents } from "../../Containers/upcomingEvents";
import { Slide } from "react-reveal";

export const NewsPage = () => {
    const data = [
        {
            id: 1,
            category: "news",
            title: "Don’t destroy greenery and don’t spoil scenery",
            published: "February 20, 2023",
            excerpt: "Lorem ipsum dolor sit amet, conser adipiscing elit...",
            image: "news/news_default.jpg",
            url: "1/dont-destroy-greenery-and-dont-spoil-scenery",
        },
        {
            id: 2,
            category: "news",
            title: "Don’t destroy greenery and don’t spoil scenery",
            published: "February 20, 2023",
            excerpt: "Lorem ipsum dolor sit amet, conser adipiscing elit...",
            image: "news/news_default.jpg",
            url: "2/dont-destroy-greenery-and-dont-spoil-scenery",
        },
        {
            id: 3,
            category: "news",
            title: "Don’t destroy greenery and don’t spoil scenery",
            published: "February 20, 2023",
            excerpt: "Lorem ipsum dolor sit amet, conser adipiscing elit...",
            image: "news/news_default.jpg",
            url: "3/dont-destroy-greenery-and-dont-spoil-scenery",
        },
        {
            id: 4,
            category: "news",
            title: "Don’t destroy greenery and don’t spoil scenery",
            published: "February 20, 2023",
            excerpt: "Lorem ipsum dolor sit amet, conser adipiscing elit...",
            image: "news/news_default.jpg",
            url: "4/dont-destroy-greenery-and-dont-spoil-scenery",
        },
        {
            id: 5,
            category: "news",
            title: "Don’t destroy greenery and don’t spoil scenery",
            published: "February 20, 2023",
            excerpt: "Lorem ipsum dolor sit amet, conser adipiscing elit...",
            image: "news/news_default.jpg",
            url: "5/dont-destroy-greenery-and-dont-spoil-scenery",
        },
        {
            id: 6,
            category: "news",
            title: "Don’t destroy greenery and don’t spoil scenery",
            published: "February 20, 2023",
            excerpt: "Lorem ipsum dolor sit amet, conser adipiscing elit...",
            image: "news/news_default.jpg",
            url: "6/dont-destroy-greenery-and-dont-spoil-scenery",
        },
    ];

    return (
        <div className="pt-[4rem] lg:pt-[8.2rem]">
            <section className="text-center py-12">
                <Slide bottom>
                    <h1 className="text-4xl font-semibold my-5">News Page</h1>
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
                <div className="w-full lg:w-9/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-6 sm:gap-6 py-10">
                    {data.map((item, i) => {
                        return <News key={i} data={item} />;
                    })}
                </div>
                <div className="hidden lg:block w-4/12 pt-10 pl-10">
                    <MediaCentreSideBar category="news" />
                </div>
            </div>
            <section>
                <UpcomingEvents />
            </section>
        </div>
    );
};
