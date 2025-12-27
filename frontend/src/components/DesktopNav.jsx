import React from 'react'
import {Link} from 'react-router-dom'

const DesktopNav = ({menuItems, logo, token, onLogout}) => {
  return (
    <div className='h-16 flex justify-between items-center px-6 lg:px-12 '>
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <ul className='flex gap-7'>
        {
          menuItems?.map((menu, index) => (
            <li key={index}>
              <Link to={menu} className='font-medium capitalize text-(--color-secondary)'>{menu}</Link>
            </li>
          ))
        }
      </ul>

      {/* login and sign up button */}
      {!token && (
        <ul className="flex items-center gap-4 font-medium">
          <li>
            <Link
              to="/login"
              className="text-(--color-secondary) px-4 py-2 rounded border"
            >
              Log In
            </Link>
          </li>

          <li>
            <Link
              to="/signup"
              className="text-(--color-secondary) px-4 py-2 rounded border"
            >
              Sign Up
            </Link>
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
  )
}

export default DesktopNav