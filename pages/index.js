import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cain Hall</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <h2>
          Hey, Cain here. testing
        </h2>
        <p>
          A frontend dev in Sydney, working at <a href="https://www.plannthat.com" target="_blank">@plann</a>
        </p>
        <div className={styles.contact}>
          <a href="https://github.com/cain" target="_blank">Github</a>
          <a href="https://www.linkedin.com/in/cainhall/" target="_blank">Linkedin</a>
          <a href="mailto:cainh8@gmail.com" target="_blank">Email</a>
        </div>
      </main>
    </div>
  )
}
