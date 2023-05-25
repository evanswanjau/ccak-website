import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./layouts/scrollToTop";

import { NavBar } from "./layouts/navBar";
import { Footer } from "./components/footer";

import { HomePage } from "./pages/home";
import { WhatWeDoPage } from "./pages/what-we-do";

import { AboutUsPage } from "./pages/who-we-are/about-us";
import { OurTeamPage } from "./pages/who-we-are/our-team";

import { CareersPage } from "./pages/get-involved/careers";
import { ConsultancyPage } from "./pages/get-involved/consultancy";
import { FundingOpportunitiesPage } from "./pages/get-involved/funding-opportunities";
import { DonatePage } from "./pages/get-involved/donate";
import { ContactUsPage } from "./pages/get-involved/contact-us";

import { PublicationsPage } from "./pages/resource-centre/publications";
import { FundingOpportunitiesRCPage } from "./pages/resource-centre/funding-opportunities";

import { PressReleasePage } from "./pages/media-centre/pressRelease";
import { NewsPage } from "./pages/media-centre/news";
import { EventsPage } from "./pages/media-centre/events";
import { ProjectsPage } from "./pages/media-centre/projects";
import { PhotoGalleryPage } from "./pages/media-centre/photoGallery";

import { EventReadMore } from "./pages/read-more/event";
import { PressReleaseReadMore } from "./pages/read-more/pressRelease";
import { NewsReadMore } from "./pages/read-more/news";
import { ProjectReadMore } from "./pages/read-more/project";
import { ConsultancyReadMore } from "./pages/read-more/consultancy";
import { CareerReadMore } from "./pages/read-more/career";
import { FundingOppportunitiesReadMore } from "./pages/read-more/funding";
import { ResearchPapersReadMore } from "./pages/read-more/research-papers";
import { AgmMaterialReadMore } from "./pages/read-more/agm-material";

import { PackagesPage } from "./pages/membership/packages";
import { OurMembersPage } from "./pages/membership/our-members";
import { RegisterPage } from "./pages/membership/register";
import { LoginPage } from "./pages/membership/login";
// import { OnboardingPage } from "./pages/membership/onboarding";

import { SocialHubHomePage } from "./pages/social-hub/home";
import { SocialHubProfilePage } from "./pages/social-hub/profile";
import { SocialHubBookmarksPage } from "./pages/social-hub/bookmarks";
import { SocialHubBillingPage } from "./pages/social-hub/billing";
import { SocialHubChangePasswordPage } from "./pages/social-hub/change-password";
import { BlogPage } from "./pages/media-centre/blog";

const viewFooter = (pathname) => {
    let footer = true;

    if (pathname.split("/")[1] === "social-hub") footer = false;
    if (pathname.split("/")[2] === "register") footer = false;
    if (pathname.split("/")[2] === "login") footer = false;
    if (pathname.split("/")[2] === "onboarding") footer = false;

    return footer;
};

const viewHeader = (pathname) => {
    let footer = true;

    if (pathname.split("/")[2] === "register") footer = false;
    if (pathname.split("/")[2] === "login") footer = false;
    if (pathname.split("/")[2] === "onboarding") footer = false;

    return footer;
};

function App() {
    return (
        <Router>
            {viewHeader(window.location.pathname) && <NavBar />}
            <ScrollToTop />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route
                    exact
                    path="/what-we-do"
                    component={WhatWeDoPage}
                ></Route>
                {/** --------------- WHO WE ARE ---------------------*/}
                <Route
                    exact
                    path="/who-we-are/about-us"
                    component={AboutUsPage}
                />
                <Route
                    exact
                    path="/who-we-are/our-team"
                    component={OurTeamPage}
                />
                {/** ---------------RESOURCE CENTRE ---------------------*/}
                <Route
                    exact
                    path="/resource-centre/publications"
                    component={PublicationsPage}
                />
                <Route
                    exact
                    path="/resource-centre/funding-opportunities"
                    component={FundingOpportunitiesRCPage}
                />
                {/** ---------------GET INVOLVED ---------------------*/}
                <Route
                    exact
                    path="/get-involved/careers"
                    component={CareersPage}
                />
                <Route
                    exact
                    path="/get-involved/consultancy"
                    component={ConsultancyPage}
                />
                <Route
                    exact
                    path="/get-involved/funding-opportunities"
                    component={FundingOpportunitiesPage}
                />
                <Route
                    exact
                    path="/get-involved/contact-us"
                    component={ContactUsPage}
                />
                <Route
                    exact
                    path="/get-involved/donate"
                    component={DonatePage}
                />
                {/** --------------- MEDIA CENTRE --------------------*/}
                <Route
                    exact
                    path="/media-centre/press-release"
                    component={PressReleasePage}
                />
                <Route exact path="/media-centre/news" component={NewsPage} />
                <Route
                    exact
                    path="/media-centre/events"
                    component={EventsPage}
                />
                <Route
                    exact
                    path="/media-centre/projects"
                    component={ProjectsPage}
                />
                <Route exact path="/media-centre/blog" component={BlogPage} />
                <Route
                    exact
                    path="/media-centre/photo-gallery"
                    component={PhotoGalleryPage}
                />
                {/** ----------------- READ MORE --------------------- */}
                <Route
                    exact
                    path="/media-centre/events/read-more/:id/:title"
                    component={EventReadMore}
                />
                <Route
                    exact
                    path="/media-centre/press-release/read-more/:id/:title"
                    component={PressReleaseReadMore}
                />
                <Route
                    exact
                    path="/media-centre/news/read-more/:id/:title"
                    component={NewsReadMore}
                />
                <Route
                    exact
                    path="/media-centre/projects/read-more/:id/:title"
                    component={ProjectReadMore}
                />
                <Route
                    exact
                    path="/get-involved/consultancy/read-more/:id/:title"
                    component={ConsultancyReadMore}
                />
                <Route
                    exact
                    path="/get-involved/careers/read-more/:id/:title"
                    component={CareerReadMore}
                />
                <Route
                    exact
                    path="/get-involved/funding-opportunities/read-more/:id/:title"
                    component={FundingOppportunitiesReadMore}
                />
                <Route
                    exact
                    path="/resource-centre/research-papers/read-more/:id/:title"
                    component={ResearchPapersReadMore}
                />
                <Route
                    exact
                    path="/resource-centre/agm-material/read-more/:id/:title"
                    component={AgmMaterialReadMore}
                />
                {/** ----------------- MEMBERSHIP --------------------- */}
                <Route
                    exact
                    path="/membership/packages"
                    component={PackagesPage}
                />
                <Route
                    exact
                    path="/membership/our-members"
                    component={OurMembersPage}
                />
                <Route
                    exact
                    path="/membership/register"
                    component={RegisterPage}
                />
                {/* <Route
                    exact
                    path="/membership/onboarding"
                    component={OnboardingPage}
                /> */}
                <Route exact path="/membership/login" component={LoginPage} />
                {/**--------------------- SOCIAL HUB ----------------------- */}
                <Route path="/social-hub/home" component={SocialHubHomePage} />
                <Route
                    path="/social-hub/profile"
                    component={SocialHubProfilePage}
                />
                <Route
                    path="/social-hub/bookmarks"
                    component={SocialHubBookmarksPage}
                />
                <Route
                    path="/social-hub/billing"
                    component={SocialHubBillingPage}
                />
                <Route
                    path="/social-hub/change-password"
                    component={SocialHubChangePasswordPage}
                />
            </Switch>
            {viewFooter(window.location.pathname) && <Footer />}
        </Router>
    );
}

export default App;
