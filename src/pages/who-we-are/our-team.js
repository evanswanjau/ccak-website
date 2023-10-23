import { useState } from "react";
import { Slide } from "react-reveal";
import { Member } from "../../components/member";
import { MemberModal } from "../../components/memberModal";

const data = [
    {
        name: "executive board members",
        members: [
            {
                name: "daniel wanjohi",
                position: "chairperson",
                image: "our_team/executive_board_members/daniel-wanjohi.jpg",
                brief: "",
                bio: "",
            },
            {
                name: "dorothy otieno",
                position: "vice chairperson",
                image: "our_team/executive_board_members/dorothy-otieno.jpg",
                brief: "",
                bio: "",
            },
            {
                name: "reimund hoffmann",
                position: "treasurer",
                image: "our_team/executive_board_members/reimund-hoffmann.jpg",
                brief: "",
                bio: "Reimund Hoffmann is the Honorary Treasurer and Founding member of CCAK. As Treasurer, he has continuously guided the secretariat and in particular, the CEO and accountant, on financial, administrative and strategic matters. As founder member, Reimund Hoffmann was part of the core team that provided technical and administrative support to the association. At the time, the Clean Cooking Alliance, known as Global Alliance for Clean Cookstoves (GACC) then, held a regional stakeholder consultation in 2012, after which it became obvious that implementation of a Country Action Plan was not possible without a coordinating body thereby mandating GIZ and SNV to initiate the formation of an association. At this time, Hoffmann was programme manager for the GIZ program EnDev, and hence part of the respective task force. Soon after, in May 2013, Clean Cookstoves Association of Kenya was registered and held the first annual general meeting on October 1st 2013 endorsing the constitution and electing executive committee members. GACC provided initial funding which was used to employ an Executive Secretary, and give a stipend to interns who provided support. Since then, the association has attracted funding from other sources like the Dutch government, UN Habitat, WWF and GIZ. From one desk in a member’s office, the secretariat grew into a fully-fledged office housed at NextGen mall having endorsed the Strategic Plan which led to a change of name to Clean Cooking Association of Kenya. Hoffmann holds a Master’s degree in Social Sciences. While he is currently a retiree, he has been a Programme Manager in the German Development Cooperation (GIZ) for over 30 years specializing in Rural Development, Agriculture and Household Energy. He is of German descent and is married with one child. ",
            },
        ],
    },
    {
        name: "board members",
        members: [
            {
                name: "linda davis",
                position: "board member",
                image: "our_team/board_members/linda-davis.jpg",
                brief: "",
                bio: "",
            },
            {
                name: "jon leary",
                position: "board member",
                image: "our_team/board_members/jon-leary.jpg",
                brief: "",
                bio: "",
            },
            {
                name: "james kimutai",
                position: "board member",
                image: "our_team/board_members/james-kimutai.jpg",
                brief: "",
                bio: "",
            },
            {
                name: "maxwell musoka",
                position: "board member",
                image: "our_team/board_members/maxwell-musoka.jpg",
                brief: "",
                bio: "",
            },
            {
                name: "valerie ostheimer",
                position: "board member",
                image: "our_team/board_members/valerie-ostheimer.jpg",
                brief: "",
                bio: "",
            },
            {
                name: "hounsell susanne",
                position: "board member",
                image: "our_team/board_members/hounsell-susanne.jpg",
                brief: "",
                bio: "",
            },
        ],
    },
    {
        name: "secretariat",
        members: [
            {
                name: "simon kiragu",
                position: "programe manager",
                image: "our_team/secretariat/simon-kiragu.jpg",
                brief: "",
                bio: "Simon Kiragu is the Programme Manager for the Clean Cookstoves Association of Kenya (CCAK). He formerly served as a Center Manager at the AJIRA Digital Program in the Ministry of ICT and Youth Affairs. A social advocate, Simon has served strategic and advocacy roles in sustainable development towards global issues such as sustainable energy, climate change, youth leadership, gig & freelance economy and social-economic empowerment at Women Entrepreneurship in Renewables (wPOWER), SNV, Integral Advisory and Barefoot Power. Simon holds an MBA in Project Management, an Energy Engineering Degree and Young Leader in Energy Access Awardee (awarded by the E.U) motivated by a strong sense of duty to impact society positively.",
            },
            {
                name: "philomena mitalo",
                position: "program officer",
                image: "our_team/secretariat/philomena-mitalo.jpg",
                brief: "",
                bio: "Ms. Philomena Mitalo is a business management professional with considerable experience in administration, procurement, human resource and project management. She holds a Master of Business Administration Degree from Mahatma Gandhi University – India  and is a certified PRINCE - 2 practitioner with experience working in both governmental and non-governmental sector since 2017. She is also a Certified Human Resource Professional. She joined CCAK in 2019 as an Operations Officer, she has understood the necessary policy, legal and regulatory frameworks and ensures adherence to the existing policies and procedures. She develops operating plans and objectives commensurate with organizational goals and ensures regulations are understood and implemented. As a program Officer she supports in sector research, innovation, project management and administration, grant proposal and fund raising, sustainability of associations’ operations through resolution to technical clean cooking sector issues as well as comprehensive sector monitoring and evaluation. While out of office Ms. Philomena likes exercising and healthcare, cooking and baking!",
            },
            {
                name: "benjamin bosire",
                position: "finance officer",
                image: "our_team/secretariat/benjamin-bosire.jpg",
                brief: "",
                bio: "",
            },
            {
                name: "fredrick eteye",
                position: "programs assistant",
                image: "our_team/secretariat/fredrick-eteye.jpg",
                brief: "",
                bio: "After graduating in Renewable Energy Technology and Management from JOOUST–Kenya, Fredrick has been engaged in both private and public energy sector players. Currently working at the Clean Cooking Association of Kenya, (CCAK) he supports the Programs Department to ensure that resolutions are implemented. He is passionate about becoming an individual progressing on towards excellence in offering needful services to the community.",
            },
            {
                name: "lynn ngatia",
                position: "communications officer",
                image: "our_team/secretariat/lynn-ngatia.jpg",
                brief: "",
                bio: "Passionate about effective communication, I'm Lynn Wairimu Ngatia—a dynamic professional with a strong background in Communications and Public Relations. Holding a degree in Communications and Public Relations from Moi University, I've mastered crafting compelling messages and building connections with diverse audiences. My expertise extends to digital marketing and content creation, leveraging platforms like Instagram, TikTok, Facebook, Twitter, and LinkedIn for engaging campaigns. I'm also proficient in software like MS Office for tasks like data analysis and reporting, thriving in fast-paced environments. As a natural communicator, I excel in persuasion and engagement, while my creative problem-solving abilities drive successful PR strategies. My experience combines strong communication skills with graphic design proficiency to create impactful content. My role at CCAK seamlessly integrates with my expertise and aspirations, including updating social media messages, maintaining the website and YouTube channel, developing scripts for appearances, contributing to newsletters and bulletins, crafting policy briefs and press releases, capturing event media, and managing news items and meetings. With unwavering dedication to ethical and quality standards, I'm excited to leverage my communication passion and skills for positive results at CCAK.",
            },
            {
                name: "christine muinde",
                position: "office assistant",
                image: "our_team/secretariat/christine-muinde.jpg",
                brief: "",
                bio: "",
            },
            {
                name: "ruth wambui",
                position: "membership officer",
                image: "our_team/secretariat/ruth-wambui.jpg",
                brief: "",
                bio: (
                    <p>
                        I am passionate and dedicated to accelerating
                        sustainable development in the region by supporting
                        organizations and individuals that champion, promote and
                        provide sustainable solutions to create tangible impact
                        within communities. I have working experience in the
                        renewable energy, clean cooking, sustainable agriculture
                        and government sectors - having contributed to
                        stakeholder & media engagement, partnerships, strategic,
                        corporate & advocacy communications and public
                        relations. <br/><br/>I am an advocate for youth and women
                        empowerment initiatives. My goal is to create a more
                        equitable society where everyone has the opportunity to
                        thrive by championing poverty alleviation through
                        quality education, clean energy access, food security,
                        and gender equity.
                    </p>
                ),
            },
        ],
    },
];

export const OurTeamPage = () => {
    const [member, setMember] = useState({ modal: false, member: {} });

    return (
        <div className="pt-[3.8rem] lg:pt-[6.6rem]">
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
    );
};
