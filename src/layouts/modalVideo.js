import React from "react";
import ModalVideo from "react-modal-video";

export const ModalYoutubeVideo = ({ show, setShow }) => {
    return (
        <ModalVideo
            channel="youtube"
            autoplay
            isOpen={show}
            videoId="EFGuowH9bqg"
            onClose={() => setShow(false)}
        />
    );
};
