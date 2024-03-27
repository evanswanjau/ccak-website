import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./layouts/scrollToTop";

import { HomePage } from "./pages/home";
import { WhatWeDoPage } from "./pages/what-we-do/what-we-do";
import { ProjectsPage } from "./pages/what-we-do/projects";

import { AboutUsPage } from "./pages/who-we-are/about-us";
import { OurTeamPage } from "./pages/who-we-are/our-team";

import { CareersPage } from "./pages/get-involved/careers";
import { ConsultancyPage } from "./pages/get-involved/consultancy";
import { FundingOpportunitiesPage } from "./pages/get-involved/funding-opportunities";
import { DonatePage } from "./pages/get-involved/donate";
import { ContactUsPage } from "./pages/get-involved/contact-us";

import { InternalPublicationsPage } from "./pages/resource-centre/internal-publications";
import { ExternalPublicationsPage } from "./pages/resource-centre/external-publications";
import { NewslettersPage } from "./pages/resource-centre/newsletters";

import { PressReleasePage } from "./pages/media-centre/pressRelease";
import { NewsPage } from "./pages/media-centre/news";
import { EventsPage } from "./pages/media-centre/events";
import { PhotoGalleryPage } from "./pages/media-centre/photoGallery";

import { EventReadMore } from "./pages/read-more/event";
import { PressReleaseReadMore } from "./pages/read-more/pressRelease";
import { NewsReadMore } from "./pages/read-more/news";
import { BlogReadMore } from "./pages/read-more/blog";
import { ConsultancyReadMore } from "./pages/read-more/consultancy";
import { CareerReadMore } from "./pages/read-more/career";
import { FundingOppportunitiesReadMore } from "./pages/read-more/funding";
import { InternalPublicationReadMore } from "./pages/read-more/internal-publication";
import { ExternalPublicationReadMore } from "./pages/read-more/external-publication";
import { NewslettersReadMore } from "./pages/read-more/newsletters";
import { ProjectReadMore } from "./pages/read-more/project";
import { PhotoGalleryReadMore } from "./pages/read-more/photo-gallery";

import { PackagesPage } from "./pages/membership/packages";
import { OurMembersPage } from "./pages/membership/our-members";
import { RegisterPage } from "./pages/membership/register";
import { LoginPage } from "./pages/membership/login";
import { OnboardingPage } from "./pages/membership/onboarding";
import { ForgotPasswordPage } from "./pages/membership/forgot-password";
import { ResetPasswordPage } from "./pages/membership/reset-password";

import { SocialHubHomePage } from "./pages/social-hub";
import { MyAccountProfilePage } from "./pages/my-account/profile";
import { MyAccountBookmarksPage } from "./pages/my-account/bookmarks";
import { MyAccountBillingPage } from "./pages/my-account/billing";
import { MyAccountChangePasswordPage } from "./pages/my-account/change-password";
import { BlogPage } from "./pages/media-centre/blog";
import { CheckoutInvoice } from "./pages/checkout/checkout";
import { ActivateEmail } from "./pages/membership/activate";
import { PrivacyPolicyPage } from "./pages/legal/privacy-policy";
import { TermsAndConditionsPage } from "./pages/legal/terms-and-conditions";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route
                    exact
                    path="/what-we-do"
                    component={WhatWeDoPage}
                ></Route>
                <Route
                    exact
                    path="/what-we-do/projects"
                    component={ProjectsPage}
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
                    path="/resource-centre/external-publications"
                    component={ExternalPublicationsPage}
                />
                <Route
                    exact
                    path="/resource-centre/internal-publications"
                    component={InternalPublicationsPage}
                />
                <Route
                    exact
                    path="/resource-centre/newsletters"
                    component={NewslettersPage}
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
                    path="/media-centre/blog/read-more/:id/:title"
                    component={BlogReadMore}
                />
                <Route
                    exact
                    path="/media-centre/photo-gallery/read-more/:id/:title"
                    component={PhotoGalleryReadMore}
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
                    path="/resource-centre/newsletters/read-more/:id/:title"
                    component={NewslettersReadMore}
                />
                <Route
                    exact
                    path="/resource-centre/internal-publications/read-more/:id/:title"
                    component={InternalPublicationReadMore}
                />
                <Route
                    exact
                    path="/resource-centre/external-publications/read-more/:id/:title"
                    component={ExternalPublicationReadMore}
                />
                <Route
                    exact
                    path="/what-we-do/projects/read-more/:id/:title"
                    component={ProjectReadMore}
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
                <Route
                    exact
                    path="/membership/onboarding"
                    component={OnboardingPage}
                />
                <Route exact path="/membership/login" component={LoginPage} />
                <Route
                    exact
                    path="/membership/forgot-password"
                    component={ForgotPasswordPage}
                />
                <Route
                    path="/membership/reset-password/:token"
                    component={ResetPasswordPage}
                />
                <Route
                    exact
                    path="/membership/email/activate/:token"
                    component={ActivateEmail}
                />
                {/**--------------------- SOCIAL HUB ----------------------- */}
                <Route path="/social-hub" component={SocialHubHomePage} />
                <Route
                    path="/my-account/profile"
                    component={MyAccountProfilePage}
                />
                <Route
                    path="/my-account/bookmarks"
                    component={MyAccountBookmarksPage}
                />
                <Route
                    path="/my-account/billing"
                    component={MyAccountBillingPage}
                />
                <Route
                    path="/my-account/change-password"
                    component={MyAccountChangePasswordPage}
                />

                {/**--------------------- INVOICE ----------------------- */}

                <Route
                    path="/checkout/invoice/:id/:no/:type"
                    component={CheckoutInvoice}
                />

                {/**--------------------- LEGAL ----------------------- */}
                <Route
                    path="/legal/privacy-policy"
                    component={PrivacyPolicyPage}
                />
                <Route
                    path="/legal/terms-and-conditions"
                    component={TermsAndConditionsPage}
                />
            </Switch>
        </Router>
    );
}

export default App;
