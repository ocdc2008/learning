import React from "react"; //Import an NPM package called React and set it to a variable called react
import { Link } from "react-router-dom";

function HomePage() {
	return (
		<div className="jumbotron">
			<h1>Pluralsight Administration</h1>
			<p>React, Flux, and React Router for ultra-responsive web apps.</p>
			<Link to="/about" className="btn btn-primary">
				About
			</Link>
			<br />
			<br />
			<a href="/about">About</a>
		</div>
	);
}

export default HomePage; //All modules are private by default. This makes it public, and available to grab
