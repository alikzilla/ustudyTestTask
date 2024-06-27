import { FC } from "react";
import styles from "./button.module.css";

interface IButtonProps {
  text: string,
  del: boolean,
  onClick: React.MouseEventHandler
}

const Button: FC<IButtonProps> = ({ text, del, onClick }) => {
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
