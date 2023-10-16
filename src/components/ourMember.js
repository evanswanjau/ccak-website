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
        <Fade bottom>
            <div
                className="bg-[#F2F9F4] p-6 rounded-lg text-left flex flex-col"
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
                    <div
                        style={{
                            backgroundImage: `url(${
                                process.env.REACT_APP_IMAGEKIT_URL +
                                "members/" +
                                logo
                            })`,
                        }}
                        className={`w-28 h-28 mx-auto rounded-full bg-cover bg-center bg-no-repeat`}
                    ></div>
                    <h4 className="capitalize font-semibold text-xl">
                        {subscription_category === "individual"
                            ? first_name + " " + last_name
                            : company || "-"}
                    </h4>
                    <p className="uppercase text-sm">{subscription_category}</p>
                </div>
                <div className="space-y-2">
                    {technology && (
                        <p className="my-2 capitalize">
                            <b>Technology:</b> {technology}
                        </p>
                    )}

                    {subscription_category !== "individual" &&
                        company_phone && (
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
                        )}
                    {subscription_category !== "individual" &&
                        company_email && (
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
                        )}
                    {location && (
                        <p className="flex">
                            <MapPinIcon className="w-5 mr-3 -mt-1" />
                            {location}
                        </p>
                    )}
                    {website_link && (
                        <a
                            href={website_link}
                            target="_blank"
                            rel="noreferrer"
                            className="flex"
                        >
                            <GlobeAltIcon className="w-5 mr-3 -mt-1" />
                            {website_link}
                        </a>
                    )}
                </div>
            </div>
        </Fade>
    );
};
