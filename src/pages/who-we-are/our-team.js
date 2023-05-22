import { useState } from "react";
import { Slide } from "react-reveal";
import { Member } from "../../components/member";
import { MemberModal } from "../../components/memberModal";

const data = [
    {
        name: "executive committee members",
        members: [
            {
                name: "jechoniah kitala",
                position: "chairman",
                image: "our_team/executive_commitee/jechoniah_kitala.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
                name: "dorothy otieno",
                position: "vice chairperson",
                image: "our_team/executive_commitee/dorothy_otieno.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
                name: "reimund hoffmann",
                position: "treasurer",
                image: "our_team/executive_commitee/reimund_hoffmann.png",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
                name: "david njugi",
                position: "CEO",
                image: "our_team/executive_commitee/david_njugi.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
        ],
    },
    {
        name: "executive board members",
        members: [
            {
                name: "francis akumu",
                position: "board member",
                image: "our_team/executive_board/francis_akumu.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
                name: "daniel wanjohi",
                position: "board member",
                image: "our_team/executive_board/daniel_wanjohi.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
                name: "scott otieno",
                position: "board member",
                image: "our_team/executive_board/scott_otieno.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
                name: "susanne hounsell",
                position: "board member",
                image: "our_team/executive_board/susanne_hounsell.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
                name: "tom morton",
                position: "board member",
                image: "our_team/executive_board/tom_morton.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
                name: "anna ingwe",
                position: "board member",
                image: "our_team/executive_board/anna_ingwe.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
        ],
    },
    {
        name: "secretariat",
        members: [
            {
                name: "mariam karanja",
                position: "programme manager",
                image: "our_team/secretariat/mariam_karanja.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
                name: "philomena mitalo",
                position: "operations office",
                image: "our_team/secretariat/philomena_mitalo.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
                name: "benjamin bosire",
                position: "finance officer",
                image: "our_team/secretariat/benjamin_bosire.jpg",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
                name: "philip dinga",
                position: "program officer",
                image: "our_team/secretariat/philip_dinga.png",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
                name: "brian murumba",
                position: "communications officer",
                image: "our_team/secretariat/brian_murumba.png",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
        ],
    },
];

export const OurTeamPage = () => {
    const [member, setMember] = useState({ modal: false, member: {} });

    return (
        <div className="pt-[4rem] lg:pt-[8.2rem]">
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
