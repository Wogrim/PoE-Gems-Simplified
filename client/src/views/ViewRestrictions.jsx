import React from 'react';
import { useContext } from 'react';
import RadioGroup from '../components/RadioGroup';
import RestrictionContext from '../context/RestrictionContext';
import styles from './ViewRestrictions.module.css';

const classes = [
    "Marauder",
    "Duelist",
    "Ranger",
    "Shadow",
    "Witch",
    "Templar",
    "Scion"
]

const progressions = [
    "1 - Kill Hillock",
    "1 - Tidal Island Quest",
    "4 - Arrive @ Submerged Passage",
    "8 - Arrive @ Prison",
    "10 - Kill Brutus",
    "12 - Arrive @ Cavern of Wrath",
    "16 - Save Helena",
    "18 - Kill Weaver",
    "24 - Find Tolman",
    "28 - Kill Gravicius",
    "31 - Library Quest",
    "34 - Break the Seal",
    "38 - Kill Daresso & Kaom",
]

const mainhands = [
    "Unarmed",
    "Claw",
    "Dagger",
    "Sword",
    "Axe",
    "Mace",
    "Sceptre",
    "Staff",
    "Wand",
    "Bow",
    "Any"
]

const offhands = [
    "None / 2H",
    "Shield",
    "Dual Wield",
    "Any"
]

const ViewRestrictions = (props) => {
    const { restrictions, changeRestriction } = useContext(RestrictionContext);

    return (
        <div className={styles.ViewRestrictions}>
            <RadioGroup title="Class" options={classes} checked={restrictions.Class}
                change={(newVal) => { changeRestriction('Class', newVal); }} />
            <RadioGroup title="Progression" options={progressions} checked={restrictions.Progression}
                change={(newVal) => { changeRestriction('Progression', newVal); }} />
            <RadioGroup title="Mainhand" options={mainhands} checked={restrictions.Mainhand}
                change={(newVal) => { changeRestriction('Mainhand', newVal); }} />
            <RadioGroup title="Offhand" options={offhands} checked={restrictions.Offhand}
                change={(newVal) => { changeRestriction('Offhand', newVal); }} />
        </div>
    )
}

export default ViewRestrictions
