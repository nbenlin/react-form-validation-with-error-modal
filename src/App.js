import { useState } from "react";
import AddUser from "./components/User/Add/AddUser";
import UsersList from "./components/User/List/UsersList";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    /* Update the state by taking the old list
      and appending a new element to it
      function for set usersList in setUsersList 
      that function will automaticly get the previous 
      latest state snapshot when react performes that
      state update here and therefor I'll named it
      prevUsersList and then return new state
      snapshot in the body of this anonymous function 
      in setUsersList
    */
    setUsersList((prevUsersList) => {
      /* Here I'll return an array, first of all 
      copy all elements from prevUsersList
      with ...prevUsersList (thats the spread operator)
      and then I add one new element at the end, I add 
      a new JS object with name field and age field
      */

      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
};

export default App;
