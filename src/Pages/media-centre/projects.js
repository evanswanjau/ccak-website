import { Project } from "../../Components/project";
import { MediaCentreSideBar } from "../../Containers/mediaCentreSideBar";
import { RecentNews } from "../../Containers/recentNews";
import { Slide } from "react-reveal";

export const ProjectsPage = () => {
    const data = [
        {
            id: 1,
            category: "project",
            title: "Mission 40K: Tree plantation",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "projects/project_default.jpg",
            url: "1/dont-destroy-greenery-and-dont-spoil-scenery",
        },
        {
            id: 2,
            category: "project",
            title: "Mission 40K: Tree plantation",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "projects/project_default.jpg",
            url: "2/dont-destroy-greenery-and-dont-spoil-scenery",
        },
        {
            id: 3,
            category: "project",
            title: "Mission 40K: Tree plantation",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "projects/project_default.jpg",
            url: "3/dont-destroy-greenery-and-dont-spoil-scenery",
        },
        {
            id: 4,
            category: "project",
            title: "Mission 40K: Tree plantation",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "projects/project_default.jpg",
            url: "4/dont-destroy-greenery-and-dont-spoil-scenery",
        },
        {
            id: 5,
            category: "project",
            title: "Mission 40K: Tree plantation",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "projects/project_default.jpg",
            url: "5/dont-destroy-greenery-and-dont-spoil-scenery",
        },
        {
            id: 6,
            category: "project",
            title: "Mission 40K: Tree plantation",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "projects/project_default.jpg",
            url: "6/dont-destroy-greenery-and-dont-spoil-scenery",
        },
    ];

    return (
        <div className="pt-[4rem] lg:pt-[8.2rem]">
            <section className="text-center py-12">
                <Slide bottom>
                    <h1 className="text-4xl font-semibold my-5">Projects</h1>
                </Slide>
                <Slide bottom>
                    <p className="w-full px-5 md:w-6/12 mx-auto">
                        Welcome to our projects page! This is where we showcase
                        some of the exciting projects we're currently working on
                        and those we've completed in the past.
                    </p>
                </Slide>
            </section>
            <div className="flex flex-row px-6 lg:px-16">
                <div className="w-full lg:w-9/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-6 sm:gap-6 py-10">
                    {data.map((item, i) => {
                        return <Project key={i} data={item} />;
                    })}
                </div>
                <div className="hidden lg:block w-4/12 pt-10 pl-10">
                    <MediaCentreSideBar category="projects" />
                </div>
            </div>
            <section>
                <RecentNews />
            </section>
        </div>
    );
};
