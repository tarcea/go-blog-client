import { useEffect } from 'react';
import { useMessage } from '../context/MessageContext';
import style from '../styles/Message.module.css';

const Message = () => {

	const {message, setMessage} = useMessage()

  useEffect(() => {
    const delay = setTimeout(() => {
      setMessage('')
    }, 2600);
    return () => {
      clearTimeout(delay)
    }
  }, [message, setMessage]);

  return (
    <div className={style.container}>
      {<p>{message}</p>}
    </div>
  )
}

export default Message