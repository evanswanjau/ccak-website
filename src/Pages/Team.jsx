import { useState } from 'react';
import Avatar from '../assets/team/ImageAvatar.png';
import DonateSection from '../Components/DonateSection';
function Team() {
	const [Members, SetMembers] = useState([
		{
			Name: 'Executive Committee Members',
			Desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
			Members: [
				{
					Name: 'John Doe',
					Position: 'Chairman',
					Avatar: Avatar,
				},
				{
					Name: 'John Doe',
					Position: 'Chairman',
					Avatar: Avatar,
				},
				{
					Name: 'John Doe',
					Position: 'Chairman',
					Avatar: Avatar,
				},
				{
					Name: 'John Doe',
					Position: 'Chairman',
					Avatar: Avatar,
				},
			],
		},
		{
			Name: 'Executive Board Members',
			Desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
			Members: [
				{
					Name: 'John Doe',
					Position: 'Chairman',
					Avatar: Avatar,
				},
				{
					Name: 'John Doe',
					Position: 'Chairman',
					Avatar: Avatar,
				},
				{
					Name: 'John Doe',
					Position: 'Chairman',
					Avatar: Avatar,
				},
				{
					Name: 'John Doe',
					Position: 'Chairman',
					Avatar: Avatar,
				},
				{
					Name: 'John Doe',
					Position: 'Chairman',
					Avatar: Avatar,
				},
				{
					Name: 'John Doe',
					Position: 'Chairman',
					Avatar: Avatar,
				},
				{
					Name: 'John Doe',
					Position: 'Chairman',
					Avatar: Avatar,
				},
				{
					Name: 'John Doe',
					Position: 'Chairman',
					Avatar: Avatar,
				},
			],
		},
		{
			Name: 'Secretariat',
			Desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
			Members: [
				{
					Name: 'John Doe',
					Position: 'Chairman',
					Avatar: Avatar,
				},
				{
					Name: 'John Doe',
					Position: 'Chairman',
					Avatar: Avatar,
				},
				{
					Name: 'John Doe',
					Position: 'Chairman',
					Avatar: Avatar,
				},
				{
					Name: 'John Doe',
					Position: 'Chairman',
					Avatar: Avatar,
				},
			],
		},
	]);

	return (
		<div className="page">
			{Members.map((m) => (
				<section className="h-fit mb-10      space-y-12 w-full  py-12  ">
					<p className="text-center text-4xl font-bold">{m.Name}</p>
					<p className="text-center text opacity-60  w-2/6 mx-auto">{m.Desc}</p>
					<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  justify-center gap-20">
						{m.Members.map((e) => (
							<div className="space-y-5 mx-auto">
								<img
									src={e.Avatar}
									alt=""
								/>
								<div className="text-center">
									<p className="text-xl font-semibold">{e.Name}</p>
									<p>{e.Position}</p>
								</div>
							</div>
						))}
					</div>
				</section>
			))}

			<section className="h-fit mb-10 flex  justify-between   space-y-12 w-full  py-12  ">
				<DonateSection></DonateSection>
			</section>
		</div>
	);
}

export default Team;
