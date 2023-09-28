import { DynamicPageLayout } from "../../layouts/dynamicPageLayout";

const pageData = {
    page: "photo-gallery",
    description:
        "Welcome to our gallery, where you can browse through a collection of visual content showcasing our events, services, and culture.",
};

export const PhotoGalleryPage = () => {
    return <DynamicPageLayout pageData={pageData} />;
};
