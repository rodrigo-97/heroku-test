import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Rodrigo
        <button  onClick={a} > alert </button>
      </main>
    </div>
  )
}


function a (){
  alert("rodrigo")
}