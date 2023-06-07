import {
    UserCircleIcon,
    PhoneIcon,
    MapPinIcon,
} from "@heroicons/react/24/outline";
import { Fade } from "react-reveal";

export const OurMember = ({
    data: { name, category, technology, phone_number, location },
}) => {
    return (
        <Fade bottom>
            <div className="bg-[#EFF7F2] p-6 rounded-lg text-left flex flex-col max-h-[250px]">
                <div className="flex mb-5">
                    <div className="w-2/12">
                        <UserCircleIcon className="w-12" />
                    </div>
                    <div className="w-10/12">
                        <h4 className="capitalize font-semibold text-2xl">
                            {name}
                        </h4>
                        <p className="uppercase text-sm">{category}</p>
                    </div>
                </div>
                <div className="space-y-2">
                    <p className="my-2 capitalize">
                        <b>Technology:</b> {technology}
                    </p>
                    <a href={`tel:${phone_number}`}>
                        <p className="flex">
                            <PhoneIcon className="w-5 mr-3 -mt-1" />
                            {phone_number}
                        </p>
                    </a>
                    <p className="flex">
                        <MapPinIcon className="w-5 mr-3 -mt-1" />
                        {location}
                    </p>
                </div>
            </div>
        </Fade>
    );
};
