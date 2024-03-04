import {
    XMarkIcon,
    PhoneIcon,
    MapPinIcon,
    EnvelopeIcon,
    GlobeAltIcon,
} from "@heroicons/react/24/outline";

export const OurMemberModal = ({
    member: {
        member: {
            first_name,
            last_name,
            bio,
            company,
            subscription_category,
            technology,
            company_phone,
            company_email,
            location,
            postal_address,
            logo,
            website_link,
        },
    },
    setMember,
}) => {
    return (
        <div className="fixed bg-black bg-opacity-50 h-screen -mt-[6.6em] z-50 w-full overflow-y-auto flex items-center">
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
                <div className="flex space-x-8 items-center">
                    <div className="w-3/12">
                        {subscription_category === "individual" ||
                        subscription_category === "student" ? (
                            <div
                                style={{
                                    backgroundImage: `url(${
                                        process.env.REACT_APP_IMAGEKIT_URL +
                                        "members/" +
                                        logo
                                    })`,
                                }}
                                className={`w-32 h-32 mx-auto rounded-full bg-cover bg-center bg-no-repeat`}
                            ></div>
                        ) : (
                            <img
                                className="w-full h-auto mx-auto"
                                src={
                                    process.env.REACT_APP_IMAGEKIT_URL +
                                    "members/" +
                                    logo
                                }
                                alt={
                                    subscription_category === "individual" ||
                                    subscription_category === "student"
                                        ? first_name + " " + last_name
                                        : company || "-"
                                }
                            />
                        )}
                    </div>
                    <div className="w-9/12 pl-2">
                        <h4 className="capitalize font-bold text-xl">
                            {subscription_category === "individual" ||
                            subscription_category === "student"
                                ? first_name + " " + last_name
                                : company || "-"}
                        </h4>
                        <p className="uppercase text-sm font-bold my-1 text-gray-700">
                            {subscription_category}
                        </p>
                        {technology && (
                            <p className="my-2 uppercase bg-[#ED7423] text-sm w-fit rounded-[3em] px-3 pt-1 text-white tracking-wide">
                                {technology}
                            </p>
                        )}
                    </div>
                </div>
                <p className="my-4 p-2">{bio}</p>
                <div className="p-2">
                    {subscription_category !== "individual" &&
                        company_phone && (
                            <a
                                href={`tel:${company_phone}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <p className="flex items-start mb-4">
                                    <PhoneIcon className="flex-none w-5 mr-3 mt-1" />
                                    {company_phone}
                                </p>
                            </a>
                        )}
                    {subscription_category !== "individual" &&
                        company_email && (
                            <a
                                href={`mail:${company_email}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <p className="flex items-start mb-4">
                                    <EnvelopeIcon className="flex-none w-5 mr-3 mt-1" />
                                    {company_email}
                                </p>
                            </a>
                        )}
                    {location && (
                        <p className="flex items-start mb-4">
                            <MapPinIcon className="flex-none w-5 mr-3 mt-1" />
                            {location}
                        </p>
                    )}
                    {website_link && (
                        <a href={website_link} target="_blank" rel="noreferrer">
                            <p className="flex items-start mb-4">
                                <GlobeAltIcon className="flex-none w-5 mr-3 mt-1" />
                                <span className="text-wrap">
                                    {website_link}
                                </span>
                            </p>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};
