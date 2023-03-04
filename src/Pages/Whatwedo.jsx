import { Link } from 'react-router-dom';
import { useState } from 'react';
import ImageWWD from '../assets/WWD/ImageWWD.png';
import { AiFillPlayCircle } from 'react-icons/ai';
import DonateSection from '../Components/DonateSection';
import Project from '../Components/Project';
import News from '../Components/News';
import Events from '../Components/Events';
//What We do ? Icons
import wwd1 from '../assets/home/WWD/Iconwwd1.png';
import wwd2 from '../assets/home/WWD/Iconwwd2.png';
import wwd3 from '../assets/home/WWD/Iconwwd3.png';
import wwd4 from '../assets/home/WWD/Iconwwd4.png';
import wwd5 from '../assets/home/WWD/Iconwwd5.png';
import wwd6 from '../assets/home/WWD/Iconwwd6.png';

function Whatwedo({ Projects }) {
	//What We Do ?
	const [WhatWedo, SetWWD] = useState([
		{
			Title: 'Build healthy cities',
			Desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
			img: wwd1,
		},
		{
			Title: 'Protect land and water',
			Desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
			img: wwd3,
		},
		{
			Title: 'Tree plantation',
			Desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
			img: wwd2,
		},
		{
			Title: 'Water sustainability',
			Desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
			img: wwd5,
		},
		{
			Title: 'Animal safety',
			Desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
			img: wwd4,
		},
		{
			Title: 'Biodiversity',
			Desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
			img: wwd6,
		},
	]);
	return (
		<div className="page">
			<section className="h-fit space-y-12 w-full text-black mt-24 overflow-hidden  ">
				<div className="flex lg:flex-row space-y-6 lg:space-y-0 flex-col h-3/4  justify-between lg:items-start items-center  w-full ">
					<div className="lg:w-2/3 w-full flex  ">
						<div className="lg:w-3/12 w-6/12 border-t-2 mt-3 border-black"></div>
						<div className="flex  text-xl h-full px-12 flex-col space-y-6">
							<p className="font-semibold">What we do</p>
							<p className="lg:text-6xl text-4xl leading-tight font-semibold">
								We are working worldwide{' '}
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Suspendisse varius enim in eros elementum tristique. Duis
								cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
								commodo diam libero vitae erat.
							</p>
						</div>
					</div>
					<div className="flex lg:w-1/3 h-full   relative justify-center items-center">
						<img
							src={ImageWWD}
							alt=""
							className=""
						/>
					</div>
				</div>
			</section>
			<section className="h-fit bg-[#EFF7F2] space-y-12 w-full text-black mt-24 overflow-hidden  ">
				<div className="flex h-full  justify-between  w-full ">
					<div className="flex py-5 w-full ">
						<div className="flex py-12 h-fit px-12 flex-col  justify-between space-y-8 w-full ">
							<p className="lg:text-5xl text-3xl leading-tight  font-semibold">
								What we do for the environment{' '}
							</p>
							<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full justify-between   pb-2">
								{WhatWedo.map((e) => (
									<div className="flex  space-x-4">
										<img
											src={e.img}
											alt={e.Title}
											className="aspect-square h-5 mt-2"
										/>
										<div>
											<p className="text-xl font-semibold">{e.Title}</p>
											<p className="w-2/3 text-gray-700">{e.Desc}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="h-fit  space-y-12 w-full text-black py-12 overflow-hidden  ">
				<div className=" h-full   space-y-12  w-full ">
					<div className="lg:w-2/3 flex  py-5 ">
						<div className="w-1/12 border-t-2 mt-2 border-black"></div>
						<div className="flex  h-full px-12 flex-col justify-between space-y-2">
							<p>WHAT WE DO</p>
							<p className="lg:text-5xl text-2xl leading-tight font-semibold">
								We care for earth, care for the coming birth
							</p>
						</div>
					</div>
					<div className="flex lg:flex-row flex-col justify-between w-full h-2/3 lg:space-x-12 lg:space-y-0 space-y-12">
						{Projects.map((e) => (
							<Project
								title={e.title}
								Desc={e.Desc}
								img={e.img}
							></Project>
						))}
					</div>
				</div>
			</section>
			<section className="h-fit mb-10 flex  justify-between   space-y-12 w-full  py-12  ">
				<DonateSection></DonateSection>
			</section>
			<section className="h-fit space-y-12  mb-10 justify-between   w-full   overflow-hidden  ">
				<div className="flex items-center">
					<p className="lg:w-1/6 w-1/2 lg:text-3xl text-2xl font-semibold">
						Read Our News
					</p>
					<div className="border-t  lg:w-5/6 w-1/2 mt-2"></div>
				</div>
				<News></News>
			</section>
			<section className="h-fit flex mb-10 justify-between   w-full   overflow-hidden  ">
				<Events></Events>
			</section>
		</div>
	);
}

export default Whatwedo;
