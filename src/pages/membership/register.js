import { useState } from "react";
import { InputForm } from "../../components/forms/input-form";
import {
    validateEmail,
    validatePassword,
    validatePhoneNumber,
} from "../../helpers/validation";
import { ErrorMessage } from "../../components/forms/error";
import { ButtonLoader } from "../../components/btnLoader";
import { registerMember } from "../../api/api-calls";
import { Page } from "../../layouts/page";
import { Carousel } from "../../components/carousel";

export const RegisterPage = () => {
    const [pageData, updatePageData] = useState([]);
    const [btnLoading, setBtnLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, updateData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        password: "",
        confirm_password: "",
        company: "",
        designation: "",
        agree_to_terms: false,
        data_from: "website",
    });

    const submitData = () => {
        try {
            setBtnLoading(true);
            validateEmail(data.email);
            validatePhoneNumber(data.phone_number);
            validatePassword(data.password, data.confirm_password);

            setError(false);
            registerMember(data, setBtnLoading, setError);
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
        <Page
            title="Register as a member"
            description="Join the Clean Cooking Alliance Kenya as a member and be part of the movement towards a healthier and sustainable future."
            image={
                process.env.REACT_APP_IMAGEKIT_URL +
                "membership_registration.jpg"
            }
            page="register"
            data={pageData}
            updateData={updatePageData}
        >
            <div className="h-screen flex">
                <div
                    style={{
                        backgroundImage: `url(${
                            process.env.REACT_APP_IMAGEKIT_URL +
                            "membership_registration.jpg"
                        })`,
                        backgroundSize: "cover",
                    }}
                    className="g-cover bg-center bg-no-repeat w-full hidden lg:block overflow-y-auto"
                >
                    <div className="h-full w-full bg-black bg-opacity-50 overflow-y-auto">
                        <ul className="text-lg text-white flex space-x-2">
                            <li className="m-3 hover:text-[#ED7423] transition duration-300 ease-in-out">
                                <a href="/"><h3 className="font-bold text-lg">Back to main site</h3></a>
                            </li>
                            <li className="m-3 hover:text-[#ED7423] transition duration-300 ease-in-out">
                                <a href="/membership/packages">
                                   <h3 className="font-bold text-lg">Member packages</h3> 
                                </a>
                            </li>
                        </ul>
                        <div className="px-5 flex items-center min-h-screen -mt-12">
                            <div className=" w-full">
                                <Carousel
                                    items={pageData[0]?.content.map(
                                        (item, i) => {
                                            return (
                                                <h3 className="font-semibold text-4xl pr-5 text-white">
                                                    {item}
                                                </h3>
                                            );
                                        }
                                    )}
                                    autoplay={true}
                                    slides={1}
                                    show={1}
                                    reverse={false}
                                    arrow={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full p-10 bg-white overflow-y-auto flex flex-col justify-center">
                    <h1 className="font-bold text-4xl text-gray-800">Register as a member</h1>
                    <p className="text-gray-400">
                        Already have an account{" "}
                        <a className="text-sky-600" href="/membership/login">
                            Login
                        </a>
                    </p>
                    <p className="text-gray-600 my-5">
                        Join the Clean Cooking Alliance Kenya as a member and be
                        part of the movement towards a healthier and sustainable
                        future.
                    </p>
                    <div className="space-y-4">
                        {error && (
                            <ErrorMessage error={error} setError={setError} />
                        )}
                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 my-5">
                            <div className="w-full">
                                <InputForm
                                    type="text"
                                    name="first_name"
                                    label="First Name"
                                    required={true}
                                    data={data}
                                    updateData={updateData}
                                />
                            </div>
                            <div className="w-full">
                                <InputForm
                                    type="text"
                                    name="last_name"
                                    label="Last Name"
                                    required={true}
                                    data={data}
                                    updateData={updateData}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                            <div className="w-full">
                                <InputForm
                                    type="email"
                                    name="email"
                                    label="Email Address"
                                    required={true}
                                    data={data}
                                    updateData={updateData}
                                />
                            </div>
                            <div className="w-full">
                                <InputForm
                                    type="text"
                                    name="phone_number"
                                    label="Phone Number"
                                    required={true}
                                    data={data}
                                    updateData={updateData}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                            <div className="w-full">
                                <InputForm
                                    type="text"
                                    name="company"
                                    label="Company you represent"
                                    data={data}
                                    updateData={updateData}
                                />
                            </div>
                            <div className="w-full">
                                <InputForm
                                    type="text"
                                    name="designation"
                                    label="Designation"
                                    data={data}
                                    updateData={updateData}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                            <div className="w-full">
                                <InputForm
                                    type="password"
                                    name="password"
                                    label="Password"
                                    required={true}
                                    data={data}
                                    updateData={updateData}
                                />
                            </div>
                            <div className="w-full">
                                <InputForm
                                    type="password"
                                    name="confirm_password"
                                    label="Confirm Password"
                                    required={true}
                                    data={data}
                                    updateData={updateData}
                                />
                            </div>
                        </div>
                        <div className="flex items-center">
                            <input
                                id="link-checkbox"
                                type="checkbox"
                                value={data.agree_to_terms}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                onChange={(event) => {
                                    updateData({
                                        ...data,
                                        agree_to_terms: event.target.checked,
                                    });
                                }}
                            />
                            <label
                                htmlFor="link-checkbox"
                                className="ml-2 text-sm flex space-x-1 font-medium text-gray-900 dark:text-gray-300"
                            >
                                <p>I agree with the</p>
                                <a
                                    href="/legal/terms-and-conditions"
                                    className="text-blue-600 dark:text-blue-500 hover:underline"
                                    target="_blank"
                                >
                                    terms and conditions
                                </a>
                                .
                            </label>
                        </div>
                        <button
                            type="button"
                            disabled={disabled || btnLoading}
                            className={`w-full tracking-widest ${
                                disabled || btnLoading
                                    ? "bg-gray-200"
                                    : "bg-[#329E49] hover:bg-[#3ab554]"
                            }  text-white flex justify-center font-medium rounded-lg text-sm px-5 py-3 my-5 transition duration-700 ease-in-out`}
                            onClick={() => {
                                submitData();
                            }}
                        >
                            {btnLoading ? <ButtonLoader /> : "REGISTER"}
                        </button>
                    </div>
                </div>
            </div>
        </Page>
    );
};
