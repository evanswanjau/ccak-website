import React from "react";
import { CallToAction } from "../components/callToAction";
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
