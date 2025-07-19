import { Outlet } from "react-router-dom"
import Nav from "../navigation/Nav"
import './MainLayout.css'

function MainLayout() {
  return <main>
    <nav className='navigation'>
      <Nav/>
    </nav>
    <div className="content">
      <Outlet/>
    </div>
  </main>
} 

export default MainLayout