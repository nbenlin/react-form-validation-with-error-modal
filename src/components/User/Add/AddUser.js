import React from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  return (
    <Card className={classes.input}>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" />
        </div>
        <div>
          <label htmlFor="surname">Surname</label>
          <input id="surname" type="text" />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input id="email" type="text" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
        </div>
        <div>
          <label htmlFor="phone">Telephone</label>
          <input id="phone" type="text" />
        </div>
        <Button>Submit</Button>
      </form>
    </Card>
  );
};

export default AddUser;
