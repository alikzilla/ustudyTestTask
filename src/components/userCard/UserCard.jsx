import styles from "./userCard.module.css";

const UserCard = ({ name, address, email, phone }) => {
  return (
    <section className={styles.card}>
      <img className={styles.userImage} src="" alt={name} />
      <h1>{name}</h1>
      <p>{address}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </section>
  );
}

export default UserCard;