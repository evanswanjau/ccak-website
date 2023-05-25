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

const statistics = [
    {
        name: "Representation and advocacy",
        percentage: "40%",
        color: "bg-[#BEF3C0]",
    },
    {
        name: "Membership and member oriented services",
        percentage: "35%",
        color: "bg-[#AC94F1]",
    },
    {
        name: "Standards and technical issues",
        percentage: "10%",
        color: "bg-[#FFF0CA]",
    },
    {
        name: "Knowledge and information management",
        percentage: "10%",
        color: "bg-[#F9CF64]",
    },
    {
        name: "Institution strengthening and resourcing",
        percentage: "5%",
        color: "bg-[#F38FBF]",
    },
];

export const DonationStats = () => {
    return (
        <section className="flex flex-col lg:flex-row text-white bg-black py-20 p-6 lg:p-16">
            <div className="lg:w-7/12 space-y-8">
                <Slide bottom>
                    <h3 className="text-5xl">
                        How we spend your donations and where it goes
                    </h3>
                </Slide>

                <Slide bottom>
                    <p className="text-gray-400">
                        We understand that when you make a  donation, you want
                        to know exactly where your money is going and we pledge
                        to be transparent.
                    </p>
                </Slide>

                <div className="grid-cols-1 md:grid-cols-2 grid gap-3">
                    {statistics.map((stat, i) => (
                        <Slide bottom key={i}>
                            <div className="flex items-center space-x-2 ">
                                <div
                                    className={`w-5 h-5 rounded-md aspect-square ${stat.color} `}
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
