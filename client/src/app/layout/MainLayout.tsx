import { Outlet } from "react-router-dom"
import Nav from "../navigation/Nav"
import styles from './MainLayout.module.css'

function MainLayout() {
  return <main className={styles.main}>
    <nav className={styles.navigation}>
      <Nav/>
    </nav>
    <div className={styles.layoutContent}>
      <Outlet/>
    </div>
  </main>
} 

export default MainLayout