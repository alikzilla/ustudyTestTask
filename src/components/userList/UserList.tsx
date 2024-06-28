import styles from "./userList.module.css";
import UserCard from "../userCard/UserCard";
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, initializeUsers, removeUser, IUser } from "../../index";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users);

  const getUsers = useCallback(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: IUser[] = await response.json();
    return users;
  }, []);

  useEffect(() => {
    getUsers().then((response) => {
      dispatch(initializeUsers(response));
      console.log(users);
    });
  }, [dispatch, getUsers]);

  const deleteUser = (id: number) => {
    dispatch(removeUser(id));
  };

  return (
    <section className={styles.userList}>
      {users &&
        users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            address={`${user.address.street} ${user.address.suite}`}
            email={user.email}
            phone={user.phone}
            onClick={() => deleteUser(user.id)}
          />
        ))}
    </section>
  );
};

export default UserList;
