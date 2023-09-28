import { DynamicPageLayout } from "../../layouts/dynamicPageLayout";

const pageData = {
    page: "blog",
    description:
        "Welcome to our blog! This is where we showcase some of the exciting articles about CCAK and the sector.",
};

export const BlogPage = () => {
    return <DynamicPageLayout pageData={pageData} />;
};
