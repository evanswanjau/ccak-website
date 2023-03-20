import React from "react";
import { CallToAction } from "../Components/callToAction";
import { RecentNews } from "./recentNews";
import { UpcomingEvents } from "./upcomingEvents";

export const SubFooter = () => {
    return (
        <div>
            <CallToAction />
            <RecentNews />
            <UpcomingEvents />
        </div>
    );
};
