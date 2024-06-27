import styles from "./header.module.css";
import Button from "../button/Button";

const Header = ({ onClick }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Ustudy" width={100} />
        <h1>UStudy test task</h1>
      </div>
      <Button text={"Add user"} del={false} onClick={onClick} />
    </header>
  );
};

export default Header;