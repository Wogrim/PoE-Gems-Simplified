import styles from './App.module.css';
import NavBar from './components/NavBar';
import ViewRestrictions from './views/ViewRestrictions';
import ViewActiveGems from './views/ViewActiveGems';
import ViewSupportGems from './views/ViewSupportGems';
import { useState } from 'react';
import RestrictionContext from './context/RestrictionContext';
import RestrictionsSummary from './components/RestrictionsSummary';

const defaultRestrictions = {
    Class: 'Scion',
    Progression: '38 - Kill Daresso & Kaom',
    Mainhand: 'Any',
    Offhand: 'Any',
}

function App() {
  const [restrictions, setRestrictions] = useState(defaultRestrictions);
  const [currentView, setCurrentView] = useState("R");

  const changeRestriction = (type, value) => {
    console.log(`changing ${type} to ${value}`);
    setRestrictions({...restrictions,[type]:value});
  }

  return (
    <div className={styles.App}>
      <RestrictionContext.Provider value={{restrictions, changeRestriction}}>
        <div>
          <NavBar currentView={currentView} setCurrentView={setCurrentView} />
          {currentView === 'R' ?
            <ViewRestrictions />
            : <RestrictionsSummary />
          }
          {currentView === 'A' ?
            <ViewActiveGems />
            : ""
          }
          {currentView === 'S' ?
            <ViewSupportGems />
            : ""
          }
        </div>
        <div>

        </div>
      </RestrictionContext.Provider>
    </div>
  );
}

export default App;
