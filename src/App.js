import { Fragment, useEffect, useState } from "react";
import MainHeader from "./components/Header/MainHeader/MainHeader";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import AuthContext from "./context/auth-context";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}
    >
      <MainHeader />
      <main>{isLoggedIn ? <Home /> : <Login onLogin={loginHandler} />}</main>
    </AuthContext.Provider>
  );
};

export default App;
