import { useState } from 'react'
import { useHistory } from 'react-router-dom'

export const LogInPage = () => {
    const [errorMessage, setErrorMEssage] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const history = useHistory();

    const onLogInClicked = async () => {
        alert('Log In not implemented yet')
    }

    return (
        <div children className="content-container">
            <h1>Log In</h1>
            {errorMessage && <div className="fail">{errorMEssage}</div>}
            <input
                value={emailValue}
                onChange={e => setEmailValue(e.target.value)} 
                placeholder="someone@gmail.com" />
            <input 
                type="password" 
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                placeholder="password" />
            <hr />
            <button
                disabled={!emailValue || !passwordValue} 
                onClick={onLogInClicked}>Log In</button>
            <button onClick={() => history.push('/forgot-password')}>Forgot Password</button>
            <button onClick={() => history.push('/signup')}>Sign Up</button>
        </div>
    )
}