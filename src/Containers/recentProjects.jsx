import React from "react";
import { Project } from "../Components/Project";

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
];

export const RecentProjects = () => {
    return (
        <div className="flex justify-between space-x-10">
            {projects.map((project) => {
                return <Project data={project} />;
            })}
        </div>
    );
};
