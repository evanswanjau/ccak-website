import { DynamicPageLayout } from "../../layouts/dynamicPageLayout";

const pageData = {
    page: "external-publications",
    description:
        "Welcome to our external publications page! This is the place where you can find a collection of the latest and most innovative research in the clean cooking sector.",
};

export const ExternalPublicationsPage = () => {
    return <DynamicPageLayout pageData={pageData} />;
};
