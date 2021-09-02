import { Fragment } from "react";
import MainHeader from "./components/Header/MainHeader/MainHeader";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <Fragment>
      <MainHeader />
      <main>
        <Home />
        <Login />
      </main>
    </Fragment>
  );
};

export default App;
