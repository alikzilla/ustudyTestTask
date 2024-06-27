import React from 'react';
import styles from './popup.module.css';
import Button from '../button/Button';

const Popup = ({ isVisible, onClick }) => {
  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <h2>Popup Title</h2>
        <p>This is the content of the popup</p>
        <Button text={"Upload"} onClick={onClick} />
      </div>
    </div>
  );
};

export default Popup;
