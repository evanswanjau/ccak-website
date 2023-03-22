import { News } from "../../Components/news";
import { ReadMoreHeader } from "../../Components/readMoreHeader";
import { Slide, Fade } from "react-reveal";
import { UpcomingEvents } from "../../Containers/upcomingEvents";
import { SubFooter } from "../../Containers/subFooter";

const data = {
    category: "press-release",
    title: "Don’t destroy greenery and don’t spoil scenery",
    excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    content: (
        <div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <br />
            <p>
                Diam ut venenatis tellus in metus vulputate eu scelerisque.
                Donec pretium vulputate sapien nec sagittis aliquam malesuada
                bibendum. Ac tincidunt vitae semper quis lectus nulla. Nunc sed
                blandit libero volutpat sed. Congue mauris rhoncus aenean vel
                elit scelerisque mauris pellentesque. Aenean et tortor at risus
                viverra adipiscing at in tellus. Enim nec dui nunc mattis enim
                ut tellus elementum. Imperdiet nulla malesuada pellentesque elit
                eget. Et sollicitudin ac orci phasellus egestas tellus rutrum.
                Nec nam aliquam sem et tortor consequat id porta.
            </p>
            <br />

            <p>
                Nibh mauris cursus mattis molestie a iaculis. Adipiscing elit ut
                aliquam purus sit. Nulla porttitor massa id neque aliquam
                vestibulum. Elit duis tristique sollicitudin nibh sit. Nisl nunc
                mi ipsum faucibus. Quis vel eros donec ac odio tempor. Gravida
                in fermentum et sollicitudin. Aliquet porttitor lacus luctus
                accumsan tortor posuere ac ut. Porttitor rhoncus dolor purus non
                enim praesent elementum facilisis leo. Amet cursus sit amet
                dictum.
            </p>
        </div>
    ),
    event: "physical",
    venue_link: "https://goo.gl/maps/pwhgWAdkxCALwEZV6",
    online_link: "https://zoom.us/j/5551112222",
    location: "Mombasa Road",
    venue: "CCAK Offices",
    date: "2023-04-01",
    start_time: "10:00",
    end_time: "17:00",
};

const recentData = [
    {
        id: 1,
        category: "press-release",
        title: "Don’t destroy greenery and don’t spoil scenery",
        published: "February 20, 2023",
        excerpt: "Lorem ipsum dolor sit amet, conser adipiscing elit...",
        image: "press_release/press_release_default.jpg",
        url: "1/dont-destroy-greenery-and-dont-spoil-scenery",
    },
    {
        id: 2,
        category: "press-release",
        title: "Don’t destroy greenery and don’t spoil scenery",
        published: "February 20, 2023",
        excerpt: "Lorem ipsum dolor sit amet, conser adipiscing elit...",
        image: "press_release/press_release_default.jpg",
        url: "1/dont-destroy-greenery-and-dont-spoil-scenery",
    },
    {
        id: 3,
        category: "press-release",
        title: "Don’t destroy greenery and don’t spoil scenery",
        published: "February 20, 2023",
        excerpt: "Lorem ipsum dolor sit amet, conser adipiscing elit...",
        image: "press_release/press_release_default.jpg",
        url: "1/dont-destroy-greenery-and-dont-spoil-scenery",
    },
];

export const PressReleaseReadMore = () => {
    return (
        <div className="pt-[4rem] lg:pt-[8.2rem]">
            <ReadMoreHeader data={data} />
            <section className="flex flex-col md:flex-row px-6 lg:px-16">
                <div className="md:w-9/12 py-10">
                    <p>{data.content}</p>
                </div>
                <div className="md:w-4/12 pt-10 lg:px-10">
                    <div className="py-3">
                        <Fade top>
                            <h2 className="w-full text-xl text-black font-bold py-3">
                                Recent Press Release
                            </h2>
                        </Fade>
                        <div className="grid grid-cols-1 gap-y-6">
                            {recentData.map((item) => {
                                return <News data={item} />;
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-10">
                <SubFooter />
            </section>
        </div>
    );
};
