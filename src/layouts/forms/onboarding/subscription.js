import { PlayIcon } from "@heroicons/react/24/solid";

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

export const Subscription = ({ data, updateData }) => {
    return (
        <div className="flex flex-row h-full">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-6 py-10">
                {packages.map((item, i) => {
                    return (
                        <div
                            className={`bg-[#ED7423] text-white p-3 rounded-lg ${
                                data.subscription_category === item.value &&
                                "scale-105 bg-gray-800"
                            } hover:scale-105 hover:bg-gray-800 cursor-pointer transition duration-150 ease-in-out`}
                            onClick={() => {
                                updateData({
                                    ...data,
                                    subscription_category: item.value,
                                });
                            }}
                        >
                            <h6 className="uppercase text-sm font-semibold text-gray-200">
                                {item.category}
                            </h6>
                            <h4 className="text-sm uppercase font-semibold">
                                {item.name}
                            </h4>
                            <h3 className="text-2xl font-bold mt-3">
                                {item.price}
                            </h3>
                            <p>Per Year</p>
                            <ul className="text-left text-white my-2">
                                {item.list.map((item, i) => {
                                    return (
                                        <li className="flex my-4 text-md font-manjari">
                                            <PlayIcon className="w-4 mr-3 -mt-[5px] text-[#97DAAD]" />
                                            <span className="w-11/12">
                                                {item}
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
