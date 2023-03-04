import React, { Component, useState } from 'react';
import HomeVid from '../assets/home/BGHomeVid.png';
import bgone from '../assets/home/BG ImageHome.png';
import { AiFillPlayCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
//Home Components
import Events from '../Components/Events';
import DonateSection from '../Components/DonateSection';
import News from '../Components/News';
import Project from '../Components/Project';
//Logo Image
import logo from '../assets/Logo.svg';
//What We Do Icons
import wwd1 from '../assets/home/WWD/Iconwwd1.png';
import wwd2 from '../assets/home/WWD/Iconwwd2.png';
import wwd3 from '../assets/home/WWD/Iconwwd3.png';
import wwd4 from '../assets/home/WWD/Iconwwd4.png';
import { ResponsivePie } from '@nivo/pie';
function Home({ Projects, Parteners }) {
	//Chart Data
	const [Chart, SetChart] = useState([
		{
			id: 'ruby',
			label: 'ruby',
			value: 40,
		},
		{
			id: 'haskell',
			label: 'haskell',
			value: 35,
		},
		{
			id: 'python',
			label: 'python',
			value: 10,
		},
		{
			id: 'elixir',
			label: 'elixir',
			value: 10,
		},
		{
			id: 'stylus',
			label: 'stylus',
			value: 5,
		},
	]);
	//Donations Statistics
	const [Statistics, SetStat] = useState([
		{
			Name: 'clean cooking',
			percentage: '40%',
			color: 'bg-[#BEF3C0]',
		},
		{
			Name: 'cleanlines program',
			percentage: '35%',
			color: 'bg-[#AC94F1]',
		},
		{
			Name: 'helping people',
			percentage: '10%',
			color: 'bg-[#FFF0CA]',
		},
		{
			Name: 'educating',
			percentage: '10%',
			color: 'bg-[#F9CF64]',
		},
		{
			Name: 'feeding the poor',
			percentage: '5%',
			color: 'bg-[#F38FBF]',
		},
	]);
	//What We Do ?
	const [WhatWedo, SetWWD] = useState([
		{
			Title: 'Impact at least 7 million women',
			Desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
			img: wwd1,
		},
		{
			Title: 'Mitigate Climate Change',
			Desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
			img: wwd2,
		},
		{
			Title: 'Improving livelihoods',
			Desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
			img: wwd3,
		},
		{
			Title: 'Preserve the environment',
			Desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
			img: wwd4,
		},
	]);

	return (
		<div className=" page relative home">
			<section
				id="HomeSection"
				className="lg:h-screen h-fit py-12  text-white overflow-hidden  "
			>
				<div className="lg:pt-24 pt-12 space-y-12 ">
					<p className="lg:text-6xl md:text-3xl text-2xl font-semibold leading-relaxed">
						Save the environment <br /> today for a better <br /> tomorrow
					</p>
					<div className="flex  space-x-4">
						<Link to={'/whatwedo'}>
							<button className="text-black px-10 py-3 bg-white rounded-sm">
								{' '}
								WHAT WE DO
							</button>
						</Link>
						<button className="flex text-xl items-center space-x-2">
							<AiFillPlayCircle className="text-2xl"></AiFillPlayCircle>
							<p className="">Play Video</p>
						</button>
					</div>
				</div>
			</section>
			<section className="min-h-screen space-y-12 w-full text-black mt-24  ">
				<div className="flex lg:flex-row flex-col h-3/4 justify-between  w-full ">
					<div className="lg:w-2/3 w-full flex   py-12 ">
						<div className="w-3/12 border-t-2 mt-2 border-black"></div>
						<div className="flex h-fit px-12 text-center flex-col justify-between items-center space-y-4">
							<div className="w-full text-start">
								<p>KNOW ABOUT US</p>
							</div>
							<p className="lg:text-6xl md:text-3xl text-3xl leading-tight font-semibold">
								Advocating the adoption of clean cooking technologies
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>
							<Link to={'/about'}>
								<button className="bg-[#329E49] px-8 py-2 rounded-sm text-white">
									LEARN MORE
								</button>
							</Link>
						</div>
					</div>
					<div className="flex lg:w-1/3    relative justify-center items-center">
						<img
							src={HomeVid}
							alt=""
						/>
						<div className="z-10 absolute  text-white text-5xl shadow-sm cursor-pointer hover:text-[#efefef] ">
							<AiFillPlayCircle></AiFillPlayCircle>
						</div>
					</div>
				</div>
				<div className="space-y-7">
					<p className="font-semibold">OUR PARTNERS</p>
					<div className="grid lg:grid-cols-6 grid-cols-3 gap-10 ">
						{Parteners.map((e) => (
							<img
								src={e.Image}
								alt=""
							/>
						))}
					</div>
				</div>
			</section>
			<section className="h-fit bg-[#EFF7F2] space-y-12 w-full text-black mt-24 overflow-hidden  ">
				<div className="flex flex-col lg:flex-row h-full  justify-between  w-full ">
					<div className="lg:w-2/3 flex py-5 ">
						<div className="w-1/12 border-t-2 mt-2 border-black"></div>
						<div className="flex h-full px-12 flex-col justify-between space-y-2">
							<p>WHAT WE DO</p>
							<p className="lg:text-xl text-xl leading-tight font-semibold">
								We care for earth, care for the coming birth
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Suspendisse varius enim in eros elementum tristique.
							</p>
							<div className="space-y-4 pl-5 border-l-2 pb-2">
								{WhatWedo.map((e) => (
									<div className="flex  space-x-4">
										<img
											src={e.img}
											alt={e.Title}
											className="aspect-square h-full mt-2"
										/>
										<div>
											<p className="text-xl font-semibold">{e.Title}</p>
											<p className="w-2/3 text-gray-700">{e.Desc}</p>
										</div>
									</div>
								))}
							</div>
							<Link>
								<button className="bg-[#329E49] px-8 py-2 rounded-sm text-white">
									LEARN MORE
								</button>
							</Link>
						</div>
					</div>
					<div className="flex p-5 lg:mb-0 mb-10 lg:w-1/3 h-full   relative justify-center items-center">
						<img
							src={HomeVid}
							alt=""
						/>
					</div>
				</div>
			</section>
			<section className="h-fit  space-y-12 w-full text-black py-12 overflow-hidden  ">
				<div className=" h-full   space-y-12  w-full ">
					<div className="lg:w-2/3 flex  py-5 ">
						<div className="lg:w-1/12 w-1/6 border-t-2 mt-2 border-black"></div>
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
			<section className="h-fit lg:flex-row flex-col flex mb-10 justify-between text-white bg-black space-y-12 w-full  py-12 overflow-hidden  ">
				<div className="lg:w-1/2 space-y-8">
					<p className="lg:text-5xl text-2xl leading-tight">
						How we spend your donations and where it goes
					</p>
					<p className="opacity-60">
						We understand that when you make a  donation, you want to know
						exactly where your money is going and we pledge to be transparent.
					</p>
					<div className="lg:grid-cols-3 justify-between grid-cols-2 grid gap-3">
						{Statistics.map((e) => (
							<div className="flex items-center space-x-2 ">
								<div
									className={`w-5 h-5 rounded-md aspect-square ${e.color} `}
								></div>
								<p>{e.percentage}</p>
								<p>{e.Name}</p>
							</div>
						))}
					</div>
				</div>
				<div className="lg:w-1/4 relative  ">
					<img
						src={logo}
						alt=""
						className=" w-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
					/>
					<ResponsivePie
						colors={['#BEF3C0', '#AC94F1', '#FFF0CA', '#F9CF64', '#F38FBF']}
						colorBy="index"
						data={Chart}
						isInteractive={false}
						innerRadius={0.5}
						enableArcLinkLabels={false}
						enableArcLabels={false}
					/>
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

export default Home;
