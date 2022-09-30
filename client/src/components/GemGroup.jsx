import {useContext} from 'react'
import BoxLabel from './BoxLabel';
import styles from './GemGroup.module.css';
import RestrictionContext from '../context/RestrictionContext';


const GemGroup = (props) => {
    const { restrictions } = useContext(RestrictionContext);

    // const gems = props.gems.filter()

    return (
        <div>
            <BoxLabel text={props.title} />
            <div className={styles.contents}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default GemGroup
