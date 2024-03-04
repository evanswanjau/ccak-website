import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useSnackbar } from "notistack";
import { getMember, submitData } from "../../api/member-api-calls";
import { SideMenu } from "../../components/navBar/socialHub/sideMenu";
import { TableData } from "../../components/table-data";
import { Loader } from "../../components/loader";
import { AuthMember } from "../../helpers/auth";
import { NavBar } from "../../layouts/navBar";

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
                    target="_blank"
                    rel="noreferrer noopener"
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

    const { enqueueSnackbar } = useSnackbar();

    const getMemberInvoices = (id) => {
        return submitData(
            "invoices/search",
            {
                keyword: "",
                member_id: id,
                type: "",
                status: "",
                page: 1,
                limit: 100,
            },
            setInvoices,
            null,
            enqueueSnackbar,
            setLoading
        );
    };

    useEffect(() => {
        AuthMember(jwt_decode);
        getMember(setMember).then((data) => {
            getMemberInvoices(data.id).finally(() => {
                setLoading(false);
            });
        });
    }, []); //eslint-disable-line

    return (
        <>
            <NavBar />
            <div className="pt-[3.8rem] md:pt-[6.8rem] bg-slate-100 h-screen">
                <div className="flex flex-col md:flex-row md:space-x-8 px-6 lg:px-16">
                    <div className="md:w-3/12 py-10">
                        <SideMenu />
                    </div>

                    <div className="w-full md:w-8/12 lg:w-5/12  mb-10 md:my-10">
                        {loading ? (
                            <div className="my-40">
                                <Loader />
                            </div>
                        ) : (
                            <div className="space-y-6">
                                <div className="rounded-lg shadow-md p-5 space-y-6 capitalize bg-white">
                                    <div className="space-y-6">
                                        <h3 className="font-semibold text-md">
                                            Account Name: {member.first_name}{" "}
                                            {member.last_name}
                                        </h3>
                                        {member.subscription_category && (
                                            <h3>
                                                Package:{" "}
                                                <span className="font-bold">
                                                    {member.subscription_category.replace(
                                                        /-/g,
                                                        " "
                                                    )}
                                                </span>
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
                                                } font-bold`}
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
                                                } font-bold`}
                                            >
                                                {member.subscription_status}
                                            </span>
                                        </h3>
                                    </div>
                                </div>
                                {invoices.length > 0 && (
                                    <TableData
                                        titles={titles}
                                        data={parseData(invoices)}
                                    />
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
