import styles from "./userCard.module.css";
import Button from "../button/Button";
import { userPhotos } from "../../store";

interface UserPhoto {
  image: string;
}

const UserCard = ({ id, name, address, email, phone, onClick }) => {
  const userPhoto: UserPhoto = userPhotos[id - 1] || { image: "" };
  const lastPhoto: UserPhoto = userPhotos[userPhotos.length - 1] || { image: "" };
  const photoSrc = userPhoto.image ? userPhoto.image : lastPhoto.image;

  return (
    <section className={styles.card}>
      <img className={styles.userImage} src={photoSrc} alt={name} />
      <div className={styles.userInfo}>
        <h1>{name}</h1>
        <p>{address}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
      <div className={styles.controls}>
        <Button text={"Edit"} del={false} onClick={null} />
        <Button text={"Delete"} del={true} onClick={onClick} />
      </div>
    </section>
  );
};

export default UserCard;