import { useState } from "react";
import { Slide } from "react-reveal";
import { Member } from "../../components/member";
import { MemberModal } from "../../components/memberModal";
import { Page } from "../../layouts/page";

export const OurTeamPage = () => {
    const [member, setMember] = useState({ modal: false, member: {} });
    const [data, updateData] = useState([]);

    return (
        <Page
            title="Our Team"
            description="Our team is composed of individuals with diverse backgrounds and skill sets, united by a shared passion for excellence and a commitment to delivering high-quality work."
            page="our-team"
            data={data}
            updateData={updateData}
        >
            <div className="pt-[3.8rem] lg:pt-[6.6rem] pb-[8.6rem]">
                {member.modal && (
                    <MemberModal member={member} setMember={setMember} />
                )}
                <section className="text-center py-12">
                    <Slide bottom>
                        <h1 className="text-4xl lg:text-6xl text-gray-800 font font-semibold my-5">
                            Our Team
                        </h1>
                    </Slide>
                    <Slide bottom>
                        <p className="w-full px-5 md:w-6/12 mx-auto">
                            {data[0]?.content?.header}
                        </p>
                    </Slide>
                </section>
                {data[1]?.content.map((team) => {
                    return (
                        <section className="text-center px-6 lg:px-12">
                            <Slide bottom>
                                <h3 className="text-3xl font-semibold my-5 capitalize">
                                    {team.name}
                                </h3>
                            </Slide>
                            <div className="flex flex-row px-6 lg:px-16">
                                <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 sm:gap-10 py-10">
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
        </Page>
    );
};
