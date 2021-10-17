import react from "react";
import { Link } from "react-router-dom";

function CardExpertise(prop) {
	//we need to pass the prop from the intro.js of the part
	function handleClick() {
		console.log("user Clicked");
	}
	return (
		<div className="Card_For_purpose">
			<p>{prop.name}</p>
			<Link to="purpose">
				<button>Select</button>
			</Link>
		</div>
	);
}

export default CardExpertise;
