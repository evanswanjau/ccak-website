import React from "react";
import { Project } from "../Components/Project";
import { Slide, Fade } from "react-reveal";

const projects = [
    {
        title: "Mission 40K: Tree plantation",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        image: "http://localhost:5173/src/assets/home/BGHomeVid.png",
        link: "mission-40k",
    },
    {
        title: "Mission 40K: Tree plantation",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        image: "http://localhost:5173/src/assets/home/BGHomeVid.png",
        link: "mission-40k",
    },
    {
        title: "Mission 40K: Tree plantation",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        image: "http://localhost:5173/src/assets/home/BGHomeVid.png",
        link: "mission-40k",
    },
    {
        title: "Mission 40K: Tree plantation",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        image: "http://localhost:5173/src/assets/home/BGHomeVid.png",
        link: "mission-40k",
    },
];

export const RecentProjects = () => {
    return (
        <div className="px-6 py-10 lg:p-16">
            <div className="flex flex-row w-full ">
                <div className="hidden lg:block lg:w-1/12">
                    <Fade>
                        <div className="border-t-2 border-black mx-5 mt-1"></div>
                    </Fade>
                </div>
                <div className="lg:w-11/12">
                    <Slide bottom>
                        <h6 className="text-black font-bold text-xs">
                            PROJECTS WE HAVE DONE
                        </h6>
                    </Slide>
                    <Slide bottom>
                        <h2 className="text-black text-2xl lg:text-4xl font-semibold my-8">
                            We are creating sustainable society, for everyone
                            and forever.
                        </h2>
                    </Slide>
                </div>
            </div>
            <div className="w-full flex flex-row">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 sm:gap-6 py-3 lg:py-10">
                    {projects.map((project) => {
                        return <Project data={project} />;
                    })}
                </div>
            </div>
        </div>
    );
};
