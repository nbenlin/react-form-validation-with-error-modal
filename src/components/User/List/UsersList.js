import React from "react";
import Card from "../../UI/Card/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} {user.surname} - {user.email} - {user.phone}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
