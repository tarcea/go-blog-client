
import { Link } from "react-router-dom";
import { useAuth } from "../context/UserContext";
import style from '../styles/Nav.module.css';

const Nav = () => {
	const {logout, currentUser} = useAuth()

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