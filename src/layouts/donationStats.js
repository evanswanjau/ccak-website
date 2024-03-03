import { ResponsivePie } from "@nivo/pie";
import { Slide } from "react-reveal";

const chart = [
    {
        id: "cleanCooking",
        label: "cleanCooking",
        value: 40,
    },
    {
        id: "educating",
        label: "educating",
        value: 35,
    },
    {
        id: "python",
        label: "python",
        value: 10,
    },
    {
        id: "elixir",
        label: "elixir",
        value: 10,
    },
    {
        id: "stylus",
        label: "stylus",
        value: 5,
    },
];

export const DonationStats = ({data}) => {
    return (
        <section className="flex flex-col lg:flex-row text-white bg-gray-500 py-20 p-6 lg:p-32">
            <div className="lg:w-7/12 space-y-8">
                <Slide bottom>
                    <h3 className="font-bold text-white text-5xl">
                        {data?.title}
                    </h3>
                </Slide>

                <Slide bottom>
                    <p className="text-white">
                        {data?.content}
                    </p>
                </Slide>

                <div className="grid-cols-1 md:grid-cols-2 grid gap-3">
                    {data?.stats.map((stat, i) => (
                        <Slide bottom key={i}>
                            <div className="flex items-center space-x-2 space-y-4">
                                <div
                                    className={`w-5 h-5 rounded-md aspect-square mt-3 ${stat.color} `}
                                ></div>
                                <p>{stat.name}</p>
                            </div>
                        </Slide>
                    ))}
                </div>
            </div>
            <div className="hidden md:block md:w-5/12 p-5">
                <img
                    src="/ccak_logo_side.png"
                    alt=""
                    className="w-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
                <ResponsivePie
                    colors={[
                        "#BEF3C0",
                        "#AC94F1",
                        "#FFF0CA",
                        "#F9CF64",
                        "#F38FBF",
                    ]}
                    colorBy="index"
                    data={chart}
                    isInteractive={false}
                    innerRadius={0.5}
                    enableArcLinkLabels={false}
                    enableArcLabels={false}
                />
            </div>
        </section>
    );
};
