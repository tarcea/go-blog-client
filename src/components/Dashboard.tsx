import { useAuth } from '../context/UserContext';
import style from '../styles/Dashboard.module.css';

const Dashboard = () => {
	const {currentUser, username} = useAuth()

  return (
   <div className={style.container}>
		<h3>Dashboard</h3>
		<p>User email: {currentUser}</p>
		<p>Username: {username}</p>
	 </div>
  );
}

export default Dashboard;