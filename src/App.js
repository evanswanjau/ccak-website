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
                {/* <Route
                        exact path="/media-centre/events/read-more/:id/:title"
                        component={EventReadMore }
                    /> */}
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;