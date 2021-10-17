import React from "react";

function Interests(prop) {
	//prop.array will contain the list sent by App.js

	return (
		<div className="interest">
			<h1>This is interest</h1>
			{prop.array.map((item) => (
				<button value={item} key={item} id={item}>
					{item}
				</button>
			))}
		</div>
	);
}

export default Interests;
