import React, {useContext} from 'react';
import RestrictionContext from '../context/RestrictionContext';
import styles from './RestrictionsSummary.module.css';
import BoxLabel from './BoxLabel';

const RestrictionsSummary = () => {
    const { restrictions } = useContext(RestrictionContext);

  return (
    <div className={styles.restrictions}>
    <BoxLabel text={restrictions.Class} />
    <BoxLabel text={restrictions.Progression} />
    <BoxLabel text={restrictions.Mainhand} />
    <BoxLabel text={restrictions.Offhand} />
  </div>
  )
}

export default RestrictionsSummary