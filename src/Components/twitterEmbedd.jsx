import { Timeline } from "react-twitter-widgets";

export const TwitterEmbedd = () => (
    <Timeline
        dataSource={{ sourceType: "profile", screenName: "CleanCookingKe" }}
        options={{ dnt: true, width: "99.5%", height: "600" }}
    />
);
