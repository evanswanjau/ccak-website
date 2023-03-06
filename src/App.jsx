import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
//Projects Images
import ProjectImage from "./assets/home/Projects/ImageProject.png";
//Parteners
import logo from "./assets/Logo.svg";
// Affliates Logo Images

import aku from "./assets/Affliates/aku.png";
import epra from "./assets/Affliates/epra.png";

import kebs from "./assets/Affliates/kebs.png";

import kefri from "./assets/Affliates/kefri.png";
import kidri from "./assets/Affliates/kidri.png";
import nema from "./assets/Affliates/logonema.png";

//Partners Logo Images
import cca from "./assets/home/Partners/CCApartner.png";
import hivos from "./assets/home/Partners/Hivospartner.png";
import giz from "./assets/home/Partners/gizpartner.png";
import practical from "./assets/home/Partners/Practical Actionpartner.png";
import un from "./assets/home/Partners/UN Habitatpartner.png";
import snv from "./assets/home/Partners/SNVpartner.png";

//Team Members Avatars
import Avatar from "./assets/team/ImageAvatar.png";

import {
    BrowserRouter as Router,
    Route,
    Link,
    BrowserRouter,
    Routes,
    useNavigate,
} from "react-router-dom";
import Team from "./Pages/Team";
import Whatwedo from "./Pages/Whatwedo";
import Research from "./Pages/Research";
import Press from "./Pages/Press";
import EventRead from "./Pages/EventRead";
import Donate from "./Pages/Donate";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NavBar from "./Containers/navBar";
import Footer from "./Components/Footer";
//News Images
import newsThumb from "./assets/Thumbnailnews.png";
import NewsFour from "./assets/ThumbnailNewsFour.png";
import NewsThree from "./assets/ThumbnailNewsThree.png";
import NewsTwo from "./assets/ThumbnailNewsTwo.png";

//Strategic Pillars Icons
import Graduate from "./assets/VectorGraduate.png";
function App() {
    // Strategic Pillars
    const [StrategicPills] = useState([
        {
            Name: "Representation and Advocacy",
            icon: Graduate,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra massa massa ultricies mi. Lectus sit amet est placerat in egestas erat. Vel orci porta non pulvinar neque laoreet suspendisse interdum. Aliquet nibh praesent tristique magna. Libero volutpat sed cras ornare arcu dui vivamus arcu.",
        },
        {
            Name: "Representation and Advocacy",
            icon: Graduate,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra massa massa ultricies mi. Lectus sit amet est placerat in egestas erat. Vel orci porta non pulvinar neque laoreet suspendisse interdum. Aliquet nibh praesent tristique magna. Libero volutpat sed cras ornare arcu dui vivamus arcu.",
        },
        {
            Name: "Representation and Advocacy",
            icon: Graduate,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra massa massa ultricies mi. Lectus sit amet est placerat in egestas erat. Vel orci porta non pulvinar neque laoreet suspendisse interdum. Aliquet nibh praesent tristique magna. Libero volutpat sed cras ornare arcu dui vivamus arcu.",
        },
        {
            Name: "Representation and Advocacy",
            icon: Graduate,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra massa massa ultricies mi. Lectus sit amet est placerat in egestas erat. Vel orci porta non pulvinar neque laoreet suspendisse interdum. Aliquet nibh praesent tristique magna. Libero volutpat sed cras ornare arcu dui vivamus arcu.",
        },
        {
            Name: "Representation and Advocacy",
            icon: Graduate,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra massa massa ultricies mi. Lectus sit amet est placerat in egestas erat. Vel orci porta non pulvinar neque laoreet suspendisse interdum. Aliquet nibh praesent tristique magna. Libero volutpat sed cras ornare arcu dui vivamus arcu.",
        },
        {
            Name: "Representation and Advocacy",
            icon: Graduate,
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra massa massa ultricies mi. Lectus sit amet est placerat in egestas erat. Vel orci porta non pulvinar neque laoreet suspendisse interdum. Aliquet nibh praesent tristique magna. Libero volutpat sed cras ornare arcu dui vivamus arcu.",
        },
    ]);
    //Researches
    const [Researches] = useState([
        {
            Name: "Analysis of the implications of the value-added tax on vertical analysis in our region.",
            Desc: "The head of programmes will report to the Chief Executive Officer (CEO). In the meantime when the CEO position is vacant, he/she will report directly Chair of the Executive Committee of the Association.",
            Date: "7th Jan 2023",
        },
        {
            Name: "Analysis of the implications of the value-added tax on vertical analysis in our region.",
            Desc: "The head of programmes will report to the Chief Executive Officer (CEO). In the meantime when the CEO position is vacant, he/she will report directly Chair of the Executive Committee of the Association.",
            Date: "7th Jan 2023",
        },
        {
            Name: "Analysis of the implications of the value-added tax on vertical analysis in our region.",
            Desc: "The head of programmes will report to the Chief Executive Officer (CEO). In the meantime when the CEO position is vacant, he/she will report directly Chair of the Executive Committee of the Association.",
            Date: "7th Jan 2023",
        },
        {
            Name: "Analysis of the implications of the value-added tax on vertical analysis in our region.",
            Desc: "The head of programmes will report to the Chief Executive Officer (CEO). In the meantime when the CEO position is vacant, he/she will report directly Chair of the Executive Committee of the Association.",
            Date: "7th Jan 2023",
        },
        {
            Name: "Analysis of the implications of the value-added tax on vertical analysis in our region.",
            Desc: "The head of programmes will report to the Chief Executive Officer (CEO). In the meantime when the CEO position is vacant, he/she will report directly Chair of the Executive Committee of the Association.",
            Date: "7th Jan 2023",
        },
        {
            Name: "Analysis of the implications of the value-added tax on vertical analysis in our region.",
            Desc: "The head of programmes will report to the Chief Executive Officer (CEO). In the meantime when the CEO position is vacant, he/she will report directly Chair of the Executive Committee of the Association.",
            Date: "7th Jan 2023",
        },
    ]);
    //Team Members
    const [Members, SetMembers] = useState([
        {
            Name: "Executive Committee Members",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            Members: [
                {
                    Name: "John Doe",
                    Position: "Chairman",
                    Avatar: Avatar,
                },
                {
                    Name: "John Doe",
                    Position: "Chairman",
                    Avatar: Avatar,
                },
                {
                    Name: "John Doe",
                    Position: "Chairman",
                    Avatar: Avatar,
                },
                {
                    Name: "John Doe",
                    Position: "Chairman",
                    Avatar: Avatar,
                },
            ],
        },
        {
            Name: "Executive Board Members",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            Members: [
                {
                    Name: "John Doe",
                    Position: "Chairman",
                    Avatar: Avatar,
                },
                {
                    Name: "John Doe",
                    Position: "Chairman",
                    Avatar: Avatar,
                },
                {
                    Name: "John Doe",
                    Position: "Chairman",
                    Avatar: Avatar,
                },
                {
                    Name: "John Doe",
                    Position: "Chairman",
                    Avatar: Avatar,
                },
                {
                    Name: "John Doe",
                    Position: "Chairman",
                    Avatar: Avatar,
                },
                {
                    Name: "John Doe",
                    Position: "Chairman",
                    Avatar: Avatar,
                },
                {
                    Name: "John Doe",
                    Position: "Chairman",
                    Avatar: Avatar,
                },
                {
                    Name: "John Doe",
                    Position: "Chairman",
                    Avatar: Avatar,
                },
            ],
        },
        {
            Name: "Secretariat",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            Members: [
                {
                    Name: "John Doe",
                    Position: "Chairman",
                    Avatar: Avatar,
                },
                {
                    Name: "John Doe",
                    Position: "Chairman",
                    Avatar: Avatar,
                },
                {
                    Name: "John Doe",
                    Position: "Chairman",
                    Avatar: Avatar,
                },
                {
                    Name: "John Doe",
                    Position: "Chairman",
                    Avatar: Avatar,
                },
            ],
        },
    ]);
    //Blog Posts
    const [Blog, SetBlog] = useState([
        {
            Title: "Don’t destroy greenery and don’t spoil scenery",
            Date: "February 20, 2023",
            Details:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            img: newsThumb,
        },
        {
            Title: " Is climate change happening faster than expected?",
            Date: "February 20, 2023",
            Details:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            img: NewsTwo,
        },
        {
            Title: "Top 10 facts about wind farms you didn't know",
            Date: "February 20, 2023",
            Details:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            img: NewsThree,
        },
        {
            Title: "Our goal is to make water available for everyone",
            Date: "February 20, 2023",
            Details:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            img: NewsFour,
        },
    ]);
    //News
    const [news, SetNews] = useState([
        {
            Title: "Don’t destroy greenery and don’t spoil scenery",
            Date: "February 20, 2023",
            Details:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            img: newsThumb,
        },
        {
            Title: "Don’t destroy greenery and don’t spoil scenery",
            Date: "February 20, 2023",
            Details:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            img: newsThumb,
        },
        {
            Title: "Don’t destroy greenery and don’t spoil scenery",
            Date: "February 20, 2023",
            Details:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            img: newsThumb,
        },
        {
            Title: "Don’t destroy greenery and don’t spoil scenery",
            Date: "February 20, 2023",
            Details:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            img: newsThumb,
        },
        {
            Title: "Don’t destroy greenery and don’t spoil scenery",
            Date: "February 20, 2023",
            Details:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            img: newsThumb,
        },
        {
            Title: "Don’t destroy greenery and don’t spoil scenery",
            Date: "February 20, 2023",
            Details:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            img: newsThumb,
        },
        {
            Title: "Don’t destroy greenery and don’t spoil scenery",
            Date: "February 20, 2023",
            Details:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            img: newsThumb,
        },
        {
            Title: "Don’t destroy greenery and don’t spoil scenery",
            Date: "February 20, 2023",
            Details:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            img: newsThumb,
        },
    ]);
    //Parteners
    const [Parteners] = useState([
        {
            Name: "CLEAN COOKING",
            Image: cca,
        },
        {
            Name: "HIVOS",
            Image: hivos,
        },
        {
            Name: "GIZ",
            Image: giz,
        },
        {
            Name: "PRACTICAL ACTION",
            Image: practical,
        },
        {
            Name: "UN HABITAT",
            Image: un,
        },
        {
            Name: "SNV",
            Image: snv,
        },
    ]);
    //Affliates
    const [Affliates] = useState([
        {
            Name: "CLEAN COOKING",
            Image: nema,
        },
        {
            Name: "HIVOS",
            Image: kidri,
        },
        {
            Name: "GIZ",
            Image: kefri,
        },
        {
            Name: "PRACTICAL ACTION",
            Image: kebs,
        },
        {
            Name: "UN HABITAT",
            Image: epra,
        },
        {
            Name: "UN HABITAT",
            Image: aku,
        },
    ]);
    const [count, setCount] = useState(0);
    //Projects
    const [Projects, SetProjects] = useState([
        {
            title: "Mission 40K: Tree plantation",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
            img: ProjectImage,
        },
        {
            title: "Mission 40K: Tree plantation",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
            img: ProjectImage,
        },
        {
            title: "Mission 40K: Tree plantation",
            Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
            img: ProjectImage,
        },
    ]);
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
                <NavBar></NavBar>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                Projects={Projects}
                                Parteners={Parteners}
                            ></Home>
                        }
                    ></Route>
                    <Route
                        path="/who-we-are/about-us"
                        element={
                            <About
                                Parteners={Parteners}
                                Affliates={Affliates}
                                StrategicPills={StrategicPills}
                            ></About>
                        }
                    ></Route>
                    <Route
                        path="/who-we-are/our-team"
                        element={<Team Members={Members}></Team>}
                    ></Route>

                    <Route
                        path="/contact"
                        element={<Contact></Contact>}
                    ></Route>
                    <Route path="/donate" element={<Donate></Donate>}></Route>
                    <Route
                        path="/eventread"
                        element={<EventRead events={events}></EventRead>}
                    ></Route>
                    <Route
                        path="/press"
                        element={<Press news={news} Blog={Blog}></Press>}
                    ></Route>
                    <Route
                        path="/research"
                        element={<Research Researches={Researches}></Research>}
                    ></Route>

                    <Route
                        path="/whatwedo"
                        element={<Whatwedo Projects={Projects}></Whatwedo>}
                    ></Route>
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
        </div>
    );
}

export default App;
