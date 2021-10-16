import react, { useState } from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

function Intro() {
    let [name, set_name] = useState("<Here goes The name>");
    return (
        //now we have object here that stores the url and the text
        //for the both the cards
        <div className='intro'>
            <br /><br /><br /><br /><br />
            <div>
                <h1>HI {name}</h1>
                <p>You are here to choose course for ? </p>
            </div>
            <div className='intro-cards'>
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Intro;