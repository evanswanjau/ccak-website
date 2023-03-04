import DonateSection from '../Components/DonateSection';
import Donate from './Donate';
import { Link } from 'react-router-dom';
import EventImg from '../assets/ImageEvent.png';
import { useState } from 'react';
//Icons
import link from '../assets/Icons/link.png';
import Calendar from '../assets/Icons/Calendar.png';
import Location from '../assets/Icons/location.png';

import { CiLocationOn } from 'react-icons/ci';
import { BsCalendar } from 'react-icons/bs';
import fb from '../assets/Socials/facebook.png';
import tw from '../assets/Socials/twitter.png';
import li from '../assets/Socials/linkedin.png';
import arrow from '../assets/Arrow button.svg';

function EventRead({ news, events }) {
	return (
		<div className="page">
			<section className="flex space-y-12 py-12 bg-[#EFF7F2] flex-col items-center">
				<p className="lg:w-1/3 md:w-2/3 w-4/5 font-semibold text-center  text-4xl ">
					{events.at(events.lastIndexOf).title}
				</p>
				<div className="flex space-x-12">
					<div className="flex items-center">
						<CiLocationOn className="text-[#70C174] font-semibold text-lg"></CiLocationOn>
						<p> {events.at(events.lastIndexOf).Address}</p>
					</div>
					<div className="flex items-center">
						<BsCalendar className="text-[#70C174]"></BsCalendar>
						<p> {events.at(events.lastIndexOf).Time}</p>
					</div>
				</div>
				<div className="space-x-4">
					<Link to="https://facebook.com">
						<button>
							<img
								src={fb}
								alt=""
							/>
						</button>
					</Link>
					<Link to="https://twitter.com">
						<button>
							<img
								src={tw}
								alt=""
							/>
						</button>
					</Link>
					<Link to="https://linkedin.com">
						<button>
							<img
								src={li}
								alt=""
							/>
						</button>
					</Link>
				</div>
			</section>
			<section className=" py-12 flex justify-between space-y-12 lg:space-y-0 lg:space-x-24 lg:flex-row flex-col">
				<div className="space-y-12 lg:w-2/3">
					<p>
						Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in
						in lorem platea mattis. Euismod aenean rhoncus scelerisque amet
						tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien,
						accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque
						in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque
						vitae. Scelerisque eget accumsan, non in. Posuere magna erat
						bibendum amet, nisi eu id. Viverra at diam nunc non ornare. Sed{' '}
						<br /> <br />
						ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus
						dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras.
						Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis
						elit dignissim nibh sit. Donec arcu sed elit scelerisque tempor
						ornare tristique. Integer faucibus duis praesent tempor feugiat
						ornare in. Erat libero egestas porttitor nunc pellentesque mauris et
						pulvinar eget.
					</p>
					<img
						src={EventImg}
						alt=""
					/>
					<p>
						Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in
						in lorem platea mattis. Euismod aenean rhoncus scelerisque amet
						tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien,
						accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque
						in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque
						vitae. Scelerisque eget accumsan, non in. Posuere magna erat
						bibendum amet, nisi eu id.
					</p>
				</div>
				<div className="lg:w-1/3 w-full space-y-10 ">
					<p className="text-center text-lg text-white bg-[#70C174] w-full py-2 rounded-sm">
						ATTEND THIS EVENT
					</p>
					<div className="space-y-4">
						<div className="flex space-x-5 items-center">
							<div>
								<img
									src={Location}
									alt=""
								/>
							</div>
							<div>
								<p className="font-semibold">GET DIRECTIONS</p>
								<Link
									className="text-[#2D9CDB]"
									to={'https://tcrn.ch/3yJH0vv'}
								>
									https://tcrn.ch/3yJH0vv
								</Link>
							</div>
						</div>
						<div className="flex space-x-5 items-center">
							<div>
								<img
									src={link}
									alt=""
								/>
							</div>
							<div>
								<p className="font-semibold">GET DIRECTIONS</p>
								<Link
									className="text-[#2D9CDB]"
									to={'https://tcrn.ch/3yJH0vv'}
								>
									https://tcrn.ch/3yJH0vv
								</Link>
							</div>
						</div>
						<div className="flex space-x-5 items-center">
							<div className="w-8  ">
								<img
									src={Calendar}
									alt=""
									className="w-12 "
								/>
							</div>
							<div>
								<p className="font-semibold">GET DIRECTIONS</p>
								<Link
									className="text-[#2D9CDB]"
									to={'https://tcrn.ch/3yJH0vv'}
								>
									https://tcrn.ch/3yJH0vv
								</Link>
							</div>
						</div>
					</div>
					<div>
						<div className="flex items-center space-x-2">
							<p className="font-semibold text-lg">Other upcoming events</p>
							<div className="border-t-2 border-gray-200 w-1/3 mt-1 "></div>
						</div>
						<div className="space-y-4 py-5">
							{events.slice(-3).map((e) => (
								<div>
									<Link to="/press">
										<div className=" flex font-semibold text-[#1D2130] items-center space-x-4 rounded p-5 justify-between bg-[#BEF3C0]">
											<div className="w-fit    pt-2 ">
												<p className="text-3xl">{e.Day}</p>
												<p>{e.Month}</p>
											</div>
											<div className="w-4/6 space-y-2 ">
												<div className="flex  items-center space-x-2">
													<p>NEXT EVENTS</p>
													<div className="border-t-2 border-black mt-1 w-1/6"></div>
												</div>
												<p className="text-2xl">{e.title}</p>
											</div>
											<Link
												to={'/press'}
												className="w-fit "
											>
												<button className=" mt-2  ">
													<img
														src={arrow}
														alt=""
													/>
												</button>
											</Link>
										</div>
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			<section className="h-fit">
				<DonateSection></DonateSection>
			</section>
		</div>
	);
}

export default EventRead;
