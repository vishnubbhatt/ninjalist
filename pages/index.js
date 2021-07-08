import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas'/>
      </Head>
      <div>
        <header>
          <h1 className={styles.title}>Home Page</h1>
        </header>
        <p className={styles.text}>
          Sit officia laborum amet ex esse. Quis Lorem adipisicing anim magna adipisicing commodo sit sint esse consequat laboris id. Do nisi est fugiat ut mollit ea voluptate aliquip laboris voluptate.
        </p>
        <p className={styles.text}>
          Sit officia laborum amet ex esse. Quis Lorem adipisicing anim magna adipisicing commodo sit sint esse consequat laboris id. Do nisi est fugiat ut mollit ea voluptate aliquip laboris voluptate.
        </p>
        <Link href='/ninjas'>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
