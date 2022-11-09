import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from 'react-cookie';

// export const UserContext = createContext<AppContextInterface | null>(null);
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

  const [cookies, setCookie, removeCookie] = useCookies(['token']);

	const getUser = async () => {
    const a = await fetch(`${server}/validate`, {
      method: 'GET',
      // mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Accept':       '*/*',
      },
    })
    const res = await a.json()
    setCurrentUser(res.user)
  }

	const login = async (data: any) => {
		await fetch(`${server}/users/login`, {
			method: 'POST',
			// mode: 'cors',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
				'Accept':       '*/*',
			},
			body: JSON.stringify(data)
		})
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
		cookies
  };

  return (
    <UserContext.Provider value={value}>
      {!loading && children}
    </UserContext.Provider>
  );
};
