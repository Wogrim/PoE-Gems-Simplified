import React, { useState } from 'react'
import styles from './ViewActiveGems.module.css';
import RadioGroup from '../components/RadioGroup';
import GemGroup from '../components/GemGroup';

const categories = [
  "Attack",
  "Warcry",
  "Spell",
  "Totem",
  "Minion",
  "Trap",
  "Mine",
  "Brand",
  "Curse",
  "Mark",
  "Reservation",
  "Movement",
  "Guard",
  "Triggered"
]

const subcategories = {
  Attack: ["All"],
  Warcry: ["All"],
  Spell: ["Plain"],
  Totem: ["Plain","Slam Totems (Slam Attack + Earthbreaker Support)", "Ballista Totems (Bow/Wand Attack + Ballista Totem Support", "Spell Totems (Spell + Spell Totem Support)"],
  Minion: ["General","Golem"],
  Trap: ["Plain","Spell Traps (Spell + Trap Support)"],
  Mine: ["All","Spell Mines (Spell + ??? Support)"],
  Brand: ["Plain","Custom Brand (Spell + Arcanist Brand)"],
  Curse: ["All"],
  Mark: ["All"],
  Reservation: ["Aura","Herald","Other"],
  Movement: ["Cooldown","Spammable"],
  Guard: ["All"],
  Triggered: ["Cast When Hit"]
}

const ViewActiveGems = () => {

  const [ category, setCategory ] = useState("Attack");

  return (
    <>
      <div className={styles.main}>
        <RadioGroup title="Category" options={categories} checked={category}
          change={(newVal) => { setCategory(newVal); }} />
        <div className={styles.gemGroupContainer}>
          {
            subcategories[category].map((subcategory, index)=>{
              return (
                <GemGroup key={index} title={subcategory} />
              );
            })
          }
        </div>
      </div>
    </>
  )
}

export default ViewActiveGems
