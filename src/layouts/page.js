import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";

export const Page = ({ title, description, image, children }) => {
    useEffect(() => {
        ReactGA.initialize(process.env.REACT_APP_API_URL);
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

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
            {children}
        </div>
    );
};
