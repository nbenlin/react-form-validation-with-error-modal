import React from "react";
import Card from "../../UI/Card/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
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
