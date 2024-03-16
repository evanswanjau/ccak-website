import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { InputForm } from "../../components/forms/input-form";
import { ButtonLoader } from "../../components/btnLoader";
import { ErrorMessage } from "../../components/forms/error";
import { FiArrowLeft } from "react-icons/fi";
import { changeMemberPassword } from "../../api/member-api-calls";
import { SuccessMessage } from "../../components/forms/success";

export const ResetPasswordPage = () => {
    const [btnLoading, setBtnLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [memberData, setMemberData] = useState(null);
    const [data, updateData] = useState({
        confirm_password: "",
        new_password: "",
        reset: true,
    });

    const { token } = useParams();

    useEffect(() => {
        try {
            localStorage.setItem("token", token);
            const decodedToken = jwt_decode(token);
            setMemberData(decodedToken);
        } catch (err) {
            setError("Invalid token");
        }
    }, [token]);

    let disabled = data.new_password === "" || data.confirm_password === "";

    useEffect(() => {
        const handleKeyUp = (event) => {
            if (event.keyCode === 13 && !disabled) {
                resetPassword();
            }
        };

        document.addEventListener("keyup", handleKeyUp);

        return () => {
            document.removeEventListener("keyup", handleKeyUp);
        };
    }, [disabled, data]); // eslint-disable-line

    const resetPassword = () => {
        setError(null);
        setSuccess(null);
        setBtnLoading(true);

        if (data.new_password.length < 8) {
            setError("Password too short");
        } else {
            if (data.new_password === data.confirm_password) {
                changeMemberPassword(
                    memberData?.user_id,
                    data,
                    setSuccess,
                    setError
                )
                    .then((data) => {
                        updateData({
                            new_password: "",
                            confirm_password: "",
                        });
                        setTimeout(() => {
                            localStorage.setItem("token", "");
                            window.location.replace("/membership/login");
                        }, 2000);
                    })
                    .catch(({ response }) => {
                        setError(
                            response?.data?.error ||
                                "Unable to submit, please check your connection and try again"
                        );
                    })
                    .finally(() => {
                        setBtnLoading(false);
                    });
            } else {
                setError("Passwords not similar");
            }
        }
        setBtnLoading(false);
    };

    return (
        <div className="flex items-center justify-center h-screen p-5">
            <div className="w-full md:w-8/12 lg:w-5/12 p-10 bg-white shadow-lg mx-auto rounded-lg">
                <a href="/">
                    <img
                        src="/ccak_logo.png"
                        className="w-28 mx-auto"
                        alt="Logo"
                    />
                </a>
                <h1 className="font-bold text-xl text-center mt-8 mb-2">
                    Reset Password
                </h1>
                <p className="text-gray-400 text-center">
                    Please enter your new password below.
                </p>
                <div className="space-y-4 my-10">
                    {error && (
                        <ErrorMessage error={error} setError={setError} />
                    )}

                    {success && (
                        <SuccessMessage
                            success={success}
                            setSuccess={setSuccess}
                        />
                    )}
                    <InputForm
                        type="password"
                        name="new_password"
                        label="New Password"
                        data={data}
                        updateData={updateData}
                    />
                    <InputForm
                        type="password"
                        name="confirm_password"
                        label="Confirm Password"
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
                            resetPassword();
                        }}
                    >
                        {btnLoading ? <ButtonLoader /> : "RESET PASSWORD"}
                    </button>
                </div>
                <div className="text-blue-600 hover:text-blue-900 flex justify-center">
                    <a className="flex space-x-2" href="/">
                        <FiArrowLeft className="mt-[0.4em]" />
                        <span className="text">Back to login</span>
                    </a>
                </div>
            </div>
        </div>
    );
};
