import React from "react";
import Card from "../../UI/Card/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  const isFallback = props.users.length === 0;

  return (
    <Card className={classes.users}>
      <ul>
        {isFallback && <li className={classes.error}>There is no user</li>}
        {props.users.map((user) => (
          <li>
            <span>
              <strong>User:</strong> {user.name} {user.surname}
            </span>
            <span>
              <strong>Email:</strong> {user.email}
            </span>
            <span>
              <strong>Telephone:</strong> {user.phone}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
