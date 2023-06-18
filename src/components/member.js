import { Slide } from "react-reveal";

export const Member = ({ data: { name, position, image, brief, bio }, setMember }) => {
    return (
        <Slide bottom>
            <div
                className="group justify-center"
                onClick={() => {
                    setMember({
                        modal: true,
                        member: { name, position, image, bio },
                    });
                }}
            >
                <div
                    style={{
                        backgroundImage: `url(${
                            process.env.REACT_APP_IMAGEKIT_URL + image
                        })`,
                    }}
                    className={`bg-cover bg-center bg-no-repeat mx-auto text-white h-40 w-40 rounded-2xl mb-6 cursor-pointer hover:scale-[1.05] duration-300 ease-in-out`}
                ></div>
                <h6 className="text font-semibold capitalize group-hover:text-[#ED7423] duration-300 ease-in-out">
                    {name}
                </h6>
                <p className="text-gray-600 capitalize group-hover:text-[#ED7423] duration-300 ease-in-out flex-wrap">
                    {position}
                </p>
                <p className="text-gray-600 capitalize group-hover:text-[#ED7423] duration-300 ease-in-out flex flex-wrap">
                    {brief}
                </p>
            </div>
        </Slide>
    );
};
