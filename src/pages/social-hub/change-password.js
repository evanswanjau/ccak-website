import { useState } from "react";
import { InputForm } from "../../components/forms/input-form";
import { SideMenu } from "../../components/navBar/socialHub/sideMenu";

export const SocialHubChangePasswordPage = () => {
    const [data, updateData] = useState({
        oldpassword: "",
        newpassword: "",
        confirmpassword: "",
    });
    return (
        <div className="pt-[3.8rem] lg:pt-[6.9rem]">
            <div className="flex flex-col md:flex-row px-6 lg:px-16 space-x-8">
                <div className="md:w-3/12 py-10">
                    <div className="fixed md:w-3/12">
                        <SideMenu />
                    </div>
                </div>
                <div className="md:w-6/12 pt-10 lg:px-10">
                    <div className="space-y-6">
                        <h3 className="font-semibold text-2xl my-5">
                            Change Password
                        </h3>
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
                        <button className="w-full bg-[#329E49] font-manjari leading-none pb-2 pt-3 text-white hover:bg-[#ED7423] hover:text-white rounded-md transition duration-300 ease-in-out tracking-widest">
                            SUBMIT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
