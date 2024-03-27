import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useParams } from "react-router-dom";
import { InputForm } from "../../components/forms/input-form";
import { SideMenu } from "../../components/navBar/socialHub/sideMenu";
import { ButtonLoader } from "../../components/btnLoader";
import { AuthMember } from "../../helpers/auth";
import { changeMemberPassword, getMember } from "../../api/member-api-calls";
import { SuccessMessage } from "../../components/forms/success";
import { ErrorMessage } from "../../components/forms/error";
import { NavBar } from "../../layouts/navBar";

export const MyAccountChangePasswordPage = () => {
    const params = useParams();
    const [btnLoading, setBtnLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [member, setMember] = useState({});
    const [data, updateData] = useState({
        current_password: "",
        new_password: "",
        confirm_password: "",
    });

    const changePassword = () => {
        setError(false);
        setSuccess(false);
        setBtnLoading(true);

        if (data.new_password.length < 8) {
            setError("Password too short");
        } else {
            if (data.new_password === data.confirm_password) {
                changeMemberPassword(
                    member.id,
                    data,
                    setSuccess,
                    setError
                ).finally(() => {
                    setBtnLoading(false);
                    updateData({
                        current_password: "",
                        new_password: "",
                        confirm_password: "",
                    });
                });
            } else {
                setError("Passwords not similar");
            }
        }
        setBtnLoading(false);
    };

    let disabled =
        data.current_password === "" ||
        data.new_password === "" ||
        data.confirm_password === "";

    useEffect(() => {
        if (params.token) {
            localStorage.setItem("token", params.token);
            getMember(setMember);
        } else {
            AuthMember(jwt_decode);
            getMember(setMember);
        }
    }, []); // eslint-disable-line

    return (
        <>
            <NavBar />
            <div className="pt-[3.8rem] md:pt-[6.8rem] bg-slate-100 h-screen">
                <div className="flex flex-col md:flex-row md:space-x-8 px-6 lg:px-16">
                    <div className="md:w-3/12 py-10">
                        <SideMenu />
                    </div>
                    <div className="w-full md:w-8/12 lg:w-5/12 bg-white mb-10 md:my-10 shadow-lg rounded-lg">
                        <div className="space-y-6 p-5">
                            <h3 className="font-semibcurrent_ text-2xl my-5">
                                Change Password
                            </h3>
                            {success && (
                                <SuccessMessage
                                    success={success}
                                    setSuccess={setSuccess}
                                />
                            )}
                            {error && (
                                <ErrorMessage
                                    error={error}
                                    setError={setError}
                                />
                            )}

                            <InputForm
                                type="password"
                                name="current_password"
                                label="Current Password"
                                data={data}
                                updateData={updateData}
                            />
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
                                    changePassword();
                                }}
                            >
                                {btnLoading ? (
                                    <ButtonLoader />
                                ) : (
                                    "CHANGE PASSWORD"
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
