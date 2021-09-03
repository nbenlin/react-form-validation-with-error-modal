import { Fragment, useContext } from "react";
import MainHeader from "./components/Header/MainHeader/MainHeader";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import AuthContext from "./context/auth-context";

const App = () => {
  const ctx = useContext(AuthContext);
  return (
    <Fragment>
      <MainHeader />
      <main>{ctx.isLoggedIn ? <Home /> : <Login />}</main>
    </Fragment>
  );
};

export default App;
