import React from 'react'
import Logo from '../assets/logo.svg'
import { FiMail } from 'react-icons/fi'
import { FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/5 text-gray-600'>
      {/* Top Section */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-12 py-12 border-b border-gray-300/30'>
        {/* Brand */}
        <div>
          <img src={Logo} alt='Veggify logo' className='w-36'/>
          <p className='max-w-sm mt-5 text-md leading-relaxed'>
            Veggify is a modern recipe book platform for plant-based lovers, offering curated vegan recipes with clear steps, prep times, and creative cooking inspiration.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='text-base font-semibold text-gray-800 mb-4'>Quick Links</h3>
          <ul className='space-y-2 text-sm'>
            <li className='hover:text-primary cursor-pointer'>Home</li>
            <li className='hover:text-primary cursor-pointer'>Recipes</li>
            <li className='hover:text-primary cursor-pointer'>Categories</li>
            <li className='hover:text-primary cursor-pointer'>About Us</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className='text-base font-semibold text-gray-800 mb-4'>Stay Updated</h3>
          <p className='text-sm mb-4'>Subscribe for new vegan recipes and updates.</p>
          <div className='flex items-center gap-2'>
            <input
              type='email'
              placeholder='Enter your email'
              className='w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/40'
            />
            <button className='px-4 py-2 bg-primary text-white text-sm rounded-lg hover:opacity-90'>
              <FiMail size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='flex flex-col md:flex-row items-center justify-between gap-4 py-6 text-sm'>
        <p className='text-center md:text-left'>© 2025 Veggify. All rights reserved.</p>
        <div className='flex gap-4 text-lg'>
          <a href='#' className='hover:text-primary'><FaInstagram /></a>
          <a href='#' className='hover:text-primary'><FaTwitter /></a>
          <a href='#' className='hover:text-primary'><FaGithub /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
