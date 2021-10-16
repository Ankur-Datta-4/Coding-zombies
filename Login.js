import react, { useState } from 'react'

function Login() {
    let [name, setName] = useState("");

    function handleName(e) {
        setName(e.target.value)
    }

    function handleClick() {
        console.log("Clicked me !")
    }
    return (
        <div className='container'>
            <h1>Hello {name}</h1>
            <form action='https://www.google.com'>
                <input onChange={handleName} placeholder='Name' type="text" />
                <input placeholder='Username' type="text" name='UserName' />
                <input placeholder='Password' type="text" name='PassName' />
                <button onClick={handleClick} type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login;