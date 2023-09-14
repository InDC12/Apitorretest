
import styles from './page.module.css'
import ListOfUsers from './request/page.jsx'
import NameInput from './input/page'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navigation />
      <NameInput/>
    </main>
  )
}
