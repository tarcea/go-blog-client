import { useState } from "react";
import { useAuth } from "../context/UserContext";

const Login = () => {
	const [inputs, setInputs] = useState<any>({})

	const {login, logout, cookies} = useAuth()

	const handleSubmit = async (e: any) => {
		e.preventDefault()
		await login(inputs)
	}

	const handleChange = (e: any) => {
		setInputs((prevState: any) => {
			return {
				...prevState, [e.target.name]: e.target.value
			}
		})
	}

	return (
		<>
				{cookies.token
				? 
				<button onClick={() => logout()}>logout</button>
				:
				<form onSubmit={handleSubmit}>
				<input type="text" name="email" placeholder="email" onChange={handleChange} />
				<input type="text" name="password" placeholder="password" onChange={handleChange}/>
				<input type="submit" value="Log in"/>
			</form>
				}
			
		</>
	);
}

export default Login