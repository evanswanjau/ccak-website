import React, { Component } from 'react';
import { Link } from 'react-router-dom';
function Project({ title, Desc, img }) {
	return (
		<div className=" flex flex-col justify-between relative h-full px-12 py-20  text-white  overflow-hidden rounded-md project">
			<p className="text-4xl mb-6 ">{title}</p>
			<p>{Desc}</p>
			<Link>
				<button className="bg-white py-2 mt-8 px-5 text-black rounded-sm">
					SEE MORE{' '}
				</button>
			</Link>
			<img
				src={img}
				alt=""
				className="absolute -z-10 top-0 h-full w-full left-0"
			/>
		</div>
	);
}
export default Project;
