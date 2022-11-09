import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/UserContext";
import style from '../styles/Login.module.css';

const Login = () => {
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
		<div className={style.container}>
			<div className={style.innerContainer}>
				<h2 className={style.header}>
          Log in
        </h2>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="email"
						placeholder="email"
						onChange={handleChange}
					/>
					<input
						type="text"
						name="password"
						placeholder="password"
						onChange={handleChange}
					/>
					<input type="submit" value="Log in"/>
				</form>
				<div className={style.link}>
          Don't have an account?{' '}
          <Link to="/signup">
            <strong>Sign Up!</strong>
          </Link>
        </div>
			</div>
		</div>
	);
}

export default Login