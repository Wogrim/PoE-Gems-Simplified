import React from 'react';
import GemGroup from '../components/GemGroup';
import styles from './ViewSupportGems.module.css';


const ViewSupportGems = () => {

  return (
    <div className={styles.main}>
      <GemGroup title={"Compatible"} />
    </div>
  )
}

export default ViewSupportGems
