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
                className="g-cover bg-center bg-no-repeat w-full"
            >
                <a href="/">
                    <img src="/ccak_logo.png" className="w-20 m-5" alt="Logo" />
                </a>
            </div>
            <div className="w-full p-10 bg-white overflow-scroll">
                <h1 className="font-bold text-3xl">Welcome back</h1>
                <p className="text-gray-400">
                    Don't have an account?{" "}
                    <a className="text-sky-600" href="/membership/register">
                        Register
                    </a>
                </p>
                <div className="space-y-4 my-24">
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
                        class={`w-full tracking-widest ${
                            disabled
                                ? "bg-gray-200"
                                : "bg-[#329E49] hover:bg-[#3ab554] focus:outline-none focus:ring-4 focus:ring-green-300 "
                        }  text-white  font-medium rounded-lg text-sm px-5 py-3 my-5 transition duration-700 ease-in-out`}
                        onClick={() => handleLogin()}
                    >
                        {btnLoading ? <ButtonLoader /> : "Login"}
                    </button>
                </div>
            </div>
        </div>
    );
};
