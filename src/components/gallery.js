import { Fade } from "react-reveal";

export const Gallery = ({ data: { id, title, excerpt, image, folder } }) => {
    return (
        <Fade>
            <a
                href={`/media-centre/photo-gallery/read-more/${id}/${title
                    .replace(/ /g, "-")
                    .replace("'", "")
                    .toLowerCase()}`}
            >
                <div
                    style={{
                        backgroundImage: `url(${
                            process.env.REACT_APP_IMAGEKIT_URL +
                            folder +
                            "/" +
                            image
                        })`,
                    }}
                    className={`relative bg-cover bg-center bg-no-repeat rounded-lg text-white group flex flex-col min-h-[250px]`}
                >
                    <div className="absolute inset-0 flex flex-col justify-end h-full w-full bg-gradient-to-t from-black to-transparent px-3 pb-3 pt-36 rounded-lg group-hover:text-[#ED7423] transition duration-300 ease-in-out">
                        <h3 className="font-semibold mb-1 text-left">{title}</h3>
                        <p className="line-clamp-2" title={excerpt}>
                            {excerpt}
                        </p>
                    </div>
                </div>
            </a>
        </Fade>
    );
};
