import { useState } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../assets/Arrow button.svg';
function Events({
	events = [
		{
			Day: '28',
			Month: 'SEP',
			title: 'Say no to plastic usage and save the planet',
		},
		{
			Day: '28',
			Month: 'SEP',
			title: 'Say no to plastic usage and save the planet',
		},
	],
}) {
	return (
		<div className="space-y-12 w-full">
			<div className="flex items-center">
				<p className="lg:w-1/6 w-1/2 lg:text-3xl text-2xl font-semibold">
					Read Our Events
				</p>
				<div className="border-t  lg:w-5/6 w-1/2 mt-2"></div>
			</div>
			<div className="grid lg:grid-cols-2 grid-cols-1 gap-12   w-full justify-between ">
				{events.map((e) => (
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
				))}
			</div>
		</div>
	);
}
export default Events;
