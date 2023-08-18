import { useEffect, useState } from "react";

import { ErrorMessage } from "../../components/forms/error";
import { getMember, onboardMember } from "../../api/api-calls";
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
        if (data.step === "confirm") step = "checkout";

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
            onboardMember(
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

    const proceedToCheckout = () => {
        console.log("we are ready to checkout");
    };

    useEffect(() => {
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
        <div className="m-6 w-8/12 mx-auto rounded-lg shadow-lg">
            <Stepper data={data} updateData={updateData} />
            <div className="p-5">
                {error && <ErrorMessage error={error} setError={setError} />}
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
    );
};
