import styles from "./popup.module.css";
import Input from "../input/Input";
import Button from "../button/Button";

const Popup = ({
  isVisible,
  onClick,
  onChangeName,
  onChangeStreet,
  onChangeSuite,
  onChangeEmail,
  onChangePhone,
}) => {
  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <h2>Add user</h2>
        <p>Fill fields according formats to add user</p>
        <Input
          label={"Name"}
          type={"text"}
          placeholder={"Write your name"}
          onChange={onChangeName}
        />
        <div className={styles.addressInputWrapper}>
          <Input
            label={"Street"}
            type={"text"}
            placeholder={"Write your street"}
            onChange={onChangeStreet}
          />
          <Input
            label={"Suite"}
            type={"text"}
            placeholder={"Write your suite"}
            onChange={onChangeSuite}
          />
        </div>
        <Input
          label={"Email"}
          type={"email"}
          placeholder={"Write your email"}
          onChange={onChangeEmail}
        />
        <Input
          label={"Phone"}
          type={"text"}
          placeholder={"Write your phone"}
          onChange={onChangePhone}
        />
        <Button text={"Upload"} del={false} onClick={onClick} />
      </div>
    </div>
  );
};

export default Popup;
