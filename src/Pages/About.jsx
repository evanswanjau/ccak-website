import DonateSection from '../Components/DonateSection';
import News from '../Components/News';
import Events from '../Components/Events';
import { AiFillPlayCircle } from 'react-icons/ai';
// Images
import ImageWWD from '../assets/WWD/ImageWWD.png';
import VidThumb from '../assets/background image 1.png';
//Cooking Image
import Imagecooking from '../assets/Imagecooking.png';
//Strategic Pillars Icons
import Graduate from '../assets/VectorGraduate.png';
import { useState } from 'react';
function About({ Parteners, Affliates }) {
	const [StrategicPills] = useState([
		{
			Name: 'Representation and Advocacy',
			icon: Graduate,
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra massa massa ultricies mi. Lectus sit amet est placerat in egestas erat. Vel orci porta non pulvinar neque laoreet suspendisse interdum. Aliquet nibh praesent tristique magna. Libero volutpat sed cras ornare arcu dui vivamus arcu.',
		},
		{
			Name: 'Representation and Advocacy',
			icon: Graduate,
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra massa massa ultricies mi. Lectus sit amet est placerat in egestas erat. Vel orci porta non pulvinar neque laoreet suspendisse interdum. Aliquet nibh praesent tristique magna. Libero volutpat sed cras ornare arcu dui vivamus arcu.',
		},
		{
			Name: 'Representation and Advocacy',
			icon: Graduate,
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra massa massa ultricies mi. Lectus sit amet est placerat in egestas erat. Vel orci porta non pulvinar neque laoreet suspendisse interdum. Aliquet nibh praesent tristique magna. Libero volutpat sed cras ornare arcu dui vivamus arcu.',
		},
		{
			Name: 'Representation and Advocacy',
			icon: Graduate,
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra massa massa ultricies mi. Lectus sit amet est placerat in egestas erat. Vel orci porta non pulvinar neque laoreet suspendisse interdum. Aliquet nibh praesent tristique magna. Libero volutpat sed cras ornare arcu dui vivamus arcu.',
		},
		{
			Name: 'Representation and Advocacy',
			icon: Graduate,
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra massa massa ultricies mi. Lectus sit amet est placerat in egestas erat. Vel orci porta non pulvinar neque laoreet suspendisse interdum. Aliquet nibh praesent tristique magna. Libero volutpat sed cras ornare arcu dui vivamus arcu.',
		},
		{
			Name: 'Representation and Advocacy',
			icon: Graduate,
			desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra massa massa ultricies mi. Lectus sit amet est placerat in egestas erat. Vel orci porta non pulvinar neque laoreet suspendisse interdum. Aliquet nibh praesent tristique magna. Libero volutpat sed cras ornare arcu dui vivamus arcu.',
		},
	]);
	return (
		<div className="page">
			<section className="h-fit lg:space-y-12 space-y-6 w-full text-black lg:mt-24 mt-6 overflow-hidden  ">
				<div className="flex flex-col lg:flex-row lg:h-3/4  justify-between  w-full ">
					<div className="lg:w-2/3 flex  ">
						<div className="w-1/12 border-t-2 mt-3 border-black"></div>
						<div className="flex  text-xl h-full px-12 flex-col lg:space-y-6 space-y-3">
							<p className="font-semibold">What we do</p>
							<p className="lg:text-6xl text-4xl leading-tight font-semibold">
								Finsweet
							</p>
						</div>
					</div>
					<div className="flex flex-col space-y-4 pt-20 lg:w-1/3 h-full   relative justify-center items-center">
						<p className="font-semibold text-xl">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<p>
							The Clean Cooking Association of Kenya is a sector association
							with a vision to see unLorem ipsum dolor sit amet, consectetur
							adipiscing elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Mus mauris vitae ultricies leo
						</p>
					</div>
				</div>
				<div className="relative text-white overflow-hidden rounded-xl">
					<AiFillPlayCircle className="text-5xl cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></AiFillPlayCircle>
					<img
						src={VidThumb}
						alt=""
						className="w-full"
					/>
				</div>
			</section>
			<section className="w-full space-y-10 pt-32 -mt-24 py-10  bg-[#EFF7F2]">
				<div className="flex justify-around space-x-2">
					<div className="lg:w-1/3 space-y-2">
						<p className="text-xl font-semibold">our mission</p>
						<p className="text-2xl font-semibold">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
						</p>
					</div>
					<div className="lg:w-1/3 space-y-2">
						<p className="text-xl font-semibold">our mission</p>
						<p className="text-2xl font-semibold">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
						</p>
					</div>
				</div>
				<div className="space-y-5">
					<p className="font-semibold">OUR PARTNERS</p>
					<div className="grid lg:grid-cols-6 gap-8 grid-cols-3 justify-between">
						{Parteners.map((e) => (
							<img
								src={e.Image}
								alt=""
							/>
						))}
					</div>
				</div>
				<div className="space-y-5">
					<p className="font-semibold">OUR AFFILIATIONS</p>
					<div className="grid lg:grid-cols-6 gap-8 grid-cols-3 justify-between">
						{Affliates.map((e) => (
							<img
								src={e.Image}
								alt=""
							/>
						))}
					</div>
				</div>
			</section>
			<section className="text-center py-12 space-y-12">
				<p className="text-5xl font-bold">About US</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eum
					earum est, itaque libero quaerat fugit ab? Harum perspiciatis beatae
					velit officia. Nostrum veritatis corrupti assumenda dolore quas facere
					harum tempore illo! Optio, cumque dicta. Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Expedita eum earum est, itaque libero
					quaerat fugit ab? Harum perspiciatis beatae velit officia. Nostrum
					veritatis corrupti assumenda dolore quas facere harum tempore illo!
					Optio, cumque dicta.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eum
					earum est, itaque libero quaerat fugit ab? Harum perspiciatis beatae
					velit officia. Nostrum veritatis corrupti assumenda dolore quas facere
					harum tempore illo! Optio, cumque dicta. Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Expedita eum earum est, itaque libero
					quaerat fugit ab? Harum perspiciatis beatae velit officia. Nostrum
					veritatis corrupti assumenda dolore quas facere harum tempore illo!
					Optio, cumque dicta.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eum
					earum est, itaque libero quaerat fugit ab? Harum perspiciatis beatae
					velit officia. Nostrum veritatis corrupti assumenda dolore quas facere
					harum tempore illo! Optio, cumque dicta. Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Expedita eum earum est, itaque libero
					quaerat fugit ab? Harum perspiciatis beatae velit officia. Nostrum
					veritatis corrupti assumenda dolore quas facere harum tempore illo!
					Optio, cumque dicta.
				</p>
			</section>
			<section>
				<div className="w-full flex lg:flex-row flex-col justify-around lg:p-0 p-5 lg:space-y-0 space-y-5 rounded-xl items-center py-12  text-white bg-black">
					<div className="lg:w-1/3  space-y-5">
						<p className="text-xl font-semibold">CLEAN COOKING</p>
						<p className="lg:text-5xl text-3xl font-semibold">
							Why Clean cooking is important
						</p>
						<p className="opacity-70">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
							Pharetra massa massa ultricies mi. Lectus sit amet est placerat in
							egestas erat. Vel orci porta non pulvinar neque laoreet
							suspendisse interdum. Aliquet nibh praesent tristique magna.
							Libero volutpat sed cras ornare arcu dui vivamus arcu. Cursus
							metus aliquam eleifend mi in. Vitae tortor condimentum lacinia
							quis. Rhoncus aenean vel elit scelerisque mauris pellentesque
							pulvinar pellentesque
						</p>
					</div>
					<div className="">
						<img
							src={Imagecooking}
							alt=""
						/>
					</div>
				</div>
			</section>
			<section className="space-y-16 py-24">
				<p className="text-4xl text-center font-bold">
					Our Five Key Strategic Pillars
				</p>
				<div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between">
					{StrategicPills.map((e) => (
						<div className="space-y-4 ">
							<img
								src={Graduate}
								alt=""
							/>
							<p className="text-2xl font-semibold text-[#70C174]">{e.Name}</p>
							<p>{e.desc}</p>
						</div>
					))}
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

export default About;
