import { createContext, useContext, useState } from "react";

const MessageContext = createContext<any | null>(null);

export const useMessage = () => {
  return useContext(MessageContext);
};

type Props = {
  children: JSX.Element,
};

export const MessageProvider = ({ children }: Props) => {
  const [message, setMessage] = useState("");

  const value: any = {
    message,
		setMessage
  };

  return (
    <MessageContext.Provider value={value}>
      {children}
    </MessageContext.Provider>
  );
};
