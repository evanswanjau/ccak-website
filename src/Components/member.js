import { Slide } from "react-reveal";

export const Member = ({ data: { name, position, image, bio }, setMember }) => {
    return (
        <Slide bottom>
            <div
                className="flex flex-col justify-items-center group"
                onClick={() => {
                    setMember({
                        modal: true,
                        member: { name, position, image, bio },
                    });
                }}
            >
                <img
                    className="w-38 h-38 rounded-lg mb-6 mx-auto cursor-pointer hover:scale-[1.05] duration-300 ease-in-out"
                    src={process.env.REACT_APP_IMAGEKIT + image}
                    alt={name}
                />
                <h6 className="text font-semibold capitalize group-hover:text-[#ED7423] duration-300 ease-in-out">
                    {name}
                </h6>
                <p className="text-gray-600 capitalize group-hover:text-[#ED7423] duration-300 ease-in-out">
                    {position}
                </p>
            </div>
        </Slide>
    );
};
