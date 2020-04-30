import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import NotFoundPage from "./NotFoundPage";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
	//ReactRouter automatically loads the correct JSX when the URL matches.
	//Without the exact property in the <Route> tag, any URL beyond the / will load the component
	return (
		<div className="container-fluid">
			<Header />
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/courses" component={CoursesPage} />
				<Route path="/about" component={AboutPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	);
}

export default App;
