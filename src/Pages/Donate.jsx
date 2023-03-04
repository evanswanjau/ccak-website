import DonateSection from '../Components/DonateSection';
import DonateImage from '../assets/ImageDonate2.png';
import { Link } from 'react-router-dom';
function Donate() {
	return (
		<div className="page">
			<section className="bg-[#EFF7F2]">
				<div className="flex flex-col items-center lg:flex-row h-3/4 justify-between lg:items-start w-full ">
					<div className="lg:w-2/3  flex  py-12 ">
						<div className="w-3/12 border-t-2 mt-2 border-black"></div>
						<div className="flex   h-full px-12 flex-col justify-between items-center lg:items-start space-y-4">
							<div className="text-start  w-full">
								{' '}
								<p className="">Donate</p>
							</div>
							<p className="lg:text-6xl text-4xl leading-tight font-semibold">
								Donate Today and Support a Good Cause{' '}
							</p>
							<p>
								When you donate, you’re supporting effective solutions to big
								environmental challenges—an investment in the future of our
								planet.
							</p>
							<Link to={'/about'}>
								<button className="bg-[#329E49] px-8 py-2 rounded-sm text-white">
									LEARN MORE
								</button>
							</Link>
						</div>
					</div>
					<div className="flex lg:w-1/3 h-full py-12  relative justify-center items-center">
						<img
							src={DonateImage}
							alt=""
						/>
					</div>
				</div>
			</section>
			<section className="py-24">
				<div className="flex flex-col lg:flex-row w-full border-b-2 border-gray-200 pb-12 items-center lg:space-x-12 lg:space-y-0 space-y-12">
					<div className="lg:w-1/2  space-y-12">
						<p className="text-5xl font-semibold">
							How you can contribute to protect Earth
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</div>
					<div className="lg:w-1/2">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
							mollis aliquam ut porttitor leo a diam sollicitudin tempor.
							Aliquam nulla facilisi cras fermentum odio eu feugiat pretium.{' '}
							<br /> <br />
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
					</div>
				</div>
				<div className="flex flex-col lg:flex-row py-12 lg:space-y-0 space-y-12">
					<div className="lg:w-1/3">
						<p className="text-5xl font-semibold ">How we use your donation</p>
					</div>
					<div className="lg:w-2/3 ">
						<p>
							Semper quis lectus nulla at volutpat diam. Accumsan tortor posuere
							ac ut consequat semper. Tortor at auctor urna nunc id cursus metus
							aliquam. Dignissim suspendisse in est ante in nibh mauris cursus.
							Purus faucibus ornare suspendisse sed nisi lacus sed. Ac turpis
							egestas maecenas pharetra convallis posuere morbi leo. Risus
							feugiat in ante metus dictum at. Nisi quis eleifend quam
							adipiscing vitae. Arcu odio ut sem nulla pharetra. Sed vulputate
							odio ut enim blandit volutpat maecenas volutpat. Elementum eu
							facilisis sed odio morbi quis.
						</p>
					</div>
				</div>
			</section>
			<section className="h-fit mb-10 flex  justify-between   space-y-12 w-full  py-12  ">
				<DonateSection></DonateSection>
			</section>
		</div>
	);
}

export default Donate;
