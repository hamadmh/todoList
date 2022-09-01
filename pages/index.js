import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Form from '../comps/Form'

export default function Home() {
  return (
    <>
      <Head>
        <title>To-Do List</title>
      </Head>
      <div className={styles.title}>
        <Form></Form>
      </div>
    </>
    
  )
}
