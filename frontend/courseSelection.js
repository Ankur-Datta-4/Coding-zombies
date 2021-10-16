import { useState } from "react";

const CourseSelection = () => {
	const [search, setSearch] = useState("");
	let array = [
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
		<div className="course-selection">
			<h1>Let's Learn</h1>
			<input
				type="text"
				placeholder="Search courses"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button className="course-search-btn">Search</button>
			<br />
			<div className="course-btn-container">
				<button value={array[0]} key={array[0]} id={array[0]}>
					{array[0]}
				</button>
				<button value={array[1]} key={array[1]} id={array[1]}>
					{array[1]}
				</button>
				<button value={array[2]} key={array[2]} id={array[2]}>
					{array[2]}
				</button>
				<button value={array[3]} key={array[3]} id={array[3]}>
					{array[3]}
				</button>
			</div>
			<div className="course-btn-container">
				<button value={array[4]} key={array[4]} id={array[4]}>
					{array[4]}
				</button>
				<button value={array[5]} key={array[5]} id={array[5]}>
					{array[5]}
				</button>
				<button value={array[6]} key={array[6]} id={array[6]}>
					{array[6]}
				</button>
				<button value={array[7]} key={array[7]} id={array[7]}>
					{array[7]}
				</button>
			</div>
			<div className="course-btn-container">
				<button value={array[8]} key={array[8]} id={array[8]}>
					{array[8]}
				</button>
				<button value={array[9]} key={array[9]} id={array[9]}>
					{array[9]}
				</button>
			</div>
		</div>
	);
};

export default CourseSelection;
