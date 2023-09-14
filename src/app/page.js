
import styles from './page.module.css'
import ListOfUsers from './request/page.jsx'
import NameInput from './input/page'

export default function Home() {
  return (
    <main className={styles.main}>
      <NameInput/>
    </main>
  )
}
