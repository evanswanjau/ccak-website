import { XMarkIcon } from "@heroicons/react/24/outline";

export const MemberModal = ({
    member: {
        member: { name, position, image, bio },
    },
    setMember,
}) => {
    return (
        <div className="fixed z-50 w-full">
            <div className="w-11/12 sm:8/12 md:w-7/12 lg:w-4/12 mx-auto bg-white pt-3 pb-6 px-3 shadow-2xl rounded-lg">
                <div className="w-full flex justify-end">
                    <button
                        type="button"
                        class="mb-3 hover:text-white bg-transparent hover:bg-black rounded-lg text-sm p-1.5 transition duration-300 ease-in-out"
                        onClick={() => {
                            setMember({ modal: false, member: {} });
                        }}
                    >
                        <XMarkIcon className="w-6 font-bold " />
                        <span class="sr-only">Close menu</span>
                    </button>
                </div>

                <div className="flex flex-col justify-items-center text-center">
                    <img
                        className="w-1/2 h-auto rounded-lg mb-6 mx-auto"
                        src={process.env.REACT_APP_IMAGEKIT_URL + image}
                        alt={name}
                    ></img>
                    <h6 className="text font-semibold capitalize">{name}</h6>
                    <p className="text-gray-600 capitalize">{position}</p>
                    <p className="text-gray-600 my-2">{bio}</p>
                </div>
            </div>
        </div>
    );
};
