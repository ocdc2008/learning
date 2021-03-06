//create-react-app looks at the index.js file first
//Then it figures out which other modules to import from here
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { render } from "react-dom";
import App from "./components/App.js";
import { BrowserRouter as Router } from "react-router-dom";

render(
	<Router>
		<App />
	</Router>,
	document.getElementById("root")
);
