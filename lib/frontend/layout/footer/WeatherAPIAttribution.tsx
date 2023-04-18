import Link from "next/link";
import Image from "next/image";
import styles from './footer.module.css'

const WeatherAPIAttribution = () => {
  return (
    <div className={styles.attribution}>
      Powered by
      <Link href='https://www.weatherapi.com/' passHref>
        <Image src='/weatherapi_logo.webp' alt='Weather API logo' width={107} height={50}/>
      </Link>
    </div>
  )
};

export default WeatherAPIAttribution;
