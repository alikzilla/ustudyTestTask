import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, initializeUsers, removeUser, IUser } from "../../index";
import styles from "./userList.module.css";
import UserCard from "../userCard/UserCard";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 6;

  const getUsers = useCallback(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: IUser[] = await response.json();
    return users;
  }, []);

  useEffect(() => {
    getUsers().then((response) => {
      dispatch(initializeUsers(response));
    });
  }, [dispatch, getUsers]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const deleteUser = (id: number) => {
    dispatch(removeUser(id));
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  const nextPage = () => {
    if (currentPage < pageNumbers.length) {
      paginate(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  return (
    <div className={styles.userListWrapper}>
      <section className={styles.userList}>
        {currentUsers &&
          currentUsers.map((user) => (
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
      <nav className={styles.paginationNav}>
        <button
          onClick={prevPage}
          className={styles.pageButton}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <ul className={styles.pagination}>
          {pageNumbers.map((number) => (
            <li key={number} className={styles.pageItem}>
              <button
                onClick={() => paginate(number)}
                className={styles.pageLink}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={nextPage}
          className={styles.pageButton}
          disabled={currentPage === pageNumbers.length}
        >
          Next
        </button>
      </nav>
    </div>
  );
};

export default UserList;
