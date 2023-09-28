import { DynamicPageLayout } from "../../layouts/dynamicPageLayout";

const pageData = {
    page: "press-release",
    description:
        "Here you will find a variety of press releases covering topics such as new product launches, company milestones, industry awards, and more.",
};

export const PressReleasePage = () => {
    return <DynamicPageLayout pageData={pageData} />;
};
