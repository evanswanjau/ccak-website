import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Gallery from "react-photo-gallery";
import { apiRequest } from "../../api/api-calls";
import Carousel, { Modal, ModalGateway } from "react-images";
import { Page } from "../../layouts/page";

export const PhotoGalleryReadMore = () => {
    const params = useParams();
    const [photos, updatePhotos] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    useEffect(() => {
        let newArr = [];

        apiRequest("get", "post/" + params.id, photos, updatePhotos)
            .then((data) => {
                data.files.data.map((item) => {
                    return newArr.push({
                        src: item.url,
                        width: item.width / 10,
                        height: item.height / 10,
                    });
                });
            })
            .finally(() => {
                updatePhotos(newArr);
                setLoading(false);
            });
    }, []); // eslint-disable-line

    return (
        <Page
            title={photos.title}
            description={photos.excerpt}
            image={
                process.env.REACT_APP_IMAGEKIT_URL + "gallery/" + photos.image
            }
            data={photos}
            updateData={updatePhotos}
            readMorePage={true}
            readMoreLoading={loading}
        >
            <div className="pt-[3.8rem] lg:pt-[6.6rem]">
                <Gallery photos={photos} onClick={openLightbox} />
                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={photos.map((x) => ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title,
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        </Page>
    );
};
