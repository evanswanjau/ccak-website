import { useState } from 'react';
import { Link } from 'react-router-dom';
import newsThumb from '../assets/Thumbnailnews.png';
function News({
	news = [
		{
			Title: 'Don’t destroy greenery and don’t spoil scenery',
			Date: 'February 20, 2023',
			Details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
			img: newsThumb,
		},
		{
			Title: 'Don’t destroy greenery and don’t spoil scenery',
			Date: 'February 20, 2023',
			Details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
			img: newsThumb,
		},
		{
			Title: 'Don’t destroy greenery and don’t spoil scenery',
			Date: 'February 20, 2023',
			Details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
			img: newsThumb,
		},
		{
			Title: 'Don’t destroy greenery and don’t spoil scenery',
			Date: 'February 20, 2023',
			Details:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
			img: newsThumb,
		},
	],
}) {
	return (
		<div className="space-y-12">
			<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12   w-full justify-between">
				{news.map((e) => (
					<Link to="/press">
						<div className="space-y-4 ">
							<img
								src={e.img}
								alt=""
								className="w-full"
							/>
							<p className="opacity-70">{e.Date}</p>
							<p className="text-xl font-semibold">{e.Title}</p>
							<p className="opacity-50">{e.Details}</p>
							<Link to={'/press'}>
								<button className=" mt-2 text-[#329E49]">READ MORE</button>
							</Link>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
export default News;
