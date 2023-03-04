import { Link } from 'react-router-dom';
import { BsTwitter, BsFacebook, BsLinkedin } from 'react-icons/bs';
import { useState } from 'react';

import Map from '../assets/Map.png';
function Contact() {
	const [message, SetMessage] = useState('');
	const [Email, SetEmail] = useState('');

	const SendEmail = (e) => {
		e.preventDefault();
	};
	return (
		<div className="page">
			<section className="h-fit text-center lg:text-start bg-[#EBF0F9] space-y-12 w-full text-black py-24 overflow-hidden  ">
				<div className="flex flex-col lg:flex-row h-3/4  justify-between  w-full ">
					<div className="lg:w-1/2 flex  ">
						<div className="w-3/12 border-t-2 mt-3 border-black"></div>
						<div className="flex  text-xl h-full px-12 flex-col space-y-6">
							<p className="font-semibold text-start">What we do</p>
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
					<div className=" lg:mt-0 mt-12 lg:w-1/2 space-y-6 h-full flex flex-col justify-between  items-start   relative  ">
						<div className="space-y-6 flex flex-col lg:items-start items-center py-4 border-b w-full">
							<p className="text-2xl font-semibold">Let's talk! </p>
							<div className="flex space-x-12">
								<p>00100345123</p>
								<p>Info@finsweet.co.ke</p>
							</div>
						</div>
						<div className="space-y-6 flex flex-col lg:items-start items-center py-4 border-b w-full">
							<p className="text-2xl font-semibold">Headoffice </p>
							<p>Lorem Ipsum Dor</p>
						</div>
						<div className="space-y-6 flex flex-col lg:items-start items-center py-4 border-b w-full">
							<p className="text-2xl font-semibold">Business Hours </p>
							<div className="flex space-x-12">
								<p>
									Monday-Friday: 08:00 - 18:00 <br /> Saturday, Sunday and
									Public Holidays: Closed
								</p>
							</div>
						</div>
						<div className="socials mx-auto lg:mx-0 text-xl space-x-4 text-[#1D2130]">
							<Link to="https://facebook.com">
								<button>
									<BsFacebook></BsFacebook>
								</button>
							</Link>
							<Link to="https://twitter.com">
								<button>
									<BsTwitter></BsTwitter>
								</button>
							</Link>
							<Link to="https://linkedin.com">
								<button>
									<BsLinkedin></BsLinkedin>
								</button>
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section className="flex flex-col items-center py-24">
				<form
					action={`mailto:${Email}`}
					className=" lg:w-1/3 md:w-1/2 space-y-14 "
				>
					<div className="flex justify-between space-x-8">
						<div className="flex flex-col w-1/2">
							<label htmlFor="FirstName">First Name</label>
							<input
								type="text"
								name="FirstName"
								id="FirstName"
								className="border-b-2 "
							/>
						</div>
						<div className="flex flex-col w-1/2">
							<label htmlFor="LastName">First Name</label>
							<input
								type="text"
								name="LastName"
								id="LastName"
								className="border-b-2"
							/>
						</div>
					</div>
					<div className="flex  justify-between space-x-8">
						<div className="flex flex-col w-1/2">
							<label htmlFor="Email">Email</label>
							<input
								type="text"
								name="Email"
								id="Email"
								placeholder="example@email.com"
								className="border-b-2 "
							/>
						</div>
						<div className="flex flex-col w-1/2">
							<label htmlFor="PhoneNumber">Phone Number</label>
							<input
								type="text"
								name="PhoneNumber"
								id="PhoneNumber"
								className="border-b-2"
							/>
						</div>
					</div>
					<div>
						<textarea
							name="Message"
							id="Message"
							cols="30"
							rows="8"
							placeholder="Type your Message"
							className="border p-5  w-full"
							onChange={(e) => SetMessage(e.target.value)}
						></textarea>
					</div>
					<div className="flex justify-center">
						<button
							type="onSubmit"
							className="bg-[#70C174]  text-white px-10 py-3 rounded hover:bg-[#7ed883]"
						>
							SEND US A MESSAGE
						</button>
					</div>
				</form>
			</section>
			{/* Embed Your Google Maps Code Here */}
			<img
				src={Map}
				alt=""
				className="w-full"
			/>
		</div>
	);
}

export default Contact;
