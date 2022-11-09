
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import style from '../styles/Nav.module.css';

const Nav = () => {
	const {logout, currentUser} = useContext(UserContext)

	return (
		<div className={style.container}>
			{currentUser}
			<Link to="/posts" className={style.link}>Home</Link>
			<Link to="/posts" className={style.link}>Home</Link>
			<Link to="/posts" className={style.link}>Home</Link>
			{currentUser 
				?
				<Link to="/posts" className={style.link} onClick={() => logout()}>Logout</Link>
				:
			<Link to="/login" className={style.link} >Login</Link>}
		</div>
	);
}

export default Nav;