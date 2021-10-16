import react from 'react'
import CardPurpose from './CardsPurpose';

function Purpose() {
    let purposes = ['I want a Job\nI want to UpSkill',
        'I am a Student\nI want to upskill my Skills',
        'I am freeLancer I want to earn Money',
        'I am a teacher I want to increase my spectrum'];
    return (
        <div className='purpose'>
            <h1>Whats your Purpose Choosing '__Here Goes the corse Name__'</h1>
            <div className='purpose-items'>
                {
                    purposes.map(item => (
                        <CardPurpose name={item} />
                    ))
                }
            </div>

        </div>
    )

}

export default Purpose;