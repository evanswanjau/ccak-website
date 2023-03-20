import { Link } from "react-router-dom";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export const Footer = () => {
    const links = [
        {
            name: "WHO WE ARE",
            links: [
                { name: "About Us", url: "/who-we-are/about-us" },
                {
                    name: "Our Mission",
                    url: "/who-we-are/about-us#our-mission",
                },
                { name: "Our Vision", url: "/who-we-are/about-us#our-vision" },
                {
                    name: "Our Partners",
                    url: "/who-we-are/about-us#our-partners",
                },
                { name: "Our Team", url: "/who-we-are/our-team" },
            ],
        },
        {
            name: "GET INVOLVED",
            links: [
                { name: "Careers", url: "/get-involved/careers" },
                { name: "Consultancy", url: "/get-involved/consultancy" },
                { name: "Donate", url: "/get-involved/donate" },
                { name: "Funding", url: "/get-involved/funding-opportunities" },
                { name: "Contact Us", url: "/get-involved/contact-us" },
            ],
        },
        {
            name: "MEDIA CENTRE",
            links: [
                { name: "News", url: "/media-centre/news" },
                { name: "Events", url: "/media-centre/events" },
                { name: "Projects", url: "/media-centre/projects" },
                { name: "Press", url: "/media-centre/press-release" },
                { name: "Gallery", url: "/media-centre/photo-gallery" },
            ],
        },
    ];

    return (
        <footer className="w-full px-5 lg:px-10 pt-5 text-gray-600">
            <div className="flex flex-col lg:flex-row lg:space-x-8">
                <div className="w-full lg:w-3/12">
                    <Link to="/">
                        <img
                            className="w-40 mb-5"
                            src="/ccak_side_logo.png"
                            alt="CCAK Logo"
                        />
                    </Link>
                    <p className="py-3">
                        The Clean Cooking Association of Kenya is a sector
                        association with a vision to see universal access and
                        adoption of clean cooking solutions and practices in
                        kenya, through a sustainable market environment.
                    </p>
                    <div className="flex flex-row space-x-4 hover:text-[#ED7423] my-2">
                        <EnvelopeIcon className="w-5 h-5" />
                        <Link to="mailto:info@ccak.or.ke">info@ccak.or.ke</Link>
                    </div>
                    <div className="flex flex-row space-x-4 hover:text-[#ED7423] my-3">
                        <PhoneIcon className="w-5 h-5" />
                        <Link to="tel:+254707111669">0707 111 669</Link>
                    </div>
                </div>
                <div className="w-full lg:w-6/12 pt-5">
                    <div className="flex flex-col lg:flex-row justify-around">
                        {links.map((link, i) => {
                            return (
                                <div key={i}>
                                    <h3 className="text-black font-medium my-5">
                                        {link.name}
                                    </h3>
                                    <ul>
                                        {link.links.map((item, i) => {
                                            return (
                                                <Link to={item.url} key={i}>
                                                    <li className="text-gray-600 hover:text-[#ED7423] my-4">
                                                        {item.name}
                                                    </li>
                                                </Link>
                                            );
                                        })}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="w-full lg:w-3/12 pt-5 font-manjari">
                    <h3 className="text-black font-medium my-5">NEWSLETTER</h3>
                    <p className="py-3">
                        Stay up-to-date with the latest news and updates on
                        clean cooking in Kenya by signing up for our newsletter!
                        As a subscriber, you'll be the first to hear about our
                        latest projects, events, and advocacy efforts.
                    </p>
                    <input
                        className="w-full border border-1 outline-0 rounded-md pt-3 pb-2 px-3 focus:border-gray-400 focus:border-1"
                        type="email"
                        placeholder="Your email"
                    />
                    <button className="my-3 bg-[#329E49] leading-none pb-2 pt-3 px-2 font-manjari text-white hover:bg-[#ED7423] hover:text-white rounded-md transition duration-300 ease-in-out tracking-widest">
                        SUBSCRIBE
                    </button>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row border-t py-5 mt-12 text-sm">
                <p className="w-full lg:w-6/12">
                    © Clean Cooking Association Kenya 2023 &nbsp;|&nbsp; All
                    rights Reserved
                </p>
                <p className="w-full lg:w-6/12 lg:text-right">
                    <Link
                        to="legal/terms-and-conditions"
                        className="hover:text-[#ED7423]"
                    >
                        Terms and Conditions
                    </Link>
                    &nbsp; | &nbsp;
                    <Link
                        to="legal/privacy-policy"
                        className="hover:text-[#ED7423]"
                    >
                        Privacy Policy
                    </Link>
                </p>
            </div>
        </footer>
    );
};
