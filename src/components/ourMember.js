import {
    PhoneIcon,
    MapPinIcon,
    EnvelopeIcon,
    GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { Fade } from "react-reveal";

export const OurMember = ({
    data: {
        company,
        subscription_category,
        technology,
        company_phone,
        company_email,
        location,
        logo,
        website_link,
    },
}) => {
    return (
        <Fade bottom>
            <div className="bg-[#F2F9F4] p-6 rounded-lg text-left flex flex-col h-fit max-h-[350px]">
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
                </div>
            </div>
        </Fade>
    );
};
