import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";
import { searchData } from "../api/api-calls";

export const Page = ({
    title,
    description,
    image,
    data,
    updateData,
    children,
}) => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        ReactGA.initialize(process.env.REACT_APP_API_URL);
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        searchData(
            "content",
            {
                page: "home",
            },
            updateData,
            null,
            enqueueSnackbar,
            null,
            setLoading
        );
    }, []); //eslint-disable-line

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
            {data && data.length > 0 && !loading ? (
                <div>{children}</div>
            ) : (
                <div className="flex justify-center items-center h-screen">
                    <div className="text-2xl font-bold">Loading...</div>
                </div>
            )}
        </div>
    );
};
