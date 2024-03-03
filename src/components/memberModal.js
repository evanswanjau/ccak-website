import { XMarkIcon } from "@heroicons/react/24/outline";

export const MemberModal = ({
    member: {
        member: { name, position, image, bio },
    },
    setMember,
}) => {
    return (
        <div className="fixed bg-black bg-opacity-50 h-screen -mt-[6.6em] z-50 w-full overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-11/12 sm:8/12 md:w-7/12 lg:w-6/12 mx-auto bg-white pt-3 mt-8 pb-6 px-3 shadow-2xl rounded-lg overflow-y-auto">
                    <div className="w-full flex justify-end">
                        <button
                            type="button"
                            className="mb-3 hover:text-white bg-transparent hover:bg-black rounded-lg text-sm p-1.5 transition duration-300 ease-in-out"
                            onClick={() => {
                                setMember({ modal: false, member: {} });
                            }}
                        >
                            <XMarkIcon className="w-6 font-bold " />
                            <span className="sr-only">Close menu</span>
                        </button>
                    </div>

                    <div className="flex flex-col justify-items-center text-center">
                        <div
                            style={{
                                backgroundImage: `url(${
                                    process.env.REACT_APP_IMAGEKIT_URL + image
                                })`,
                            }}
                            className={`bg-cover bg-center bg-no-repeat mx-auto text-white h-40 w-40 rounded-2xl mb-6 cursor-pointer`}
                        ></div>
                        <h6 className="text text-xl font-semibold capitalize">
                            {name}
                        </h6>
                        <p className="capitalize">{position}</p>
                        <p className="my-2">{bio}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
