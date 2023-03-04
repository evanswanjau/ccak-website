import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import logo from '../assets/Logo.svg';
function Footer() {
	const [Elements, SetElement] = useState([
		{
			Link: '/about',
			name: 'WHO WE ARE',
			elements: [
				{
					link: '/about',
					name: 'About Us',
				},
				{
					link: '/about',
					name: 'Our Mission',
				},
				{
					link: '/about',
					name: 'Our Vision',
				},
				{
					link: '/about',
					name: 'Our Parteners',
				},
				{
					link: '/team',
					name: 'Our Team',
				},
			],
		},
		{
			Link: '/donate',
			name: 'GET INVOLVED',
			elements: [
				{
					link: '/donate',
					name: 'Careers',
				},
				{
					link: '/donate',
					name: 'Consultancy',
				},
				{
					link: '/careers',
					name: 'Donate',
				},
				{
					link: '/careers',
					name: 'Funding',
				},
				{
					link: '/contact',
					name: 'Contact Us',
				},
			],
		},
		{
			Link: '/donate',
			name: 'MEADIA CENTRE',
			elements: [
				{
					link: '/press',
					name: 'News',
				},
				{
					link: '/eventread',
					name: 'Events',
				},
				{
					link: '/about',
					name: 'Projects',
				},
				{
					link: '/press',
					name: 'Press Release',
				},
				{
					link: '/about',
					name: 'Gallery',
				},
			],
		},
	]);
	return (
		<footer className=" w-full   h-fit text-white p-12  bg-[#0B0706] ">
			<div className=" w-full border-b pb-6 border-[#71777D] justify-between  flex flex-col lg:flex-row  items-center lg:items-start lg:space-x-12  ">
				<div className="space-y-5 lg:w-1/5 ">
					<div className="logo">
						<img
							src={logo}
							alt=""
						/>
					</div>
					<div className="text-[#bebebe]">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</div>
					<div className="lg:space-y-2 flex lg:flex-col justify-between ">
						<div className="email flex items-center space-x-2">
							<AiOutlineMail></AiOutlineMail>
							<Link to="mailto:agensi@mail.com">agensi@mail.com</Link>
						</div>
						<div className="phone flex items-center space-x-2">
							<BsTelephone></BsTelephone>
							<Link to="tel:12 3456 7890">+ 12 3456 7890</Link>
						</div>
					</div>
				</div>
				<div className="grid lg:mt-0 mt-10  grid-cols-3  lg:space-x-5 lg:space-y-0 gap-3  lg:w-2/5 w-full  ">
					{Elements.map((ele) => (
						<div className=" space-y-5">
							<Link to={ele.Link}>{ele.name}</Link>
							<ul className="space-y-2 text-[#bebebe]">
								{ele.elements.map((subele) => (
									<li>
										<Link
											to={subele.link}
											title={subele.name}
										>
											{subele.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<div className="space-y-5 lg:w-1/5 lg:mt-0 mt-5">
					<div className="logo">
						<p>NEWSLETTER</p>
					</div>
					<div className="text-[#bebebe]">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco
						</p>
					</div>
					<div>
						<form
							onSubmit={(e) => e.preventDefault()}
							className="email w-full flex justify-start space-x-0  items-center "
						>
							<input
								className="bg-transparent border border-gray-400 p-1 w-4/6 rounded"
								type="email"
								placeholder="Your email"
							/>
							<button
								className="bg-white p-1 w-2/6 text-black "
								onClick={() => console.log('Add To Email List')}
							>
								SUBSCRIBE
							</button>
						</form>
					</div>
				</div>
			</div>
			<div className="pt-5 pb-20 text-[#bebebe]">
				<div className="rights">© Finsweet Ltd 2023 | All rights reserved</div>
			</div>
		</footer>
	);
}

export default Footer;
