import react from 'react';
import CardPurpose from './CardsPurpose';

function Expertise() {
    let arr = ['A Beginner',
        'I know stuffs from related Field',
        'Intermediate',
        'Just To Evaluate Myself'
    ];
    return (
        <div className='exertise'>
            <h1>Okay , First :</h1>
            <h3>What's your level of Expertise  ? ? ?🤔 </h3>
            <div className='epertise-cards'>
                {
                    arr.map(item => (
                        <CardPurpose name={item} />
                    ))
                }
            </div>
        </div>

    )

}

export default Expertise;