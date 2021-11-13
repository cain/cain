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
        {/* <img src="/ch.svg" width="25px" class="mb-8" /> */}
        <div class=" mb-8">
          {/* <h2 class="font-bold">Cain Hall</h2> */}
          {/* <div className={styles.square}></div> */}
        </div>
        <p class="mb-2">Hey,</p>
        <p class="mb-2">
          Im a frontend developer, <a href="https://www.plannthat.com" target="_blank">working at @plann</a>.
        </p>
        <p class="font-semibold mb-5">My goal is to deliver a quality user experiences for amazing products I love.</p>
        <div className={styles.contact}>
          <a href="https://github.com/cain" target="_blank">Github</a>
          <a href="https://www.linkedin.com/in/cainhall/" target="_blank">Linkedin</a>
          <a href="mailto:me@cainhall.com.au" target="_blank">Email</a>
          <a href="https://cain.github.io/resume/" target="_blank">Resume</a>
        </div>
      </main>
    </div>
  )
}
