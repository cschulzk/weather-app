import Head from 'next/head'
import AppProvider from '@/lib/context/AppContext'
import Footer from './footer';
import Header from './Header';
import styles from './layout.module.css'

// This is a generalized layout template for all pages.
// This facilitates faster creation of future pages on this app.
const Layout = ({children}: {children: JSX.Element | JSX.Element[]}) => {
  return (
    <>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="A simple weather app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/weather/64x64/day/113.png" />
      </Head>
      <AppProvider>
        <Header />
        <main className={styles.appContent}>
          {children}
        </main>
        <Footer />
      </AppProvider>
    </>
  )
}

export default Layout;
