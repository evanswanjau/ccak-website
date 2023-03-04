import img from '../assets/ImageDonate.png';
import { Link } from 'react-router-dom';
function DonateSection() {
	return (
		<div className="w-full mb-10 relative h-fit  ">
			<div className="Donate absolute w-full rounded-xl ">
				<img
					src={img}
					className="w-full opacity-0 "
					alt=""
				/>
				<div className="absolute md:space-y-6 space-y-2 flex-col text-white h-full  top-0 w-full flex justify-center items-center">
					<p className="lg:text-5xl md:text-3xl sm:text-2xl text-xl font-bold leading-tight text-center">
						You can contribute to make <br /> the environment greener!
					</p>
					<div className="space-x-6 md:text-md  text-sm ">
						<Link to="/team">
							<button className="bg-[#329E49] hover:bg-[#39b654] lg:px-10 px-5 lg:py-3 py-2 rounded">
								BECOME A MEMBER
							</button>
						</Link>
						<Link to="/donate">
							<button className="bg-white text-black lg:px-10 px-5 lg:py-3 py-2 rounded">
								DONATE
							</button>
						</Link>
					</div>
				</div>
			</div>
			<img
				src={img}
				className="w-full "
				alt=""
			/>
		</div>
	);
}
export default DonateSection;
