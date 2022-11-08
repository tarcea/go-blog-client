import { Link } from "react-router-dom";
import style from '../styles/Nav.module.css';

const Nav = () => {
	
	return (
		<div className={style.container}>
			<Link to="/posts" className={style.link}>Home</Link>
			<Link to="/posts" className={style.link}>Home</Link>
			<Link to="/posts" className={style.link}>Home</Link>
			<Link to="/posts" className={style.link}>Home</Link>
			<Link to="/posts" className={style.link}>Home</Link>
		</div>
	);
}

export default Nav;