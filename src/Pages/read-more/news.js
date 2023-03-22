import { News } from "../../Components/news";
import { ReadMoreHeader } from "../../Components/readMoreHeader";
import { Fade } from "react-reveal";
import { SubFooter } from "../../Containers/subFooter";

const data = {
    id: 1,
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
    category: "news",
    published: "2023-03-08",
};

const recentData = [
    {
        id: 1,
        category: "news",
        title: "Don’t destroy greenery and don’t spoil scenery",
        published: "2023-03-08",
        excerpt: "Lorem ipsum dolor sit amet, conser adipiscing elit...",
        image: "news/news_default.jpg",
        url: "1/dont-destroy-greenery-and-dont-spoil-scenery",
    },
    {
        id: 2,
        category: "news",
        title: "Don’t destroy greenery and don’t spoil scenery",
        published: "2023-03-08",
        excerpt: "Lorem ipsum dolor sit amet, conser adipiscing elit...",
        image: "news/news_default.jpg",
        url: "2/dont-destroy-greenery-and-dont-spoil-scenery",
    },
    {
        id: 3,
        category: "news",
        title: "Don’t destroy greenery and don’t spoil scenery",
        published: "2023-03-08",
        excerpt: "Lorem ipsum dolor sit amet, conser adipiscing elit...",
        image: "news/news_default.jpg",
        url: "3/dont-destroy-greenery-and-dont-spoil-scenery",
    },
    {
        id: 4,
        category: "news",
        title: "Don’t destroy greenery and don’t spoil scenery",
        published: "2023-03-08",
        excerpt: "Lorem ipsum dolor sit amet, conser adipiscing elit...",
        image: "news/news_default.jpg",
        url: "4/dont-destroy-greenery-and-dont-spoil-scenery",
    },
];

export const NewsReadMore = () => {
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
                            <h2 className="w-full text-xl text-black font-bold py-5">
                                Recent News
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
