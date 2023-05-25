import { Slide } from "react-reveal";
import { Package } from "../../components/package";

const data = [
    {
        name: "student",
        category: "-",
        price: "KSH. 1,000",
        list: ["Students", "Registration fee of Ksh. 500"],
    },
    {
        name: "individual",
        category: "-",
        price: "KSH. 4,000",
        list: ["Individuals", "Registration fee of Ksh. 2,000"],
    },
    {
        name: "institution",
        category: "reasearch",
        price: "KSH. 20,000",
        list: ["Institution", "Registration fee of Ksh. 10,000"],
    },
    {
        name: "cso",
        category: "-",
        price: "KSH. 20,000",
        list: ["CSO", "Registration fee of Ksh. 10,000"],
    },
    {
        name: "association",
        category: "membership",
        price: "KSH. 20,000",
        list: ["Membership associations", "Registration fee of Ksh. 10,000"],
    },
    {
        name: "ngo",
        category: "local",
        price: "KSH. 20,000",
        list: ["Local NGO", "Registration fee of Ksh. 10,000"],
    },
    {
        name: "donor",
        category: "-",
        price: "KSH. 50,000",
        list: ["Donor supported", "Registration fee of Ksh. 25,000"],
    },
    {
        name: "ngo",
        category: "international",
        price: "KSH. 50,000",
        list: ["International NGO", "Registration fee of Ksh. 25,000"],
    },
    {
        name: "corporate",
        category: "micro",
        price: "KSH. 4,000",
        list: ["Sole proprietorship", "Registration fee of Ksh. 2,000"],
    },
    {
        name: "corporate",
        category: "small",
        price: "KSH. 10,000",
        list: ["Less than 50 employees", "Registration fee of Ksh. 5,000"],
    },
    {
        name: "corporate",
        category: "medium",
        price: "KSH. 50,000",
        list: [
            "Between 51 to 249 employees",
            "Registration fee of Ksh. 25,000",
        ],
    },
    {
        name: "corporate",
        category: "large",
        price: "KSH. 100,000",
        list: ["Over 250 employees", "Registration fee of Ksh. 50,000"],
    },
];

export const PackagesPage = () => {
    return (
        <div className="pt-[4rem] lg:pt-[8.2rem]">
            <section className="text-center py-12">
                <Slide bottom>
                    <h1 className="text-4xl font-semibold my-5">Packages</h1>
                </Slide>
                <Slide bottom>
                    <p className="w-full text-gray-600 px-6 lg:w-6/12 mx-auto">
                        Clean Cooking Association of Kenya exists to serve its
                        Members; as its main priority, it intends to be the
                        preferred organization through which players in the
                        clean cooking sector will engage. CCAK’s membership
                        comprises over 50 members from the government, academia,
                        private sector, donor agencies, NGOs and individuals
                        active in the clean cooking sector
                    </p>
                </Slide>
                <div className="flex flex-row px-6 lg:px-16 py-5">
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-6 py-10">
                        {data.map((item, i) => {
                            return <Package key={i} data={item} />;
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};
