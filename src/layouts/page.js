import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";
import { searchData } from "../api/api-calls";
import { NavBar } from "./navBar";
import { Footer } from "../components/footer";

const viewFooter = (pathname) => {
    let footer = true;

    if (pathname.split("/")[1] === "social-hub") footer = false;
    if (pathname.split("/")[1] === "my-account") footer = false;
    if (pathname.split("/")[2] === "register") footer = false;
    if (pathname.split("/")[2] === "login") footer = false;
    if (pathname.split("/")[2] === "onboarding") footer = false;
    if (pathname.split("/")[2] === "forgot-password") footer = false;
    if (pathname.split("/")[1] === "checkout") footer = false;
    if (pathname.split("/")[3] === "activate") footer = false;

    return footer;
};

const viewHeader = (pathname) => {
    let footer = true;

    if (pathname.split("/")[2] === "register") footer = false;
    if (pathname.split("/")[2] === "login") footer = false;
    if (pathname.split("/")[2] === "onboarding") footer = false;
    if (pathname.split("/")[2] === "forgot-password") footer = false;
    if (pathname.split("/")[1] === "checkout") footer = false;
    if (pathname.split("/")[3] === "activate") footer = false;

    return footer;
};

export const Page = ({
    title,
    description,
    image,
    page,
    data,
    updateData,
    readMorePage = false,
    readMoreLoading = false,
    children,
}) => {
    const [loading, setLoading] = useState(!readMorePage);
    useEffect(() => {
        ReactGA.initialize(process.env.REACT_APP_API_URL);
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        if (!readMorePage) {
            setLoading(true);
            searchData(
                "content",
                {
                    page,
                },
                updateData,
                null,
                enqueueSnackbar,
                null,
                setLoading
            );
        }
    }, []); //eslint-disable-line

    viewHeader(window.location.pathname);

    return (
        <div>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta
                    name="keywords"
                    content="Clean Cooking, Association, Kenya, CCAK, Clean Energy, Sustainable Cooking, Eco-friendly Cooking, Kenya Cooking, Clean Cooking Methods, Clean Cooking Technologies, Kenyan Association, Cooking in Kenya, Clean Cooking Advocacy, Clean Cooking Sector, Clean Cooking Adoption"
                />
                <meta property="og:image" content={image} />
            </Helmet>
            {(loading || readMoreLoading) && (
                <div className="flex justify-center items-center h-screen">
                    <img
                        src={
                            process.env.REACT_APP_IMAGEKIT_URL + "ccak_logo.png"
                        }
                        alt="The Clean Cooking Association of Kenya"
                        className="w-52 mx-auto my-5 animate-zoom"
                    />
                </div>
            )}
            {data && data.length > 0 && !loading && !readMorePage && (
                <div>
                    {viewHeader(window.location.pathname) && <NavBar />}
                    {children}
                    {viewFooter(window.location.pathname) && <Footer />}
                </div>
            )}
            {!readMoreLoading && readMorePage && (
                <div>
                    {viewHeader(window.location.pathname) && <NavBar />}
                    {children}
                    {viewFooter(window.location.pathname) && <Footer />}
                </div>
            )}
        </div>
    );
};
