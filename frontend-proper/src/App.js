import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import PathSelection from "./pathSelection";
import CourseSelection from "./courseSelection";
import FormatSelection from "./formatSelection";
import Expertise from "./Expertise";
import Purpose from "./Purpose";

function App() {
	let list_of_topic = [
		"ML",
		"NLP",
		"AI",
		"Blockchain",
		"Data Structures",
		"Data Science",
		"React_Redux",
		"HTML",
		"CSS",
		"bootStrap",
	];
	return (
		<div className="App">
			{/* <Login></Login> */}
			{/* <PathSelection></PathSelection>
			<CourseSelection></CourseSelection>
			<FormatSelection></FormatSelection> */}
			<Router>
				<Switch>
					<Route exact path="/">
						<Login />
					</Route>
					<Route path="/topics">
						<CourseSelection />
					</Route>
					<Route path="/expertise">
						<Expertise></Expertise>
					</Route>
					<Route path="/purpose">
						<Purpose></Purpose>
					</Route>
					<Route path="/format">
						<FormatSelection></FormatSelection>
					</Route>
					<Route path="/paths">
						<PathSelection></PathSelection>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
