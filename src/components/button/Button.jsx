import styles from "./button.module.css";

const Button = ({ text, del, onClick }) => {
  return (
    <section>
      <button
        className={`${styles.button} ${del ? styles.delete : styles.normal}`}
        onClick={onClick}
      >
        {text}
      </button>
    </section>
  );
};

export default Button;
