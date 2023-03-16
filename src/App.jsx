import { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
; 

import Footer from "./Components/Footer";

//Strategic Pillars Icons
import { NavBar } from "./Containers/navBar";

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
// import { EventReadMore } from "./Pages/read-more/event";

function App() {
    //Events
    const [events] = useState([
        {
            Day: "28",
            Address: "8 Brewery Drive, Hudson, NH 03051, USA",
            Month: "SEP",
            Time: "September 3, 2021 8:30 AM",
            title: "Say  no to plastic usage and save the planet",
        },
        {
            Day: "28",
            Month: "SEP",
            Time: "September 3, 2021 8:30 AM",

            Address: "8 Brewery Drive, Hudson, NH 03051, USA",
            title: "Say no to plastic usage and save the planet",
        },
    ]);
    return (
        <div className=" app relative">
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/what-we-do" element={<WhatWeDoPage />} />
                    /** --------------- WHO WE ARE ---------------------*/
                    <Route
                        path="/who-we-are/about-us"
                        element={<AboutUsPage />}
                    />
                    <Route
                        path="/who-we-are/our-team"
                        element={<OurTeamPage />}
                    />
                    /** ---------------RESOURCE CENTRE ---------------------*/
                    <Route
                        path="/resource-centre/agm-material"
                        element={<AgmMaterialPage />}
                    />
                    <Route
                        path="/resource-centre/research-papers"
                        element={<ResearchPapersPage />}
                    />
                    /** ---------------GET INVOLVED ---------------------*/
                    <Route
                        path="/get-involved/careers"
                        element={<CareersPage />}
                    />
                    <Route
                        path="/get-involved/consultancy"
                        element={<ConsultancyPage />}
                    />
                    <Route
                        path="/get-involved/funding-opportunities"
                        element={<FundingOpportunitiesPage />}
                    />
                    <Route
                        path="/get-involved/contact-us"
                        element={<ContactUsPage />}
                    />
                    <Route
                        path="/get-involved/donate"
                        element={<DonatePage />}
                    />
                    /** --------------- MEDIA CENTRE --------------------*/
                    <Route
                        path="/media-centre/press-release"
                        element={<PressReleasePage />}
                    />
                    <Route path="/media-centre/news" element={<NewsPage />} />
                    <Route
                        path="/media-centre/events"
                        element={<EventsPage />}
                    />
                    <Route
                        path="/media-centre/projects"
                        element={<ProjectsPage />}
                    />
                    <Route
                        path="/media-centre/photo-gallery"
                        element={<PhotoGalleryPage />}
                    />
                    /** ----------------- READ MORE --------------------- */
                    {/* <Route
                        path="/media-centre/events/read-more/:id/:title"
                        element={<EventReadMore />}
                    /> */}
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
