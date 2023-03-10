import { Event } from "../../Components/event";
import { MediaCentreSideBar } from "../../Containers/mediaCentreSideBar";
import { RecentNews } from "../../Containers/recentNews";
import { Slide } from "react-reveal";

export const EventsPage = () => {
    const data = [
        {
            title: "Netherlands Enterprise Agency",
            venue: "KICC",
            image: "http://localhost:5173/src/assets/home/BGHomeVid.png",
            url: "mission-40k",
        },
        {
            title: "Netherlands Enterprise Agency",
            venue: "KICC",
            image: "http://localhost:5173/src/assets/home/BGHomeVid.png",
            url: "mission-40k",
        },
        {
            title: "Netherlands Enterprise Agency",
            venue: "KICC",
            image: "http://localhost:5173/src/assets/home/BGHomeVid.png",
            url: "mission-40k",
        },
        {
            title: "Netherlands Enterprise Agency",
            venue: "KICC",
            image: "http://localhost:5173/src/assets/home/BGHomeVid.png",
            url: "mission-40k",
        },
        {
            title: "Netherlands Enterprise Agency",
            venue: "KICC",
            image: "http://localhost:5173/src/assets/home/BGHomeVid.png",
            url: "mission-40k",
        },
        {
            title: "Netherlands Enterprise Agency",
            venue: "KICC",
            image: "http://localhost:5173/src/assets/home/BGHomeVid.png",
            url: "mission-40k",
        },
    ];

    return (
        <div>
            <section className="text-center py-12">
                <Slide bottom>
                    <h1 className="text-4xl font-semibold my-5">Events</h1>
                </Slide>
                <Slide bottom>
                    <p className="w-full px-5 md:w-6/12 mx-auto">
                        Welcome to our events page! Here you'll find all the
                        latest information on upcoming events that we're hosting
                        or participating in.
                    </p>
                </Slide>
            </section>
            <div className="flex flex-row px-6 lg:px-16">
                <div className="w-full lg:w-9/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 sm:gap-6 py-10">
                    {data.map((item) => {
                        return <Event data={item} />;
                    })}
                </div>
                <div className="hidden lg:block w-4/12 pt-10 pl-10">
                    <MediaCentreSideBar category="press release" />
                </div>
            </div>
            <section>
                <RecentNews />
            </section>
        </div>
    );
};
