import { useState } from "react";
import { useSnackbar } from "notistack";
import { InputForm } from "../../components/forms/input-form";
import { ButtonLoader } from "../../components/btnLoader";
import { ErrorMessage } from "../../components/forms/error";
import { FiArrowLeft } from "react-icons/fi";
import { validateEmail } from "../../helpers/validation";
import { resetPassword } from "../../api/member-api-calls";

export const ForgotPasswordPage = () => {
    const [btnLoading, setBtnLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, updateData] = useState({
        email: "",
        user_type: "member",
    });

    let disabled = data.email === "";

    const { enqueueSnackbar } = useSnackbar();

    const handleReset = () => {
        validateEmail(data.email);
        setBtnLoading(true);

        resetPassword(data).finally(() => {
            setBtnLoading(false);
            updateData({
                email: "",
                user_type: "member",
            });
            enqueueSnackbar(
                "Instructions to reset your password have been sent to your email",
                {
                    variant: "success",
                    anchorOrigin: {
                        horizontal: "center",
                        vertical: "top",
                    },
                }
            );
        });
    };

    return (
        <div className="flex items-center justify-center h-screen bg-white lg:bg-[#fcfcfc] lg:p-5">
            <div className="w-full md:w-10/12 lg:w-5/12 p-5 md:p-10 bg-white lg:shadow-lg mx-auto rounded-lg">
                <a href="/">
                    <img
                        src="/ccak_logo.png"
                        className="w-28 mx-auto"
                        alt="Logo"
                    />
                </a>
                <h1 className="font-bold text-xl text-center mt-8 mb-2">
                    Forgot Password
                </h1>
                <p className="text-gray-400 text-center">
                    Enter the email address you used to register and we'll send
                    you instructions to reset your password.
                </p>
                <div className="space-y-4 my-10">
                    {error && (
                        <ErrorMessage error={error} setError={setError} />
                    )}
                    <InputForm
                        type="email"
                        name="email"
                        label="Email Address"
                        data={data}
                        updateData={updateData}
                    />
                    <button
                        type="button"
                        disabled={disabled}
                        className={`w-full tracking-widest ${
                            disabled || btnLoading
                                ? "bg-gray-200"
                                : "bg-[#329E49] hover:bg-[#3ab554]"
                        }  text-white flex justify-center font-medium rounded-lg text-sm px-5 py-3 my-5 transition duration-700 ease-in-out`}
                        onClick={() => {
                            handleReset();
                        }}
                    >
                        {btnLoading ? <ButtonLoader /> : "RESET PASSWORD"}
                    </button>
                </div>
                <div className="flex justify-center">
                    <a
                        className="flex space-x-2 text-blue-600 hover:text-blue-800"
                        href="/membership/login"
                    >
                        <FiArrowLeft className="mt-[0.4em]" />
                        <span>Back to login</span>
                    </a>
                </div>
            </div>
        </div>
    );
};
