import pdf from '../assets/Vectorpdf.png';
import { useState } from 'react';
function Research() {
	const [Researches] = useState([
		{
			Name: 'Analysis of the implications of the value-added tax on vertical analysis in our region.',
			Desc: 'The head of programmes will report to the Chief Executive Officer (CEO). In the meantime when the CEO position is vacant, he/she will report directly Chair of the Executive Committee of the Association.',
			Date: '7th Jan 2023',
		},
		{
			Name: 'Analysis of the implications of the value-added tax on vertical analysis in our region.',
			Desc: 'The head of programmes will report to the Chief Executive Officer (CEO). In the meantime when the CEO position is vacant, he/she will report directly Chair of the Executive Committee of the Association.',
			Date: '7th Jan 2023',
		},
		{
			Name: 'Analysis of the implications of the value-added tax on vertical analysis in our region.',
			Desc: 'The head of programmes will report to the Chief Executive Officer (CEO). In the meantime when the CEO position is vacant, he/she will report directly Chair of the Executive Committee of the Association.',
			Date: '7th Jan 2023',
		},
		{
			Name: 'Analysis of the implications of the value-added tax on vertical analysis in our region.',
			Desc: 'The head of programmes will report to the Chief Executive Officer (CEO). In the meantime when the CEO position is vacant, he/she will report directly Chair of the Executive Committee of the Association.',
			Date: '7th Jan 2023',
		},
		{
			Name: 'Analysis of the implications of the value-added tax on vertical analysis in our region.',
			Desc: 'The head of programmes will report to the Chief Executive Officer (CEO). In the meantime when the CEO position is vacant, he/she will report directly Chair of the Executive Committee of the Association.',
			Date: '7th Jan 2023',
		},
		{
			Name: 'Analysis of the implications of the value-added tax on vertical analysis in our region.',
			Desc: 'The head of programmes will report to the Chief Executive Officer (CEO). In the meantime when the CEO position is vacant, he/she will report directly Chair of the Executive Committee of the Association.',
			Date: '7th Jan 2023',
		},
	]);
	return (
		<div className="page ">
			<section className=" py-12 space-y-20 ">
				<div className="text-center space-y-2">
					<p className="text-3xl font-semibold">Research Papers</p>
					<p className="lg:w-1/3 md:w-1/2 sm:w-2/3 w-4/5 mx-auto">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
				<div className="grid lg:grid-cols-2 gap-24 grid-cols-1">
					{Researches.map((e) => (
						<div
							key={e.Name}
							className="bg-[#EFF7F2] rounded p-5"
						>
							<div className="flex space-x-5 py-5 border-b-2  justify-between">
								<p className="text-2xl font-semibold">{e.Name}</p>
								<img
									src={pdf}
									alt=""
									className="w-8 h-fit"
								/>
							</div>
							<div className="space-y-6 py-6">
								<p className="opacity-80">{e.Desc}</p>
								<p className="font-semibold">{e.Date}</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}

export default Research;
