import { Link } from "react-router-dom";
function Card(prop) {
	//we need to pass the prop from the intro.js of the part
	// function handleClick() {
	// 	console.log(prop);
	// }
	console.log(prop);
	return (
		<div className="Card_For_intro">
			<img src={prop.img} alt={prop.alt} />
			<p>{prop.user}</p>
			<Link to="/topics">
				<button id={prop.user}>SUBMIT</button>
			</Link>
		</div>
	);
}

export default Card;
