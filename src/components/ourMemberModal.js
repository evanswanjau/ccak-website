import {
    XMarkIcon,
    PhoneIcon,
    MapPinIcon,
    EnvelopeIcon,
    GlobeAltIcon,
    PaperAirplaneIcon
} from "@heroicons/react/24/outline";

export const OurMemberModal = ({
    member: {
        member: {
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
        <div className="fixed bg-black bg-opacity-50 h-screen -mt-[6.6em] z-50 w-full overflow-y-auto">
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
                <div className="flex mb-5">
                    <div className="w-2/12">
                        <img
                            src={`${process.env.REACT_APP_IMAGEKIT_URL}members/${logo}`}
                            alt={company}
                            className=""
                        />
                    </div>
                    <div className="w-10/12 pl-2">
                        <h4 className="capitalize font-semibold text-2xl">
                            {company}
                        </h4>
                        <p className="uppercase text-sm">
                            {subscription_category}
                        </p>
                    </div>
                </div>
                <p>{bio}</p>
                <div className="space-y-2">
                    <p className="my-2 capitalize">
                        <b>Technology:</b> {technology}
                    </p>
                    <a
                        href={`tel:${company_phone}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <p className="flex">
                            <PhoneIcon className="w-5 mr-3 -mt-1" />
                            {company_phone}
                        </p>
                    </a>
                    <a
                        href={`mail:${company_email}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <p className="flex">
                            <EnvelopeIcon className="w-5 mr-3 -mt-1" />
                            {company_email}
                        </p>
                    </a>
                    <p className="flex">
                        <MapPinIcon className="w-5 mr-3 -mt-1" />
                        {location}
                    </p>
                    <a
                        href={website_link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex"
                    >
                        <GlobeAltIcon className="w-5 mr-3 -mt-1" />
                        {website_link}
                    </a>
                    <p className="flex">
                        <PaperAirplaneIcon className="w-5 mr-3 -mt-1" />
                        {location}
                    </p>
                </div>
            </div>
        </div>
    );
};
