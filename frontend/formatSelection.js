import { useState } from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

const FormatSelection = () => {
	return (
		<div>
			<h1>Last step!</h1>
			<h1>What's your favourite format?</h1>
			<Card body className="card-container card-container-1">
				<CardTitle tag="h3">Bit-Sized videos</CardTitle>
				<button className="path-selection-btn">Select</button>
			</Card>
			<Card body className="card-container card-container-2">
				<CardTitle tag="h3">Long tutorial videos</CardTitle>
				<button className="path-selection-btn">Select</button>
			</Card>
			<Card body className="card-container card-container-1">
				<CardTitle tag="h3">Live Sessions</CardTitle>
				<button className="path-selection-btn">Select</button>
			</Card>
			<Card body className="card-container card-container-2">
				<CardTitle tag="h3">Puzzles</CardTitle>
				<button className="path-selection-btn">Select</button>
			</Card>
			<Card body className="card-container card-container-1">
				<CardTitle tag="h3">Quizzes</CardTitle>
				<button className="path-selection-btn">Select</button>
			</Card>
			<Card body className="card-container card-container-1">
				<CardTitle tag="h3">Group discussions</CardTitle>
				<button className="path-selection-btn">Select</button>
			</Card>
		</div>
	);
};

export default FormatSelection;
