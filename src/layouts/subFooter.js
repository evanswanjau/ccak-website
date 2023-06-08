import React from "react";
import { CallToAction } from "../components/callToAction";
import { RecentNews } from "./recentNews";
import { UpcomingEvents } from "./upcomingEvents";
import { Timeline } from "react-twitter-widgets";

export const SubFooter = () => {
    return (
        <div>
            <CallToAction />
            <div className="flex">
                <div className="w-full lg:w-8/12">
                    <RecentNews limit={3} />
                    <UpcomingEvents limit={3} />
                </div>
                <div className="hidden lg:block w-4/12 p-6">
                    <Timeline
                        dataSource={{
                            sourceType: "profile",
                            screenName: "CleanCookingKe",
                        }}
                        options={{ dnt: true, width: "99.5%", height: "880" }}
                    />
                </div>
            </div>
        </div>
    );
};
