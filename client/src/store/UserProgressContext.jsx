/* eslint-disable react/prop-types */
import { useState, createContext } from "react";

const UserProgressContext = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckOut: () => {},
  hideCheckOut: () => {},
});

export function UserProgressContextProvider({ children }) {
  const [userProgress, setUserProgress] = useState("");

  function showCart() {
    setUserProgress("cart");
  }

  function hideCart() {
    setUserProgress("");
  }

  function showCheckOut() {
    setUserProgress("checkout");
  }

  function hideCheckOut() {
    setUserProgress("");
  }

  const userProgressCtxValue = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckOut,
    hideCheckOut,
  };

  return (
    <UserProgressContext value={userProgressCtxValue}>
      {children}
    </UserProgressContext>
  );
}

export default UserProgressContext;
