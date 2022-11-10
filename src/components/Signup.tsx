import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/UserContext";
import style from '../styles/Login.module.css';

const Signup = () => {
	const [inputs, setInputs] = useState<any>({})
	const navigate = useNavigate()
	const {signUp} = useAuth()

	const handleSubmit = async (e: any) => {
		e.preventDefault()
		await signUp(inputs)
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
          Sign Up
        </h2>
				<form onSubmit={handleSubmit}>
				<input
						type="text"
						name="username"
						placeholder="username"
						onChange={handleChange}
					/>
					<input
						type="email"
						name="email"
						placeholder="email"
						onChange={handleChange}
					/>
					<input
						type="password"
						name="password"
						placeholder="password"
						onChange={handleChange}
					/>
					<input type="submit" value="Sign Up"/>
				</form>
				<div className={style.link}>
				Already have an account?{' '}
          <Link to="/login">
            <strong>Login!</strong>
          </Link>
        </div>
			</div>
		</div>
	);
}

export default Signup