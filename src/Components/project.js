import { Fade } from "react-reveal";

export const Project = ({ data: { title, excerpt, image, url } }) => {
    return (
        <Fade>
            <a href={`/media-centre/projects/read-more/${url}`}>
                <div
                    style={{
                        backgroundImage: `url(${
                            process.env.REACT_APP_IMAGEKIT_URL + image
                        })`,
                    }}
                    className={`bg-cover bg-center bg-no-repeat rounded-lg text-white group`}
                >
                    <div className="h-full w-full bg-gradient-to-t from-black to-transparent px-3 pb-3 pt-28 rounded-lg group-hover:text-[#ED7423] transition duration-300 ease-in-out">
                        <h3 className="font-semibold mb-1">{title}</h3>
                        <p>{excerpt}</p>
                    </div>
                </div>
            </a>
        </Fade>
    );
};
