import { DynamicPageLayout } from "../../layouts/dynamicPageLayout";

const pageData = {
    page: "newsletters",
    description:
        "Join us as we highlight success stories, share innovative technologies, showcase policy developments, and shed light on the importance of clean cooking for sustainable development.",
};

export const NewslettersPage = () => {
    return <DynamicPageLayout pageData={pageData} />;
};
