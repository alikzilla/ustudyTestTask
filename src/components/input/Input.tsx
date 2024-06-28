import styles from "./input.module.css";

const Input = ({ label, type, placeholder, onChange }) => {
  return (
    <section className={styles.inputWrapper}>
      <p>{label}</p>
      <input type={type} placeholder={placeholder} onChange={onChange} />
    </section>
  );
};

export default Input;
