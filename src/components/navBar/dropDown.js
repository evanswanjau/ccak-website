import React from "react";

export const DropDown = ({ dropDown: { show, category }, setDropDown }) => {
    const whoWeAreData = {
        links: [
            {
                link: "/who-we-are/about-us",
                name: "ABOUT US",
            },
            {
                link: "/who-we-are/our-team",
                name: "OUR TEAM",
            },
            {
                link: "/who-we-are/about-us#our-mission-vision",
                name: "OUR MISSION",
            },
            {
                link: "/who-we-are/about-us#our-mission-vision",
                name: "OUR VISION",
            },
        ],
        info: {
            title: "WHO WE ARE",
            content:
                "Welcome to the Clean Cooking Association of Kenya (CCAK), we are committed to promoting the use of clean cooking solutions and practices in Kenya.  Our objective is to advocate for an enabling environment to catalyze the growth of the clean cooking sector and promote adoption of clean cooking technologies, capacity building of the sector, and sector coordination.",
        },
        image: "dropdown_menu/dropdown_who_we_are.jpg",
    };

    const whatWeDoData = {
        links: [
            {
                link: "/what-we-do",
                name: "WHAT WE DO",
            },
            {
                link: "/what-we-do/projects",
                name: "PROJECTS",
            },
        ],
        info: {
            title: "WHAT WE DO",
            content:
                "We focus on various aspects to drive the growth of the clean cooking sector. Our efforts revolve around creating a favorable environment at national and county levels, fostering the adoption of clean cooking technologies, enhancing sector capacity, and engaging with stakeholders to advocate for its progress by aiming to catalyze the advancement of the clean cooking sector",
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
                link: "/membership/packages/",
                name: "MEMBER PACKAGES",
            },
            {
                link: "/membership/our-members/",
                name: "OUR MEMBERS",
            },
            {
                link: "/membership/register/",
                name: "MEMBER REGISTRATION",
            },
            {
                link: "/membership/login/",
                name: "MEMBER LOGIN",
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
                link: "/resource-centre/internal-publications/",
                name: "INTERNAL PUBLICATIONS",
            },
            {
                link: "/resource-centre/external-publications/",
                name: "EXTERNAL PUBLICATIONS",
            },
            {
                link: "/resource-centre/newsletters/",
                name: "NEWSLETTERS",
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
                link: "/media-centre/blog/",
                name: "BLOG",
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
    if (category === "WHAT WE DO") data = whatWeDoData;
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
                    className="z-10 flex flex-wrap w-100 text-gray-700 bg-white shadow-sm"
                    onMouseLeave={() => {
                        setDropDown({ show: false, category: "" });
                    }}
                >
                    <div className="w-3/12 p-5">
                        <ul>
                            {data.links.map((link, i) => (
                                <a href={link.link} key={i}>
                                    <li
                                        className="m-6 font-poppins font-semibold tracking-wider cursor-pointer hover:text-[#ED7423]"
                                        onClick={() => {
                                            setDropDown({
                                                show: false,
                                                category: "",
                                            });
                                        }}
                                    >
                                        {link.name}
                                    </li>
                                </a>
                            ))}
                        </ul>
                    </div>
                    <div className="w-5/12 p-3">
                        <div className="border-l p-2">
                            <h1 className="m-5 text-xl font-bold text-gray-700">
                                {data.info.title}
                            </h1>
                            <p className="m-5">{data.info.content}</p>
                        </div>
                    </div>
                    <div
                        style={{
                            backgroundImage: `url(${
                                process.env.REACT_APP_IMAGEKIT_URL + data.image
                            })`,
                        }}
                        className={`w-4/12 bg-cover bg-center bg-no-repeat`}
                    ></div>
                </div>
            </div>
        )
    );
};
