import { useState } from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

const PathSelection = () => {
	const [courseName, setCourseName] = useState("<course name>");
	return (
		<div>
			<h1>How do you want to learn {courseName}?</h1>
			<Row>
				<Col sm="6">
					<Card body className="card-container card-container-1">
						<CardTitle tag="h4">High speed</CardTitle>
						<CardText>15days</CardText>
						<button className="path-selection-btn">Enroll</button>
					</Card>
				</Col>
				<Col sm="6">
					<Card body className="card-container card-container-2">
						<CardTitle tag="h4">Medium paced</CardTitle>
						<CardText>2 months</CardText>
						<button className="path-selection-btn">Enroll</button>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col sm="6">
					<Card body className="card-container card-container-1">
						<CardTitle tag="h4">Self paced</CardTitle>
						<CardText>3 months</CardText>
						<button className="path-selection-btn">Enroll</button>
					</Card>
				</Col>
				<Col sm="6">
					<Card body className="card-container card-container-2">
						<CardTitle tag="h4">Intermittent</CardTitle>
						<CardText>4 hours per week for 3 months</CardText>
						<button className="path-selection-btn">Enroll</button>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col sm="6">
					<Card body className="card-container">
						<CardTitle tag="h4">Bootcamp</CardTitle>
						<CardText>Bootcamp every weekend</CardText>
						<button className="path-selection-btn">Enroll</button>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default PathSelection;
