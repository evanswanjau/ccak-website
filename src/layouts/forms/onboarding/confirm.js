import { useState, useEffect } from "react";
import { IKImage } from "imagekitio-react";
import { BsImage } from "react-icons/bs";

const packages = [
    {
        name: "student",
        category: "-",
        value: "student",
        price: 1000,
        registration: 500,
        list: ["Students", "Registration fee of Ksh. 500"],
    },
    {
        name: "individual",
        category: "-",
        value: "individual",
        price: 4000,
        registration: 2000,
        list: ["Individuals", "Registration fee of Ksh. 2,000"],
    },
    {
        name: "institution",
        category: "research",
        value: "institution",
        price: 20000,
        registration: 10000,
        list: ["Institution", "Registration fee of Ksh. 10,000"],
    },
    {
        name: "cso",
        category: "-",
        value: "cso",
        price: 20000,
        registration: 10000,
        list: ["CSO", "Registration fee of Ksh. 10,000"],
    },
    {
        name: "association",
        category: "membership",
        value: "association-membership",
        price: 20000,
        registration: 10000,
        list: ["Membership associations", "Registration fee of Ksh. 10,000"],
    },
    {
        name: "ngo",
        category: "local",
        value: "ngo-local",
        price: 20000,
        registration: 10000,
        list: ["Local NGO", "Registration fee of Ksh. 10,000"],
    },
    {
        name: "ngo",
        category: "international",
        value: "ngo-international",
        price: 50000,
        registration: 25000,
        list: ["International NGO", "Registration fee of Ksh. 25,000"],
    },
    {
        name: "donor",
        category: "-",
        value: "donor",
        price: 50000,
        registration: 25000,
        list: ["Donor supported", "Registration fee of Ksh. 25,000"],
    },
    {
        name: "corporate",
        category: "micro",
        value: "corporate-micro",
        price: 4000,
        registration: 2000,
        list: ["Sole proprietorship", "Registration fee of Ksh. 2,000"],
    },
    {
        name: "corporate",
        category: "small",
        value: "corporate-small",
        price: 10000,
        registration: 5000,
        list: ["Less than 50 employees", "Registration fee of Ksh. 5,000"],
    },
    {
        name: "corporate",
        category: "medium",
        value: "corporate-medium",
        price: 50000,
        registration: 25000,
        list: [
            "Between 51 to 249 employees",
            "Registration fee of Ksh. 25,000",
        ],
    },
    {
        name: "corporate",
        category: "large",
        value: "corporate-large",
        price: 100000,
        registration: 50000,
        list: ["Over 250 employees", "Registration fee of Ksh. 50,000"],
    },
];

export const ConfirmDetails = ({ data }) => {
    const [subData, setSubData] = useState({});

    useEffect(() => {
        setSubData(
            packages.find((item) => item.value === data.subscription_category)
        );
    }, []); //eslint-disable-line

    return (
        <div className="space-y-4">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 my-5">
                <div className="w-full space-y-2 border-r">
                    <h3 className="font-bold mb-4">Personal Details</h3>
                    <p className="capitalize">
                        Name:{" "}
                        <b>
                            {data.first_name} {data.last_name}
                        </b>
                    </p>
                    <p>
                        Email: <b>{data.email}</b>
                    </p>
                    <p className="capitalize">
                        Phone Number: <b>{data.phone_number}</b>
                    </p>
                    {data.company && (
                        <p className="capitalize">
                            Company: <b>{data.company}</b>
                        </p>
                    )}

                    {data.designation && (
                        <p className="capitalize">
                            Designation: <b>{data.designation}</b>
                        </p>
                    )}
                </div>
                <div className="w-full space-y-2">
                    <h3 className="font-bold mb-4">Company Details</h3>
                    <p className="capitalize">
                        Bio: <b>{data.bio}</b>
                    </p>
                    {data.company_email && (
                        <p>
                            Company Email: <b>{data.company_email}</b>
                        </p>
                    )}

                    {data.company_phone && (
                        <p className="capitalize">
                            Company Phone: <b>{data.company_phone}</b>
                        </p>
                    )}

                    <p className="capitalize">
                        Location: <b>{data.location}</b>
                    </p>

                    <p className="capitalize">
                        Postal Address: <b>{data.postal_address}</b>
                    </p>

                    <p className="capitalize">
                        Technology: <b>{data.technology}</b>
                    </p>

                    {data.website_link && (
                        <p>
                            Website: <b>{data.website_link}</b>
                        </p>
                    )}
                </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 my-5 border-t pt-5 mt-5">
                <div className="w-full space-y-2 border-r">
                    <h3 className="font-bold mb-4">Logo/ Profile Photo</h3>
                    {data.logo === "" ? (
                        <BsImage className="text-[8.5em] mx-auto -mt-1 text-gray-600" />
                    ) : (
                        <IKImage
                            className="object-cover rounded-lg max-h-32"
                            urlEndpoint={process.env.REACT_APP_IMAGEKIT_URL}
                            path={"members/" + data.logo}
                        />
                    )}
                </div>
                <div className="w-full space-y-2">
                    {subData.name && (
                        <>
                            <h3 className="font-bold mb-4">Subscription</h3>
                            <p className="capitalize">
                                Category:{" "}
                                <b>{subData.value.replace(/-/g, " ")}</b>
                            </p>
                            <p
                                className={`capitalize ${
                                    data.registration_status === "registered" &&
                                    "line-through"
                                }`}
                            >
                                Registration Fee:{" "}
                                <b>
                                    KES {subData.registration.toLocaleString()}
                                </b>
                            </p>
                            <p
                                className={`capitalize ${
                                    data.subscription_status === "active" &&
                                    "line-through"
                                }`}
                            >
                                Annual Subscription:{" "}
                                <b>KES {subData.price.toLocaleString()}</b>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
