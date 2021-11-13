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
          {/* <h1 class="font-bold">Cain Hall</h1> */}
          {/* <a class="mr-2">writing</a>
          <a class="mr-2">about</a>
          <a class="mr-2">photos</a> */}
        </div>
        <p class="mb-2">Hey.</p>
        <p class="mb-5">
          I'm a frontend developer, <a href="https://www.plannthat.com" target="_blank">working at @plann</a>. We help build tools for people/businesses to connect and with their audience.
        </p>
        <h2 class="font-semibold mb-5">My goal is to deliver a quality user experience for amazing products I love.</h2>
        {/* <div className={styles.contact}>
          <a href="https://github.com/cain" target="_blank">github</a>
          <a href="https://www.linkedin.com/in/cainhall/" target="_blank">linkedin</a>
          <a href="mailto:me@cainhall.com.au" target="_blank">email</a>
          <a href="https://cain.github.io/resume/" target="_blank">resume</a>
        </div> */}
        {/* <h3 class="font-bold mt-5 mb-2">Some Writings:</h3>
        <ul class="list-disc pl-8">
          <li><a>Nuxt 2 with eslint vs code formatting</a></li>
          <li><a>Testing location date formatting with Chrome</a></li>
          <li><a>Improving performance with VueJS components</a></li>
        </ul> */}
      </main>
    </div>
  )
}
