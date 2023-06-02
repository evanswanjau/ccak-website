import { SideMenu } from "../../components/navBar/socialHub/sideMenu";
import { TableData } from "../../components/table-data";

const titles = [
    { name: "Item", key: "item" },
    { name: "From", key: "from" },
    { name: "To", key: "to" },
    { name: "Payment Method", key: "payment_method" },
    { name: "Total", key: "total" },
    { name: "Date Paid", key: "payment_date" },
    { name: "Status", key: "status" },
];

const data = [
    {
        item: "annual subscription",
        from: "24th Feb, 2022",
        to: "24th Feb, 2023",
        payment_method: "MPESA",
        total: "KES 50,000",
        payment_date: "24th Feb, 2022",
        status: "PAID",
    },
    {
        item: "registration fee",
        from: "",
        to: "",
        payment_method: "MPESA",
        total: "KES 25,000",
        payment_date: "24th Feb, 2022",
        status: "PAID",
    },
];

export const SocialHubBillingPage = () => {
    return (
        <div className="pt-[3.8rem] lg:pt-[6.9rem]">
            <div className="flex flex-col md:flex-row px-6 lg:px-16 space-x-8">
                <div className="md:w-3/12 py-10">
                    <div className="fixed md:w-3/12">
                        <SideMenu />
                    </div>
                </div>
                <div className="md:w-9/12 pt-10 lg:px-10">
                    <div className="space-y-6">
                        <div className="rounded-lg shadow-md p-5 space-y-6 text-gray-600">
                            <div>
                                <h3 className="font-semibold text-lg">
                                    Package
                                </h3>
                                <p>NGO - International</p>
                                <p className="font-bold">KES 50,000/year</p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">
                                    Next Payment Date
                                </h3>
                                <p className="font-bold">24th Feb, 2024</p>
                            </div>
                        </div>
                        <TableData titles={titles} data={data} />
                    </div>
                </div>
            </div>
        </div>
    );
};
