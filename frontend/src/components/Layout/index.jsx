import { Outlet } from "react-router-dom"
import Footer from "../Footer"
import Nav from "../Nav"

const Layout = () => {
  return (
    <>
    <Nav/>
    <div className="main-content">
        <Outlet />
    </div>
    <Footer/>
    </>
  )
}

export default Layout