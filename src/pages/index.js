import Image from 'next/image'
import styles from './home.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <img src='/imgs/destino verde.png' width={500} />
    </main>
  )
}
