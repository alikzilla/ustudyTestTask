import styles from "./userList.module.css";
import UserCard from "../userCard/UserCard";
import { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let ignore = false;
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      if (!ignore) {
        setUsers(data);
      }
    })

    return () => { ignore = true }
  },[])

  return (
    <section>
      {users.map((user, index) => (
        <UserCard key={user.id} name={user.name} address={`${user.address.street} ${user.address.suite}`} email={user.email} phone={user.phone} />
      ))}
    </section>
  );
};

export default UserList;