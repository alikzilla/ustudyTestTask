import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/logo.png" alt="Ustudy" width={100} />
      <h1>UStudy test task</h1>
    </header>
  );
};

export default Header;
