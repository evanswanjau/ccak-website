import { Link } from "react-router-dom";
import { Slide, Fade } from "react-reveal";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { BsTwitter, BsFacebook, BsLinkedin } from "react-icons/bs";

export const ContactUsPage = () => {
    return (
        <div>
            <section className="flex flex-col md:flex-row w-full py-6 md:py-20 px-6 md:px-12 bg-[#EFF7F2]">
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
                                >
                                    info@ccak.or.ke
                                </a>
                            </div>
                        </Slide>
                        <Slide bottom>
                            <div className="flex flex-row space-x-4 hover:text-[#ED7423] my-3 text-gray-600">
                                <PhoneIcon className="w-5 h-5" />
                                <a href="tel:+254707111669" target="_blank">
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
                                >
                                    NextGen Mall, Mombasa Road. Nairobi, Kenya
                                </a>
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
                                    08:00 - 18:00
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
                        <div className="py-5 space-x-8 space flex">
                            <a
                                href="https://web.facebook.com/CleanCookingKe"
                                target="_blank"
                            >
                                <BsFacebook className="text-xl text-gray-600 hover:text-[#ED7423] transition duration-150 ease-in-out" />
                            </a>
                            <a
                                href="https://twitter.com/CleanCookingKe"
                                target="_blank"
                            >
                                <BsTwitter className="text-xl text-gray-600 hover:text-[#ED7423] transition duration-150 ease-in-out" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/clean-cooking-association-of-kenya-ccak-ba852517b"
                                target="_blank"
                            >
                                <BsLinkedin className="text-xl text-gray-600 hover:text-[#ED7423] transition duration-150 ease-in-out" />
                            </a>
                        </div>
                    </Fade>
                </div>
            </section>
            <section className="w-full flex py-6 px-6 md:p-16">
                <div className="mx-auto w-full lg:w-7/12">
                    <Slide bottom>
                        <h3 className="text-black text-xl mb-5 font-semibold">
                            Send us a message
                        </h3>
                    </Slide>
                    <Fade>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 font-manjari">
                            <input
                                className="w-full border border-1 outline-0 rounded-md pt-3 pb-2 px-3 focus:border-gray-400 focus:border-1"
                                type="text"
                                placeholder="First Name"
                            />
                            <input
                                className="w-full border border-1 outline-0 rounded-md pt-3 pb-2 px-3 focus:border-gray-400 focus:border-1"
                                type="text"
                                placeholder="Last Name"
                            />
                            <input
                                className="w-full border border-1 outline-0 rounded-md pt-3 pb-2 px-3 focus:border-gray-400 focus:border-1"
                                type="email"
                                placeholder="Email"
                            />
                            <input
                                className="w-full border border-1 outline-0 rounded-md pt-3 pb-2 px-3 focus:border-gray-400 focus:border-1"
                                type="text"
                                placeholder="Phone Number"
                            />
                        </div>
                        <div className="my-3 md:my-5 font-manjari">
                            <textarea
                                rows="4"
                                placeholder="Enter your message here..."
                                className="w-full border border-1 outline-0 rounded-md pt-3 pb-2 px-3 focus:border-gray-400 focus:border-1"
                            ></textarea>
                        </div>
                        <button className="bg-[#329E49] leading-none pb-3 pt-4 px-5 font-manjari text-white hover:bg-[#ED7423] hover:text-white rounded-md transition duration-300 ease-in-out tracking-widest">
                            SEND MESSAGE
                        </button>
                    </Fade>
                </div>
            </section>
            <section>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.013920974716!2d36.8440354!3d-1.3237712!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11be560b5283%3A0x9dacf93424a76a51!2sThe%20Nextgen%20Mall!5e0!3m2!1sen!2ske!4v1678349809373!5m2!1sen!2ske"
                    width="100%"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
        </div>
    );
};
