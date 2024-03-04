import {
    PhoneIcon,
    MapPinIcon,
    EnvelopeIcon,
    GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { Fade } from "react-reveal";

export const OurMember = ({
    data: {
        first_name,
        last_name,
        company,
        bio,
        subscription_category,
        technology,
        company_phone,
        company_email,
        location,
        postal_address,
        logo,
        website_link,
    },
    setMember,
}) => {
    return (
        <Fade>
            <div
                className="bg-white shadow-lg p-6 rounded-lg text-left flex flex-col border-2 border-transparent cursor-pointer hover:border-[#ED7423] transition duration-500"
                onClick={() => {
                    setMember({
                        modal: true,
                        member: {
                            first_name,
                            last_name,
                            company,
                            bio,
                            subscription_category,
                            technology,
                            company_phone,
                            company_email,
                            location,
                            postal_address,
                            logo,
                            website_link,
                        },
                    });
                }}
            >
                <div className="text-center mb-5">
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
                            className={`w-32 h-32 mx-auto rounded-full bg-cover bg-center bg-no-repeat mb-10`}
                        ></div>
                    ) : (
                        <img
                            className="w-auto h-32 mx-auto mb-10"
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
                        <p className="my-2 uppercase bg-[#ED7423] text-sm w-fit rounded-[3em] px-3 pt-1 mx-auto text-white tracking-wide">
                            {technology}
                        </p>
                    )}
                </div>
                <div>
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
        </Fade>
    );
};
