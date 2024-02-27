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

export const MyAccountChangePasswordPage = () => {
    const params = useParams();
    const [btnLoading, setBtnLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [member, setMember] = useState({});
    const [data, updateData] = useState({
        oldpassword: "",
        newpassword: "",
        confirmpassword: "",
    });

    const changePassword = () => {
        setError(false);
        setSuccess(false);
        setBtnLoading(true);

        if (data.oldpassword) {
            if (data.newpassword.length < 8) {
                setError("Password too short");
            } else {
                if (data.newpassword !== data.oldpassword) {
                    if (data.newpassword === data.confirmpassword) {
                        changeMemberPassword(member, setMember).finally(() => {
                            setSuccess("Password changed successfully");
                            setBtnLoading(false);
                            updateData({
                                oldpassword: "",
                                newpassword: "",
                                confirmpassword: "",
                            });
                        });
                    } else {
                        setError("Passwords not similar");
                    }
                } else {
                    setError("New password can't be similar to old password");
                }
            }
        } else {
            setError("Your old password is incorrect");
        }
        setBtnLoading(false);
    };

    let disabled =
        data.oldpassword === "" ||
        data.newpassword === "" ||
        data.confirmpassword === "";

    useEffect(() => {
        if (params.token) {
            localStorage.setItem("token", params.token);
            getMember(setMember);
        } else {
            AuthMember(jwt_decode);
            getMember(setMember);
        }
    }, []);

    return (
        <div className="pt-[3.8rem] md:pt-[6.8rem] bg-slate-100 h-screen">
            <div className="flex flex-col md:flex-row md:space-x-8 px-6 lg:px-16">
                <div className="md:w-3/12 py-10">
                    <SideMenu />
                </div>
                <div className="w-full md:w-8/12 lg:w-5/12 bg-white mb-10 md:my-10 shadow-lg rounded-lg">
                    <div className="space-y-6 p-5">
                        <h3 className="font-semibold text-2xl my-5">
                            Change Password
                        </h3>
                        {success && (
                            <SuccessMessage
                                success={success}
                                setSuccess={setSuccess}
                            />
                        )}
                        {error && (
                            <ErrorMessage error={error} setError={setError} />
                        )}

                        <InputForm
                            type="password"
                            name="oldpassword"
                            label="Old Password"
                            data={data}
                            updateData={updateData}
                        />
                        <InputForm
                            type="password"
                            name="newpassword"
                            label="New Password"
                            data={data}
                            updateData={updateData}
                        />
                        <InputForm
                            type="password"
                            name="confirmpassword"
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
                            {btnLoading ? <ButtonLoader /> : "CHANGE PASSWORD"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
