import React from "react";
import { CallToAction } from "../components/callToAction";
import { Timeline } from "react-twitter-widgets";
import { ShortPostsLayout } from "./shortPostsLayout";

export const SubFooter = ({ data }) => {
    return (
        <div>
            <CallToAction data={data} />
            <div className="flex">
                <div className="w-full lg:w-8/12">
                    <ShortPostsLayout
                        title="Recent News"
                        category="news"
                        limit={9}
                        carousel={true}
                    />
                    <ShortPostsLayout
                        title="Upcoming Events"
                        category="events"
                        limit={9}
                        carousel={true}
                    />
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
