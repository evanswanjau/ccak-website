import { useState } from "react";
import { InputForm } from "../../components/forms/input-form";
import { loginMember } from "../../api/api-calls";
import { ButtonLoader } from "../../components/btnLoader";
import { ErrorMessage } from "../../components/forms/error";

export const LoginPage = () => {
    const [btnLoading, setBtnLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, updateData] = useState({
        email: "",
        password: "",
    });

    let disabled = data.email === "" || data.password === "";

    const handleLogin = () => {
        setBtnLoading(true);
        loginMember(data, setBtnLoading, setError);
    };

    return (
        <div className="h-screen flex">
            <div
                style={{
                    backgroundImage: `url(${
                        process.env.REACT_APP_IMAGEKIT_URL +
                        "membership_registration.jpg"
                    })`,
                    backgroundSize: "cover",
                }}
                className="g-cover bg-center bg-no-repeat w-full hidden lg:block"
            >
                <ul className="text-lg text-white flex space-x-2">
                    <li className="m-3 hover:text-[#ED7423] transition duration-300 ease-in-out">
                        <a href="/">
                            <h3 className="font-bold text-lg">
                                Back to main site
                            </h3>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="w-full p-5 md:p-10 bg-white overflow-y-auto flex flex-col justify-center">
                <div className="lg:hidden absolute top-5 left-5">
                    <a href="/">
                        <h3 className="font-bold text-lg">Back to main site</h3>
                    </a>
                </div>
                <h1 className="font-bold text-4xl text-gray-80">
                    Welcome back
                </h1>
                <p className="text-gray-400">
                    Don't have an account?{" "}
                    <a
                        className="text-blue-600 hover:text-blue-800"
                        href="/membership/register"
                    >
                        Register
                    </a>
                </p>
                <div className="space-y-4 my-12">
                    {error && (
                        <ErrorMessage
                            error={
                                error ===
                                "No account found with this email." ? (
                                    <>
                                        <p>{error}</p>
                                        <p>
                                            If you're a CCAK Member, please
                                            contact{" "}
                                            <a
                                                href="mailto:info@ccak.or.ke"
                                                className="underline"
                                            >
                                                info@ccak.or.ke
                                            </a>{" "}
                                            to be onboarded. If it's your first
                                            time here,{" "}
                                            <a
                                                href="/membership/register"
                                                className="underline"
                                            >
                                                register here
                                            </a>
                                            .
                                        </p>
                                    </>
                                ) : (
                                    error
                                )
                            }
                            setError={setError}
                        />
                    )}
                    <InputForm
                        type="email"
                        name="email"
                        label="Email Address"
                        data={data}
                        updateData={updateData}
                    />
                    <InputForm
                        type="password"
                        name="password"
                        label="Password"
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
                            handleLogin();
                        }}
                    >
                        {btnLoading ? <ButtonLoader /> : "CONTINUE"}
                    </button>
                    <div className="text-blue-600 hover:text-blue-800 flex justify-end">
                        <a className="" href="/membership/forgot-password">
                            Forgot Password
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
