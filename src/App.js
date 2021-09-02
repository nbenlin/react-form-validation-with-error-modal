import { Fragment, useEffect, useState } from "react";
import MainHeader from "./components/Header/MainHeader/MainHeader";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

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
    <Fragment>
      <MainHeader isAuth={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {isLoggedIn ? (
          <Home onLogout={logoutHandler} />
        ) : (
          <Login onLogin={loginHandler} />
        )}
      </main>
    </Fragment>
  );
};

export default App;
