import { Fragment, useState } from "react";
import MainHeader from "./components/Header/MainHeader/MainHeader";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Fragment>
      <MainHeader />
      <main>{isLoggedIn ? <Home /> : <Login />}</main>
    </Fragment>
  );
};

export default App;
