import react from "react";

function Card(prop) {
    //we need to pass the prop from the intro.js of the part
    function handleClick() {
        console.log(prop.user)
    }
    return (
        <div className='Card_For_intro'>
            <img src={prop.img} alt={prop.alt} />
            <p>{prop.user}</p>
            <button onClick={handleClick} id={prop.user}>SUBMIT</button>
        </div>
    )
}

export default Card;
