import { DynamicPageLayout } from "../../layouts/dynamicPageLayout";

const pageData = {
    page: "news",
    description:
        "Welcome to our news page. Here you will find a variety of news articles covering topics such as product innovations, industry trends, company events, and more.",
};

export const NewsPage = () => {
    return <DynamicPageLayout pageData={pageData} />;
};
