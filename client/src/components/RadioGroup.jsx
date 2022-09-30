import React, { useId } from 'react';
import BoxLabel from './BoxLabel';
import styles from './RadioGroup.module.css';

const RadioGroup = (props) => {

    const id = useId();

    return (
        <div>
            <BoxLabel text={props.title} />
            <div className={styles.contents}>
                {
                    props.options.map((option, index) => {
                        return (
                            <div key={index}>
                                <input type="radio" name={props.title} id={id+index} value={option} checked={props.checked===option} onChange={(e)=>props.change(e.target.value)} />
                                <label htmlFor={id+index}>
                                    {option}
                                </label>
                                <br />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default RadioGroup
