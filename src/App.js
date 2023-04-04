import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./Containers/scrollToTop";

import { NavBar } from "./Containers/navBar";
import { Footer } from "./Components/footer";

import { HomePage } from "./Pages/home";
import { WhatWeDoPage } from "./Pages/what-we-do";

import { AboutUsPage } from "./Pages/who-we-are/about-us";
import { OurTeamPage } from "./Pages/who-we-are/our-team";

import { CareersPage } from "./Pages/get-involved/careers";
import { ConsultancyPage } from "./Pages/get-involved/consultancy";
import { FundingOpportunitiesPage } from "./Pages/get-involved/funding-opportunities";
import { DonatePage } from "./Pages/get-involved/donate";
import { ContactUsPage } from "./Pages/get-involved/contact-us";

import { ResearchPapersPage } from "./Pages/resource-centre/research-papers";
import { AgmMaterialPage } from "./Pages/resource-centre/agm-material";

import { PressReleasePage } from "./Pages/media-centre/pressRelease";
import { NewsPage } from "./Pages/media-centre/news";
import { EventsPage } from "./Pages/media-centre/events";
import { ProjectsPage } from "./Pages/media-centre/projects";
import { PhotoGalleryPage } from "./Pages/media-centre/photoGallery";

import { EventReadMore } from "./Pages/read-more/event";
import { PressReleaseReadMore } from "./Pages/read-more/pressRelease";
import { NewsReadMore } from "./Pages/read-more/news";
import { ProjectReadMore } from "./Pages/read-more/project";
import { ConsultancyReadMore } from "./Pages/read-more/consultancy";
import { CarrerReadMore } from "./Pages/read-more/career";
import { FundingOppportunitiesReadMore } from "./Pages/read-more/funding";

import { PackagesPage } from "./Pages/membership/packages";
import { OurMembersPage } from "./Pages/membership/our-members";
import { WhyJoinUsPage } from "./Pages/membership/why-join-us";

import { SocialHubHomePage } from "./Pages/social-hub/home";
import { SocialHubProfilePage } from "./Pages/social-hub/profile";
import { SocialHubBookmarksPage } from "./Pages/social-hub/bookmarks";
import { SocialHubBillingPage } from "./Pages/social-hub/billing";
import { SocialHubChangePasswordPage } from "./Pages/social-hub/change-password";

function App() {
    return (
        <Router>
            <NavBar />
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
                    path="/resource-centre/agm-material"
                    component={AgmMaterialPage}
                />
                <Route
                    exact
                    path="/resource-centre/research-papers"
                    component={ResearchPapersPage}
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
                    component={CarrerReadMore}
                />
                <Route
                    exact
                    path="/get-involved/funding-opportunities/read-more/:id/:title"
                    component={FundingOppportunitiesReadMore}
                />
                {/** ----------------- MEMBERSHIP --------------------- */}
                <Route
                    exact
                    path="/membership/why-join-us"
                    component={WhyJoinUsPage}
                />
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
            {window.location.pathname.split("/")[1] !== "social-hub" && (
                <Footer />
            )}
        </Router>
    );
}

export default App;
