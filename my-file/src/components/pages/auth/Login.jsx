
import "./Login.scss"
import { useState} from 'react'
import { useNavigate } from 'react-router-dom'

import SignLight from "../../../images/sign_light.svg"
import SignDark from "../../../images/sign_dark.svg"


function Login(){

		const [mode, setMode] = useState(localStorage.getItem('mode') === 'true' || false)  
		const changeTheme = () => {
		document.body.classList.toggle('dark')
		setMode(!mode)
		localStorage.setItem('mode', !mode)
	}



    const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const navigate = useNavigate()

    const onSubmit = async e => {		
		e.preventDefault()
        

		// if (email === 'elbekboltayev@gmail.com' && password === '12345678') {
		// 	navigate('/home')
		// 	localStorage.setItem(
		// 		'accessToken',
		// 		'7eadfjahehcfq7jkdafkcvzxvbajhznxbvcayu032432r**-/234/v*cv'
		// 	)
		// 	setError('')
		// } else {
		// 	setError('Xatolik yuz berdi')
		// }

        let req = await fetch('https://reqres.in/api/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json',
		              'Accept': 'application/json'
		          },
			  
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		})
			req = await req.json()
		
		if (req.token) {
			navigate('/home')
			localStorage.setItem('accessToken', req.token)
			setError('')
		} else {
			setError('Invaid input! Chek your email or password and try again')
		}

	}


    return(
        <div className="login_parent">
            <div className="login_block">
                <form onSubmit={onSubmit} className="sign_in">
                    <h2>Sign In</h2>
                    <label>Email Address</label>
                    <input type="text" onChange={({ target }) => setEmail(target.value)}
                    />

                    <label>Passwordd</label>
                    <input type="password" onChange={({ target }) => setPassword(target.value)} /> 


                    <button type="submit" className="butt">Sign In</button>
                    <p className="error_sign" >{error}</p>

                    <div className="forgot">
                        <h5>Forget Password?</h5>
                        <div className="account">
                            <span>Don't have an account?</span>
                            <h4>Sign Up</h4>
                        </div>
                    </div>
                </form>
                <div className="imagess">
					{
					!mode ? <img src={SignLight} alt="mode"/> :
                    <img src={SignDark} alt="mode" />

					}
					{/* <div><img src={SignLight} alt="signlihgt" /></div> */}
				</div>

            </div>
        </div>
    )
}

export default Login