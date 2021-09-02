import React from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

const Login = (props) => {
  return (
    <Card>
      <form>
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="text" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div>
          <Button>Login</Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
