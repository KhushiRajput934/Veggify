import React from 'react'
import { HiBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import {Link} from 'react-router-dom'

const MobileNav = ({menuItems, logo, onClose, hideLeft, onOpen, token, onLogout}) => {
  return (
    <div className='h-16 flex justify-between items-center px-6 lg:px-12'>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <button className='border border-(--color-primary) rounded cursor-pointer' onClick={onOpen}>
            <HiBars3BottomRight  className='w-7 h-7'/>
        </button>

        <div className={`transition-all w-full h-full fixed bg-(--color-primary) z-50 top-0 ${hideLeft} flex justify-center items-center`}> 
            <button className='absolute right-8 top-32' onClick={onClose}>
                <RxCross2 className='w-7 h-7' />
            </button>

            <div>
              <ul className='flex flex-col gap-5' >
                {
                  menuItems?.map((menu, index) => (
                    <li key={index}>
                      <Link to={menu} className='font-medium capitalize text-(--color-secondary) text-2xl' >{menu}</Link>
                    </li>
                  ))
                }
              </ul>

              {/* login and sign up button */}
              {!token && (
                <ul className='flex items-center gap-4 font-medium mt-10'>
                  <li>
                    <button className='text-(--color-secondary) px-4 py-2 rounded border'>Log In</button>
                  </li>
                  
                  <li>
                    <button className='text-(--color-secondary) px-4 py-2 rounded border'>Sign Up</button>
                  </li>
                </ul>
              )}

              {token && (
                <button
                  onClick={onLogout}
                  className="text-(--color-secondary) px-4 py-2 rounded border"
                >
                  Logout
                </button>
              )}
            </div>
        </div>
    </div>
  )
}

export default MobileNav