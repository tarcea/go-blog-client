import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/UserContext";

const Login = ({user}: any) => {
	const [inputs, setInputs] = useState<any>({})
	const navigate = useNavigate()
	const {login} = useAuth()

	const handleSubmit = async (e: any) => {
		e.preventDefault()
		await login(inputs)
		navigate("/posts")
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
			<form onSubmit={handleSubmit}>
				<input type="text" name="email" placeholder="email" onChange={handleChange} />
				<input type="text" name="password" placeholder="password" onChange={handleChange}/>
				<input type="submit" value="Log in"/>
			</form>
		</>
	);
}

export default Login