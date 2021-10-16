import react from "react";

function CardPurpose(prop) {
    //we need to pass the prop from the intro.js of the part
    function handleClick() {
        console.log('user Clicked')
    }
    return (
        <div className='Card_For_purpose'>
            <p>{prop.name}</p>
            <button>Select</button>
        </div>
    )
}

export default CardPurpose;