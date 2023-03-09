import { useState } from "react";
import { Slide } from "react-reveal";
import { Member } from "../../Components/member";
import { MemberModal } from "../../Components/memberModal";

const data = [
    {
        name: "executive committee members",
        members: [
            {
                name: "jechoniah kitala",
                position: "chairman",
                image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
                name: "dorothy otieno",
                position: "vice chairperson",
                image: "http://localhost:5173/src/assets/team/ImageAvatar.png",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
                name: "reimund hoffmann",
                position: "treasurer",
                image: "http://localhost:5173/src/assets/team/ImageAvatar.png",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
                name: "david njugi",
                position: "chairman",
                image: "http://localhost:5173/src/assets/team/ImageAvatar.png",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
        ],
    },
    {
        name: "executive board members",
        members: [
            {
                name: "jechoniah kitala",
                position: "chairman",
                image: "http://localhost:5173/src/assets/team/ImageAvatar.png",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
                name: "dorothy otieno",
                position: "vice chairperson",
                image: "http://localhost:5173/src/assets/team/ImageAvatar.png",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
                name: "reimund hoffmann",
                position: "treasurer",
                image: "http://localhost:5173/src/assets/team/ImageAvatar.png",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
                name: "david njugi",
                position: "chairman",
                image: "http://localhost:5173/src/assets/team/ImageAvatar.png",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
                name: "jechoniah kitala",
                position: "chairman",
                image: "http://localhost:5173/src/assets/team/ImageAvatar.png",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
                name: "dorothy otieno",
                position: "vice chairperson",
                image: "http://localhost:5173/src/assets/team/ImageAvatar.png",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
        ],
    },
    {
        name: "secretariat",
        members: [
            {
                name: "jechoniah kitala",
                position: "chairman",
                image: "http://localhost:5173/src/assets/team/ImageAvatar.png",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
                name: "dorothy otieno",
                position: "vice chairperson",
                image: "http://localhost:5173/src/assets/team/ImageAvatar.png",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
                name: "reimund hoffmann",
                position: "treasurer",
                image: "http://localhost:5173/src/assets/team/ImageAvatar.png",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
                name: "david njugi",
                position: "chairman",
                image: "http://localhost:5173/src/assets/team/ImageAvatar.png",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
                name: "david njugi",
                position: "chairman",
                image: "http://localhost:5173/src/assets/team/ImageAvatar.png",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
        ],
    },
];

export const OurTeam = () => {
    const [member, setMember] = useState({ modal: false, member: {} });

    return (
        <div>
            {member.modal && (
                <MemberModal member={member} setMember={setMember} />
            )}
            <section className="text-center py-12">
                <Slide bottom>
                    <h1 className="text-4xl font-semibold my-5">Our Team</h1>
                </Slide>
                <Slide bottom>
                    <p className="w-full px-5 md:w-6/12 mx-auto">
                        Our team is composed of individuals with diverse
                        backgrounds and skill sets, united by a shared passion
                        for excellence and a commitment to delivering
                        high-quality work.
                    </p>
                </Slide>
            </section>
            {data.map((team) => {
                return (
                    <section className="text-center px-6 lg:px-12">
                        <Slide bottom>
                            <h3 className="text-4xl font-semibold my-5 capitalize">
                                {team.name}
                            </h3>
                        </Slide>
                        <div className="flex flex-row px-6 lg:px-16">
                            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-10 py-10">
                                {team.members.map((member) => {
                                    return (
                                        <Member
                                            data={member}
                                            setMember={setMember}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                );
            })}
        </div>
    );
};
