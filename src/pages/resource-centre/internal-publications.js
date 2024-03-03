import { DynamicPageLayout } from "../../layouts/dynamicPageLayout";

const pageData = {
    page: "internal-publications",
    description:
        "Welcome to our internal publications page! This is the place where you can find a collection of the latest and most innovative research in the clean cooking sector.",
};

export const InternalPublicationsPage = () => {
    return <DynamicPageLayout pageData={pageData} />;
};