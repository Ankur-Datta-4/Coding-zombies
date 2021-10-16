import React, { useState } from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

function Login() {
	let [name, setName] = useState("");
	let [hideClass, setHideClass] = useState("");
	let [unhideClass, setUnhideClass] = useState("hide");
	const handleName = (e) => {
		setName(e.target.value);
	};
	const handleClick = (e) => {
		// let inputText = document.getElementsByClassName("name-input");
		// inputText.classList.add("hide");
		setHideClass("hide");
		setUnhideClass("");
	};
	return (
		<div className="container">
			<h1>Hello {name}</h1>
			<input
				onChange={handleName}
				placeholder="Name"
				type="text"
				className={hideClass}
			/>
			<button onClick={handleClick} className={hideClass}>
				Login
			</button>
			<div className={"intro " + unhideClass}>
				<br />
				<div className={unhideClass}>
					<p>You are here to choose course for ? </p>
				</div>
				<div className={"intro-cards " + unhideClass}>
					<Card user="single" className={unhideClass} />
					<Card user="team" className={unhideClass} />
				</div>
			</div>
		</div>
	);
}

export default Login;
