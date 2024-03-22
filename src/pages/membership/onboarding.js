import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

import { ErrorMessage } from "../../components/forms/error";
import { generateInvoice } from "../../api/api-calls";
import { getMember } from "../../api/member-api-calls";
import { updateMember } from "../../api/member-api-calls";
import {
    validateEmail,
    validatePhoneNumber,
    validateUrl,
} from "../../helpers/validation";
import { PersonalDetails } from "../../layouts/forms/onboarding/personal";
import { CompanyDetails } from "../../layouts/forms/onboarding/company";
import { Stepper } from "../../layouts/forms/onboarding/stepper";
import { ActionButtons } from "../../layouts/forms/onboarding/action-buttons";
import { Subscription } from "../../layouts/forms/onboarding/subscription";
import { ConfirmDetails } from "../../layouts/forms/onboarding/confirm";
import { AuthMember } from "../../helpers/auth";

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

export const OnboardingPage = () => {
    const [btnLoading, setBtnLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, updateData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        company: "",
        designation: "",
        bio: "",
        technology: "",
        company_email: "",
        company_phone: "",
        location: "",
        postal_address: "",
        website_link: "",
        logo: "",
        registration_status: "",
        subscription_status: "",
        subscription_category: "",
        subscription_expiry: "",
        step: "company",
    });

    const getStep = (step) => {
        step = "";

        if (data.step === "personal") step = "company";
        if (data.step === "company") step = "subscription";
        if (data.step === "subscription") step = "confirm";
        if (data.step === "confirm") step = "confirm";

        return step;
    };

    const submitData = () => {
        try {
            setBtnLoading(true);
            validateEmail(data.email);
            validatePhoneNumber(data.phone_number);

            if (data.company_email !== "") validateEmail(data.company_email);
            if (data.company_phone !== "")
                validatePhoneNumber(data.company_phone);
            if (data.website_link !== "") validateUrl(data.website_link);

            setError(false);

            updateMember(
                { ...data, step: getStep(data.step) },
                updateData,
                setBtnLoading,
                setError
            );

            if (data.step === "confirm") proceedToCheckout();
        } catch (error) {
            setBtnLoading(false);
            setError(error.message);
        }
    };

    const getPaymentItems = () => {
        let items = [];

        packages.map((item) => {
            if (data.subscription_category === item.value) {
                if (data.registration_status === "unregistered")
                    items.push({
                        name: "Registration",
                        quantity: 1,
                        unit_price: item.registration,
                    });
                if (data.subscription_status === "inactive")
                    items.push({
                        name: "Annual Subscription",
                        quantity: 1,
                        unit_price: item.price,
                    });
            }

            return item;
        });

        return items;
    };

    const proceedToCheckout = () => {
        let description = "";

        if (
            data.subscription_status === "inactive" &&
            data.registration_status === "unregistered"
        ) {
            description = "Member Registration and Annual Subscription";
        } else if (
            data.subscription_status === "inactive" &&
            data.registration_status === "registered"
        ) {
            description = "Annual Subscription";
        }

        const invoiceData = {
            description: description,
            items: getPaymentItems(),
            member_id: data.id,
            customer: {
                name: data.first_name + " " + data.last_name,
                email: data.email,
                phone_number: data.phone_number,
                address: data.postal_address,
            },
        };

        generateInvoice(invoiceData).then(({ data }) => {
            window.location.replace(
                "/checkout/invoice/" +
                    data.id +
                    "/" +
                    data.invoice_number +
                    "/membership"
            );
        });
    };

    useEffect(() => {
        AuthMember(jwt_decode);
        getMember(updateData);
    }, []);

    let disabled = false;

    if (data.step === "personal") {
        disabled =
            data.first_name === "" ||
            data.last_name === "" ||
            data.email === "" ||
            data.phone_number === "";
    } else if (data.step === "company") {
        disabled =
            data.bio === "" ||
            data.location === "" ||
            data.postal_address === "" ||
            data.technology === "";
    } else if (data.step === "subscription") {
        disabled = data.subscription_category === "";
    }

    return (
        <div className="flex items-center justify-center">
            <div className="md:m-6 bg-white w-full h-full lg:w-8/12 mx-auto md:rounded-lg md:shadow-lg">
                <Stepper
                    disabled={disabled}
                    data={data}
                    updateData={updateData}
                />
                <div className="p-5">
                    {error && (
                        <ErrorMessage error={error} setError={setError} />
                    )}
                    {data.step === "personal" && (
                        <PersonalDetails data={data} updateData={updateData} />
                    )}
                    {data.step === "company" && (
                        <CompanyDetails
                            data={data}
                            updateData={updateData}
                            setError={setError}
                        />
                    )}
                    {data.step === "subscription" && (
                        <Subscription data={data} updateData={updateData} />
                    )}
                    {data.step === "confirm" && <ConfirmDetails data={data} />}
                    <ActionButtons
                        disabled={disabled}
                        data={data}
                        updateData={updateData}
                        submitData={submitData}
                        btnLoading={btnLoading}
                    />
                </div>
            </div>
        </div>
    );
};
