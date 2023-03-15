import { Fade } from "react-reveal";

export const Gallery = ({ data: { title, description, image, url } }) => {
    return (
        <Fade>
            <a href={`/media-centre/photo-gallery/${url}`}>
                <div
                    style={{
                        backgroundImage: `url(${
                            import.meta.env.VITE_IMAGEKIT + image
                        })`,
                    }}
                    className={`bg-cover bg-center bg-no-repeat rounded-lg text-white group`}
                >
                    <div className="h-full w-full bg-gradient-to-t from-black to-transparent px-3 pb-3 pt-36 rounded-lg group-hover:text-[#ED7423] transition duration-300 ease-in-out">
                        <h3 className="font-semibold mb-1">{title}</h3>
                    </div>
                </div>
            </a>
        </Fade>
    );
};
