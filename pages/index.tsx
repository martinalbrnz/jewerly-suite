import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Management Suite</title>
        <meta name="Management suite" content="Management application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1>Coso mas principal</h1>
      </header>

      <footer className={styles.footer}>
        <h3>coso</h3>
        <h3>coso</h3>
        <h3>coso</h3>
      </footer>
    </>
  )
}
