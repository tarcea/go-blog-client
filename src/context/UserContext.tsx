import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import { useMessage } from "./MessageContext";

const UserContext = createContext<any | null>(null);

export const useAuth = () => {
  return useContext(UserContext);
};

type Props = {
  children: JSX.Element,
};

export const AuthProvider = ({ children }: Props) => {
	const [loading, setLoading] = useState(true);
	const [server] = useState(process.env.REACT_APP_SERVER_URL)
  const [currentUser, setCurrentUser] = useState(null);
	const [uid, setUid] = useState(null);

  const [cookies] = useCookies(['token']);
	const {setMessage} = useMessage()

	const getUser = async () => {
		try {
			const response = await fetch(`${server}/validate`, {
				method: 'GET',
				// mode: 'cors',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json',
					'Accept':       '*/*',
				},
			})
			if (response.ok) {
				const res = await response.json()
				setCurrentUser(res.user)
				setUid(res.uid)
			}

		} catch (err) {
			console.log(err)
		}
   
  }

	const login = async (data: any) => {
		try {
			const response = await fetch(`${server}/users/login`, {
				method: 'POST',
				// mode: 'cors',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json',
					'Accept':       '*/*',
				},
				body: JSON.stringify(data)
			})

			if (!response.ok) {
				const {message} = await response.json()
				setMessage(message)
				return
			}
			
			await getUser()
			
		} catch (err) {
			
			console.log(err)
		}
		
	}

	const signUp = async (data: any) => {
		try {
			const response = await fetch(`${server}/users/signup`, {
				method: 'POST',
				// mode: 'cors',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json',
					'Accept':       '*/*',
				},
				body: JSON.stringify(data)
			})
			if (response.ok) {
				await getUser()
			}
		} catch (err) {
			console.log(err)
			return
		}
	
	}

	const logout = async () => {
		await fetch(`${server}/users/logout`, {
			method: 'POST',
			// mode: 'cors',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
				'Accept':       '*/*',
			}
		})
		setCurrentUser(null)
		setUid(null)
	}

  useEffect(() => {
   if (cookies.token)  {
		getUser()
		setLoading(false);
	 } else {
		 setCurrentUser(null)
		 setLoading(false);
	 }
  }, []);

  const value: any = {
    currentUser,
		login,
		logout,
		signUp,
		cookies,
		uid
  };

  return (
    <UserContext.Provider value={value}>
      {!loading && children}
    </UserContext.Provider>
  );
};
