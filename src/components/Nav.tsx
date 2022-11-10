
import { Link } from "react-router-dom";
import { useAuth } from "../context/UserContext";
import style from '../styles/Nav.module.css';

const Nav = () => {
	const {logout, currentUser} = useAuth()

	return (
		<>
			<div className={style.container}>
				<div className={style.links}>
					<Link to="/posts" className={style.link}>Home</Link>
					{currentUser 
						?
						<>
						<Link to="/posts/new" className={style.link}>NewPost</Link>
						<Link to="/posts" className={style.link} onClick={() => logout()}>Logout</Link>
						</>
						:
					<Link to="/login" className={style.link} >Login</Link>}
				</div>
				
				<span className={style.user}>{currentUser}</span>
			</div>
		</>
	);
}

export default Nav;