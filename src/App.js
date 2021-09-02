import { Fragment, useState } from "react";
import MainHeader from "./components/Header/MainHeader/MainHeader";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
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
