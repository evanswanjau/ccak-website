import React from "react";
import { Link } from "react-router-dom";

export const DropDown = ({ dropDown: { show, category }, setDropDown }) => {
    const whoWeAreData = {
        links: [
            {
                link: "/who-we-are/about-us",
                name: "ABOUT US",
            },
            {
                link: "/who-we-are/about-us/#our-mission",
                name: "OUR MISSION",
            },
            {
                link: "/who-we-are/about-us/#our-vision",
                name: "OUR VISION",
            },
            {
                link: "/who-we-are/about-us/#our-partners",
                name: "OUR PARTNERS",
            },
            {
                link: "/who-we-are/our-team",
                name: "OUR TEAM",
            },
        ],
        info: {
            title: "WHO WE ARE",
            content:
                "Welcome to the Clean Cooking Association of Kenya (CCAK), we are committed to promoting the use of clean cooking solutions and practices in Kenya.  Our objective is to advocate for an enabling environment to catalyze the growth of the clean cooking sector and promote adoption of clean cooking technologies, capacity building of the sector, and sector coordination.",
        },
        image: "dropdown_menu/dropdown_who_we_are.jpg",
    };

    const getInvolvedData = {
        links: [
            {
                link: "/get-involved/careers/",
                name: "CAREERS",
            },
            {
                link: "/get-involved/consultancy/",
                name: "CONSULTANCY",
            },
            {
                link: "/get-involved/funding-opportunities/",
                name: "FUNDING OPPORTUNITIES",
            },
            {
                link: "/get-involved/donate/",
                name: "DONATE",
            },
            {
                link: "/get-involved/contact-us/",
                name: "CONTACT US",
            },
        ],
        info: {
            title: "GET INVOLVED",
            content:
                "We welcome individuals, organizations, and companies who share our vision and want to join us in promoting the adoption of clean cooking solutions and practices in Kenya. There are several ways to get involved with CCAK, whether it's by volunteering your time and skills, becoming a member, supporting our fundraising efforts, or collaborating with us on a project.",
        },
        image: "dropdown_menu/dropdown_get_involved.jpg",
    };

    const membershipData = {
        links: [
            {
                link: "/membership/why-join-us/",
                name: "WHY JOIN US",
            },
            {
                link: "/membership/packages/",
                name: "MEMBER PACKAGES",
            },
            {
                link: "/membership/our-members/",
                name: "OUR MEMBERS",
            },
            {
                link: "/membership/register/",
                name: "REGISTER NOW",
            },
        ],
        info: {
            title: "MEMBERSHIP",
            content:
                "We welcome individuals, organizations, and companies who share our vision and want to join us in promoting the adoption of clean cooking solutions and practices in Kenya. There are several ways to get involved with CCAK, whether it's by volunteering your time and skills, becoming a member, supporting our fundraising efforts, or collaborating with us on a project.",
        },
        image: "dropdown_menu/dropdown_membership.jpg",
    };

    const resourceCentreData = {
        links: [
            {
                link: "/resource-centre/research-papers/",
                name: "RESEARCH PAPERS",
            },
            {
                link: "/resource-centre/agm-material/",
                name: "AGM MATERIAL",
            },
        ],
        info: {
            title: "RESOURCE CENTRE",
            content:
                "Here you will find a wealth of information and resources related to clean cooking, including research reports, case studies, technical documents, and training materials. Our Resource Centre is designed to serve as a one-stop-shop for anyone seeking knowledge and insights on clean cooking technologies, practices, and policies in Kenya.",
        },
        image: "dropdown_menu/dropdown_resource_centre.jpg",
    };

    const mediaCentreData = {
        links: [
            {
                link: "/media-centre/press-release/",
                name: "PRESS RELEASE",
            },
            {
                link: "/media-centre/news/",
                name: "NEWS",
            },
            {
                link: "/media-centre/events/",
                name: "EVENTS",
            },
            {
                link: "/media-centre/projects/",
                name: "PROJECTS",
            },
            {
                link: "/media-centre/photo-gallery/",
                name: "PHOTO GALLERY",
            },
        ],
        info: {
            title: "MEDIA CENTRE",
            content:
                "Our media centre serves as a hub for anyone seeking to learn more about the clean cooking sector in Kenya and the efforts being made to promote its growth. We are committed to transparency and ensuring that accurate and up-to-date information is easily accessible to all stakeholders. We invite you to explore our media centre and contact us with any inquiries.",
        },
        image: "dropdown_menu/dropdown_media_centre.jpg",
    };

    let data = "";
    if (category === "WHO WE ARE") data = whoWeAreData;
    if (category === "GET INVOLVED") data = getInvolvedData;
    if (category === "MEMBERSHIP") data = membershipData;
    if (category === "MEDIA CENTRE") data = mediaCentreData;
    if (category === "RESOURCE CENTRE") data = resourceCentreData;

    return (
        show && (
            <div
                id="dropdownHolder"
                className="bg-gray-800 bg-opacity-50 h-screen w-full"
                onClick={(e) => {
                    e.target.id === "dropdownHolder" &&
                        setDropDown({
                            show: false,
                            category: "",
                        });
                }}
            >
                <div
                    id="dropdown"
                    className="z-10 flex flex-wrap w-100 font-manjari text-gray-600 bg-white shadow-sm"
                >
                    <div className="w-3/12 p-5">
                        <ul className=" border-r">
                            {data.links.map((link, i) => (
                                <Link to={link.link} key={i}>
                                    <li
                                        className="m-6 cursor-pointer text-lg hover:text-[#ED7423]"
                                        onClick={() => {
                                            setDropDown({
                                                show: false,
                                                category: "",
                                            });
                                        }}
                                    >
                                        {link.name}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <div className="w-5/12 p-5">
                        <h1 className="m-5 text-2xl text-gray-800">
                            {data.info.title}
                        </h1>
                        <p className="m-5">{data.info.content}</p>
                    </div>
                    <div
                        style={{
                            backgroundImage: `url(${
                                process.env.REACT_APP_IMAGEKIT + data.image
                            })`,
                        }}
                        className={`w-4/12 bg-cover bg-center bg-no-repeat`}
                    ></div>
                </div>
            </div>
        )
    );
};
