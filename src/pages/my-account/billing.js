import { useEffect, useState } from "react";
import { apiRequest, getMember } from "../../api/api-calls";
import jwt_decode from "jwt-decode";
import { SideMenu } from "../../components/navBar/socialHub/sideMenu";
import { TableData } from "../../components/table-data";
import { Loader } from "../../components/loader";
import { AuthMember } from "../../helpers/auth";

const titles = [
    { name: "Invoice No", key: "invoice_number" },
    { name: "Total", key: "total_amount" },
    { name: "Paid", key: "paid_amount" },
    { name: "Balance", key: "balance" },
    { name: "Status", key: "status" },
    { name: "View", key: "view" },
];

const parseData = (invoices) => {
    return invoices.map((invoice) => {
        invoice.total_amount = <p>KES {invoice.total_amount}</p>;
        invoice.paid_amount = <p>KES {invoice.paid_amount}</p>;
        invoice.balance = <p>KES {invoice.balance}</p>;
        invoice.status = (
            <p
                className={`${
                    invoice.status === "paid" ? "bg-green-700" : "bg-red-700"
                } rounded text-white text-center pb-1 pt-[0.4em]`}
            >
                {invoice.status}
            </p>
        );
        invoice.view = (
            <p className="text-center">
                <a
                    className="text-blue-400 hover:text-blue-600 text-center"
                    href={`/checkout/invoice/${invoice.id}/${invoice.invoice_number}`}
                >
                    VIEW
                </a>
            </p>
        );

        return invoice;
    });
};

export const MyAccountBillingPage = () => {
    const [loading, setLoading] = useState(true);
    const [member, setMember] = useState({ id: "" });
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        AuthMember(jwt_decode);
        getMember(setMember).then((data) => {
            apiRequest(
                "get",
                "invoices/member/" + data.id,
                invoices,
                setInvoices,
                parseData
            ).finally(() => {
                setLoading(false);
            });
        });

        // apiRequest("get", "invoice/" + params.id, data, updateData);
    }, []); //eslint-disable-line

    return (
        <div className="pt-[3.8rem] lg:pt-[6.6rem]">
            <div className="flex flex-col md:flex-row px-6 lg:px-16 space-x-8">
                <div className="md:w-3/12 py-10">
                    <div className="fixed md:w-3/12">
                        <SideMenu />
                    </div>
                </div>

                <div className="md:w-9/12 py-10 lg:px-10">
                    {loading ? (
                        <div className="my-40">
                            <Loader />
                        </div>
                    ) : (
                        <div className="space-y-6">
                            <div className="rounded-lg shadow-md p-5 space-y-6 uppercase">
                                <div className="space-y-6">
                                    <h3 className="font-semibold text-md">
                                        Account Name: {member.first_name}{" "}
                                        {member.last_name}
                                    </h3>
                                    {member.subscription_category && (
                                        <h3>
                                            Package:{" "}
                                            {member.subscription_category.replace(
                                                /-/g,
                                                " "
                                            )}
                                        </h3>
                                    )}
                                    <h3>
                                        Registration Status:{" "}
                                        <span
                                            className={`${
                                                member.registration_status ===
                                                "registered"
                                                    ? "text-green-400"
                                                    : "text-red-600"
                                            } uppercase`}
                                        >
                                            {member.registration_status}
                                        </span>
                                    </h3>
                                    <h3>
                                        Subscription Status:{" "}
                                        <span
                                            className={`${
                                                member.subscription_status ===
                                                "active"
                                                    ? "text-green-400"
                                                    : "text-red-600"
                                            } uppercase`}
                                        >
                                            {member.subscription_status}
                                        </span>
                                    </h3>
                                </div>
                            </div>
                            {invoices.length > 0 && (
                                <TableData titles={titles} data={invoices} />
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
