import React from 'react';
import styles from './popup.module.css';
import Button from '../button/Button';

const Popup = ({ isVisible, onClick }) => {
  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <h2>Add user</h2>
        <p>Fill fields according formats to add user</p>
        <Button text={"Upload"} del={false} onClick={onClick} />
      </div>
    </div>
  );
};

export default Popup;
