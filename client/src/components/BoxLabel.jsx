import React from 'react';
import styles from './BoxLabel.module.css';

const BoxLabel = (props) => {
  return (
    <div className={styles.BoxLabel}>
        <h3>{props.text}</h3>
        </div>
  )
}

export default BoxLabel