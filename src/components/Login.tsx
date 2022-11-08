import { useState } from "react";

const Login = () => {
	const [inputs, setInputs] = useState<any>({})
	const [server] = useState(process.env.REACT_APP_SERVER_URL)

	const login = async (data: any) => {
await fetch(`${server}/users/login`, {
	method: 'POST',
	credentials: 'include',
	headers: {
    'Content-Type': 'application/json',
		'Accept':       'application/json',
  },
	body: JSON.stringify(data)
})
	}

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
		<form onSubmit={handleSubmit}>
			<input type="text" name="email" placeholder="email" onChange={handleChange} />
			<input type="text" name="password" placeholder="password" onChange={handleChange}/>
			<input type="submit" />
		</form>
	);
}

export default Login