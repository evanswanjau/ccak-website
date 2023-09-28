import { DynamicPageLayout } from "../../layouts/dynamicPageLayout";

const pageData = {
    page: "events",
    description:
        "Welcome to our events page! Here you'll find all the latest information on upcoming events that we're hosting or participating.",
};

export const EventsPage = () => {
    return <DynamicPageLayout pageData={pageData} />;
};
