import { useState } from "react";

import { ErrorMessage } from "../../components/forms/error";
import { ButtonLoader } from "../../components/btnLoader";
import { registerMember } from "../../api/api-calls";
import {
    validateEmail,
    validatePassword,
    validatePhoneNumber,
} from "../../helpers/validation";
import { TextArea } from "../../components/forms/text-area";
import { PersonalDetails } from "../../layouts/forms/onboarding/personal";
import { CompanyDetails } from "../../layouts/forms/onboarding/company";
import { Stepper } from "../../layouts/forms/onboarding/stepper";
import { ActionButtons } from "../../layouts/forms/onboarding/action-buttons";

export const OnboardingPage = () => {
    const [btnLoading, setBtnLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, updateData] = useState({
        bio: "",
        technology: "",
        company_email: "",
        company_phone: "",
        location: "",
        website_link: "",
        logo: "",
        step: "company",
    });

    const submitData = () => {
        try {
            setBtnLoading(true);
            validateEmail(data.email);
            validatePhoneNumber(data.phone_number);
            validatePassword(data.password, data.confirm_password);

            setError(false);
            registerMember(data);
        } catch (error) {
            setBtnLoading(false);
            setError(error.message);
        }
    };

    let disabled =
        data.first_name === "" ||
        data.last_name === "" ||
        data.email === "" ||
        data.phone_number === "" ||
        data.password === "" ||
        data.confirm_password === "" ||
        data.password === "" ||
        data.agree_to_terms === false;

    return (
        <div className="m-6 w-8/12 mx-auto rounded-lg shadow-lg">
            <Stepper data={data} updateData={updateData} />
            <div className="p-5">
                {data.step === "personal" && (
                    <PersonalDetails data={data} updateData={updateData} />
                )}
                {data.step === "company" && (
                    <CompanyDetails data={data} updateData={updateData} />
                )}
                <ActionButtons />
            </div>
        </div>
    );
};
