import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DesktopNav from './DesktopNav'
import logo from '../assets/logo.svg'
import MobileNav from './MobileNav'

const Header = () => {
    const [hideLeft, setHideLeft] = useState("translate-x-full")
    const menuItems = ['recipes', 'addrecipe']

    const token = localStorage.getItem("token")
    const navigate = useNavigate()

    const onOpen = () => {
        setHideLeft("translate-x-0")
    }
    const onClose = () => {
        setHideLeft("translate-x-full")
    }

    const handleLogout = () => {
        localStorage.removeItem("token")
        alert("Logged out successfully")
        navigate("/login")
    }

  return (
    <>
        <div className='max-[900px]:hidden'>
            <DesktopNav menuItems={menuItems}
            logo={logo}
            token={token}
            onLogout={handleLogout}
             />
        </div>
        <div className='min-[900px]:hidden'>
            <MobileNav menuItems={menuItems}
            logo={logo}
            onClose={onClose}
            hideLeft={hideLeft}
            onOpen={onOpen}
            token={token}
            onLogout={handleLogout}
            />
        </div>
    </>
  )
}

export default Header