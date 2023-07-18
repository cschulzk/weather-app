import { AppContext } from '@/lib/context/AppContext';
import styles from './footer.module.css'
import { useContext } from 'react';
import { UnitsOfMeasursement } from '@/lib/context/contextTypes';

const UnitsPreferenceSelector = () => {
  const {units, setUnits} = useContext(AppContext);
  const usUnits: UnitsOfMeasursement = {system: "US", temperature: '°F', distance: 'mi'};
  const metricUnits: UnitsOfMeasursement = {system: "metric", temperature: '°C', distance: 'km'};
  return (
      <form>
        <fieldset className={styles.selectorContainer}>
          <legend>Units</legend>
            <div className={styles.radioButton}>
              <input 
                type='radio' 
                id='fahrenheit' 
                name='tempPreference' 
                checked={units.system==='US'} 
                onChange={() => setUnits(usUnits)}
              />
              &nbsp;
              <label htmlFor='fahrenheit'>US</label>
            </div>
            <div className={styles.radioButton}>
              <input 
                type='radio' 
                id='celsius' 
                name='tempPreference' 
                checked={units.system==='metric'} 
                onChange={() => setUnits(metricUnits)} 
              />
              &nbsp;
              <label htmlFor='celsius'>Metric</label>
            </div>
        </fieldset>
      </form>
  );
};

export default UnitsPreferenceSelector;