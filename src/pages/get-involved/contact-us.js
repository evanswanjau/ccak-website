import { Slide, Fade } from "react-reveal";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import {
    BsTwitter,
    BsFacebook,
    BsLinkedin,
    BsYoutube,
    BsTiktok,
    BsInstagram,
} from "react-icons/bs";
import { useState } from "react";
import { InputForm } from "../../components/forms/input-form";
import { TextArea } from "../../components/forms/text-area";
import { ErrorMessage } from "../../components/forms/error";
import { SuccessMessage } from "../../components/forms/success";
import { ButtonLoader } from "../../components/btnLoader";
import { validateEmail, validatePhoneNumber } from "../../helpers/validation";
import { sendMail } from "../../api/api-calls";

export const ContactUsPage = () => {
    const [btnLoading, setBtnLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [data, updateData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        message: "",
    });

    const sendMessage = () => {
        try {
            setBtnLoading(true);
            validateEmail(data.email);
            validatePhoneNumber(data.phone_number);

            setError(false);
            sendMail(data, setBtnLoading, setError, setSuccess);
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
        data.message === "";

    return (
        <div className="pt-[3.8rem] lg:pt-[6.6rem]">
            <section className="flex flex-col md:flex-row w-full py-6 md:py-20 px-6 md:px-12 bg-[#F2F9F4]">
                <div className="hidden w-full lg:block md:w-1/12">
                    <Fade>
                        <div className="border-t-2 border-black mx-5 my-7"></div>
                    </Fade>
                </div>
                <div className="md:w-6/12 lg:w-5/12 md:pr-5 py-5">
                    <Fade>
                        <h6 className="text-black font-semibold text-sm">
                            CONTACT US
                        </h6>
                    </Fade>
                    <Slide bottom>
                        <h2 className="text-black text-4xl lg:text-6xl my-8 font-bold">
                            We'd love to hear from you
                        </h2>
                    </Slide>
                    <Slide bottom>
                        <p className="my-5 text-gray-600">
                            Have any question in mind or want to enquire? Please
                            feel free to contact us through the form or the
                            following details.
                        </p>
                    </Slide>
                </div>
                <div className="lg:w-6/12">
                    <div className="border-b pb-2">
                        <Slide bottom>
                            <h3 className="text-black text-xl mb-3 font-semibold">
                                Let's talk
                            </h3>
                        </Slide>
                        <Slide bottom>
                            {" "}
                            <div className="flex flex-row space-x-4 hover:text-[#ED7423] my-2 text-gray-600">
                                <EnvelopeIcon className="w-5 h-5" />
                                <a
                                    href="mailto:info@ccak.or.ke"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    info@ccak.or.ke
                                </a>
                            </div>
                        </Slide>
                        <Slide bottom>
                            <div className="flex flex-row space-x-4 hover:text-[#ED7423] my-3 text-gray-600">
                                <PhoneIcon className="w-5 h-5" />
                                <a
                                    href="tel:+254707111669"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    0707 111 669
                                </a>
                            </div>
                        </Slide>
                    </div>
                    <div className="border-b py-5">
                        <Slide bottom>
                            <h3 className="text-black text-xl mb-3 font-semibold">
                                Head Office
                            </h3>
                        </Slide>
                        <Slide bottom>
                            <p className="text-gray-600 hover:text-[#ED7423]">
                                <a
                                    href="https://goo.gl/maps/TFu82RKkDVPSWjuv8"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    3rd Floor - Unit 19, NextGen Mall, Mombasa
                                    Road. Nairobi, Kenya
                                </a>
                            </p>
                        </Slide>
                    </div>
                    <div className="border-b py-5">
                        <Slide bottom>
                            <h3 className="text-black text-xl mb-3 font-semibold">
                                Postal Address
                            </h3>
                        </Slide>
                        <Slide bottom>
                            <p className="text-gray-600">
                                P.O Box 60469, 00100. Nairobi Kenya
                            </p>
                        </Slide>
                    </div>
                    <div className="border-b py-5">
                        <Slide bottom>
                            <h3 className="text-black text-xl mb-3 font-semibold">
                                Business Hours
                            </h3>
                        </Slide>
                        <Slide bottom>
                            <p className="text-gray-600">
                                Monday-Friday:{" "}
                                <span className="text-black font-semibold">
                                    8:00 AM - 05:00 PM
                                </span>
                            </p>
                        </Slide>
                        <Slide bottom>
                            <p className="text-gray-600">
                                Saturday, Sunday and Public Holidays:{" "}
                                <span className="text-black font-semibold">
                                    Closed
                                </span>
                            </p>
                        </Slide>
                    </div>
                    <Fade bottom>
                        <div className="py-5 space-x-14 space flex">
                            <a
                                href="https://web.facebook.com/CleanCookingKe"
                                target="_blank"
                                rel="noreferrer"
                                title="@CleanCookingKe"
                            >
                                <BsFacebook className="text-3xl text-[#3b5998] hover:text-[#ED7423] transition duration-300 ease-in-out" />
                            </a>
                            <a
                                href="https://twitter.com/CleanCookingKe"
                                target="_blank"
                                rel="noreferrer"
                                title="@CleanCookingKe"
                            >
                                <BsTwitter className="text-3xl text-[#00ACEE] hover:text-[#ED7423] transition duration-300 ease-in-out" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/clean-cooking-association-of-kenya-ccak-ba852517b"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <BsLinkedin className="text-3xl text-[#0077b5] hover:text-[#ED7423] transition duration-300 ease-in-out" />
                            </a>
                            <a
                                href="https://www.youtube.com/@cleancookingassociationofk1288"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <BsYoutube className="text-3xl text-[#FF0000] hover:text-[#ED7423] transition duration-300 ease-in-out" />
                            </a>
                            <a
                                href="https://www.tiktok.com/@ccakenya"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <BsTiktok className="text-3xl text-black hover:text-[#ED7423] transition duration-300 ease-in-out" />
                            </a>
                            <a
                                href="https://www.instagram.com/ccakenya"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <BsInstagram className="text-3xl text-[#D62976] hover:text-[#ED7423] transition duration-300 ease-in-out" />
                            </a>
                        </div>
                    </Fade>
                </div>
            </section>
            <section className="w-full space-y-12 lg:space-y-0 lg:space-x-8 flex-col flex lg:flex-row py-16 px-6 lg:px-10">
                <div className="w-full">
                    <Slide bottom>
                        <h3 className="text-black text-xl mb-5 font-semibold">
                            Send us a message
                        </h3>
                    </Slide>
                    <Fade>
                        <div className="space-y-4">
                            {error && (
                                <ErrorMessage
                                    error={error}
                                    setError={setError}
                                />
                            )}
                            {success && (
                                <SuccessMessage
                                    success={success}
                                    setSuccess={setSuccess}
                                />
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
                            <div className="w-full">
                                <TextArea
                                    type="text"
                                    name="message"
                                    label="Write your message here"
                                    required={true}
                                    data={data}
                                    updateData={updateData}
                                />
                            </div>
                        </div>
                        <button
                            className={`${
                                disabled || btnLoading
                                    ? "bg-gray-200"
                                    : "bg-[#ED7423] hover:bg-[#ce621b]"
                            }  leading-none mt-5 pb-3 pt-4 px-5 font-manjari text-white  rounded-md transition duration-300 ease-in-out tracking-widest`}
                            onClick={() => {
                                sendMessage();
                            }}
                        >
                            {btnLoading ? <ButtonLoader /> : "SEND MESSAGE"}
                        </button>
                    </Fade>
                </div>
                <div className="w-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.013920974716!2d36.8440354!3d-1.3237712!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11be560b5283%3A0x9dacf93424a76a51!2sThe%20Nextgen%20Mall!5e0!3m2!1sen!2ske!4v1678349809373!5m2!1sen!2ske"
                        width="100%"
                        height="450"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        title="maps"
                        className="rounded-lg"
                    ></iframe>
                </div>
            </section>
        </div>
    );
};
