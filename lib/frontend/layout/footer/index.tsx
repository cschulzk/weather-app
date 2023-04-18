import UnitsPreferenceSelector from "./UnitsPreferenceSelector";
import WeatherAPIAttribution from "./WeatherAPIAttribution";
import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.appFooter}>
      <UnitsPreferenceSelector/>
      <WeatherAPIAttribution />
    </footer>
  );
};

export default Footer;
