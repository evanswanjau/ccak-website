import React from "react";
import ModalVideo from "react-modal-video";

export const ModalYoutubeVideo = ({ show, setShow, youtubeId }) => {
    return (
        <ModalVideo
            channel="youtube"
            autoplay
            isOpen={show}
            videoId={youtubeId}
            onClose={() => setShow(false)}
        />
    );
};
