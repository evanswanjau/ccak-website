import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logoblack.svg';
import { BiCollapse, BiSearch } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
function NavBar() {
	const [TNStatus, TNCollapse] = useState(false);
	const [NavLinks, setLink] = useState([
		{
			link: '/',
			name: 'HOME',
		},
		{
			link: '/about',
			name: 'WHO WE ARE',
		},
		{
			link: '/whatwedo',
			name: 'WHAT WE DO',
		},
		{
			link: '/donate',
			name: 'GET INVOLVED',
		},
		{
			link: '/team',
			name: 'MEMBERSHIP',
		},
	]);
	const [TopLinks, SetTopLinks] = useState([
		{
			link: '/press',
			name: 'COVID-19',
		},
		{
			link: '/research',
			name: 'RESOURCE CENTRE',
		},
		{
			link: '/whatwedo',
			name: 'MEDIA CENTRE',
		},
	]);
	useEffect(() => {
		function CheckScreen() {
			const width = window.innerWidth;
			if (width > 1024) {
				TNCollapse(true);
			} else {
				TNCollapse(false);
			}
		}

		window.addEventListener('load', CheckScreen);
		window.addEventListener('resize', CheckScreen);
	});
	return (
		<nav
			className={`fixed z-20 top-0 left-0 w-screen  overflow-x-hidden text-center lg:h-36 h-36 ${
				TNStatus && 'h-72'
			}`}
		>
			<div className="flex lg:flex-row flex-col bg-white lg:items-center items-start justify-between lg:py-0 py-5 px-12 h-1/2 ">
				<div className="logo flex lg:w-fit w-full justify-between items-center">
					<img
						src={logo}
						alt=""
					/>
					<GiHamburgerMenu
						className="lg:hidden cursor-pointer"
						onClick={() => TNCollapse(!TNStatus)}
					></GiHamburgerMenu>
				</div>
				{TNStatus && (
					<div className="flex space-x-5">
						<ul className="flex items-center font-light">
							{TopLinks.map((e) => (
								<Link
									to={e.link}
									title={e.name}
								>
									<li
										className={` ${
											e.name !== 'COVID-19' && 'border-l-2 border-[#b3b3b3]'
										}  px-5`}
									>
										{e.name}
									</li>
								</Link>
							))}
						</ul>
						<Link to={'/donate'}>
							<button className="bg-[#329E49] text-white p-2 px-5 hover:bg-[#3ab554] rounded-md">
								Donate
							</button>
						</Link>
					</div>
				)}
			</div>
			<div className="flex flex-col-reverse justify-center  lg:flex-row  bg-[#329E49] w-screen lg:justify-between lg:items-center items-end h-1/2 px-12 text-white">
				{TNStatus && (
					<ul className="flex lg:mt-0 mt-5  space-x-5  ">
						{NavLinks.map((e) => (
							<li>
								<Link
									to={e.link}
									title={e.name}
								>
									{e.name}
								</Link>
							</li>
						))}
					</ul>
				)}
				<div className="flex items-center">
					<div className="text-3xl  cursor-pointer">
						<BiSearch></BiSearch>
					</div>
					<form
						action=""
						className="border-b "
						onSubmit={(e) => e.preventDefault()}
					>
						<input
							type="text"
							placeholder=""
							className="bg-transparent "
						/>
					</form>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
