
import { Link } from "react-router-dom";
import { useAuth } from '../context/UserContext';
import style from '../styles/Nav.module.css';

const Nav = () => {
	const {currentUser} = useAuth();
	
	
	return (
		<div className={style.container}>
			{currentUser}
			<Link to="/posts" className={style.link}>Home</Link>
			<Link to="/posts" className={style.link}>Home</Link>
			<Link to="/posts" className={style.link}>Home</Link>
			<Link to="/posts" className={style.link}>Home</Link>
			<Link to="/posts" className={style.link}>Home</Link>
		</div>
	);
}

export default Nav;