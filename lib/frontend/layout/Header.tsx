import Link from 'next/link';
import styles from './layout.module.css'

const Header = () => {
  return (
    <header className={styles.siteHeader}>
      <Link href="/">
        <h1>Weather App</h1>
      </Link>
    </header>
  )
};

export default Header;
