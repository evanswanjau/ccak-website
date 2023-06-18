import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Gallery from "react-photo-gallery";
import { apiRequest } from "../../api/api-calls";
import Carousel, { Modal, ModalGateway } from "react-images";

export const PhotoGalleryReadMore = () => {
    const params = useParams();
    const [photos, updatePhotos] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

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
                data.files.data.map((image) => {
                    return newArr.push({
                        src:
                            process.env.REACT_APP_IMAGEKIT_URL +
                            data.folder +
                            "/" +
                            image,
                        sizes: [
                            "(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw",
                        ],
                        width: 4,
                        height: 3,
                    });
                });
            })
            .finally(() => {
                updatePhotos(newArr);
            });
    }, []); // eslint-disable-line

    return (
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
    );
};
