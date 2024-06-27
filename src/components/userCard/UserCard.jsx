import React from "react";
import styles from "./userCard.module.css";
import Button from "../button/Button";
import { userPhotos } from "../../store";

const UserCard = ({ id, name, address, email, phone, deleteUser }) => {
  const userPhoto = userPhotos[id - 1];

  return (
    <section className={styles.card}>
      {userPhoto && (
        <img className={styles.userImage} src={userPhoto.image} alt={name} />
      )}
      <div className={styles.userInfo}>
        <h1>{name}</h1>
        <p>{address}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
      <div className={styles.controls}>
        <Button text={"Edit"} />
        <Button text={"Delete"} del={true} onClick={deleteUser} />
      </div>
    </section>
  );
};

export default UserCard;
