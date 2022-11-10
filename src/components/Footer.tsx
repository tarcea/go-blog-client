import { useMessage } from '../context/MessageContext';
import style from '../styles/Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
	const {message} = useMessage()

  return (
    <footer className={style.footer}>
      <div className={style.container}>
				<p>{message && message}</p>
        <h5>&copy; Gheorghe Tarcea {currentYear}</h5>
      </div>
    </footer>
  );
}

export default Footer;