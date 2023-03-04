import { useState } from 'react';
import News from '../Components/News';

function Press({ news, Blog }) {
	return (
		<div className="page">
			<section className="h-fit mb-10 text-center space-y-10 py-12 justify-between   w-full   overflow-hidden  ">
				<p className="text-4xl font-semibold">Press Release</p>
				<p className="lg:w-1/3 mx-auto">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et.
				</p>
			</section>
			<section className="h-fit flex flex-col mb-10 justify-between   w-full   overflow-hidden  ">
				<News news={news}></News>
			</section>
			<section className="h-fit space-y-9 flex flex-col mb-10 justify-between   w-full   overflow-hidden  ">
				<div>
					<p className="text-3xl font-semibold">From our blog</p>
					<div></div>
				</div>
				<News news={Blog}></News>
			</section>
		</div>
	);
}

export default Press;
