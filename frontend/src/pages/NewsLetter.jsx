import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full md:w-2/3 mx-auto flex flex-col items-center p-10'>
        <h3 className='text(--color-secondary) font-semibold text-center text-4xl'>Sign up for my weekly newsletter!</h3>
        <p className='mt-6 text-gray-600 text-lg text-center leading-normal font-light'>
            Weekly emails with my latest recipes, cookinng tips and tricks and product recomendations! 
           <br /> You'll be set up in minutes.
        </p>

        <div className='mt-6 flex flex-col md:flex-row items-center justify-center w-full md:px-8 gap-4 mb-20'>
            <input type="text" placeholder='Name' className='flex grow px-4 py-4 rounded bg-gray-200 text-gray-400 outline-none placeholder:text-[#1b2629]' />
            <input type="text" placeholder='Email Address' className='flex grow px-4 py-4 rounded bg-gray-200 text-gray-400 outline-none placeholder:text-[#1b2629]' />
            <button className='mt-2 md:mt-0 md:ml-2 bg-red-300 hover:text-gray-800 outline-none hover:border hover:border-red-400 hover:bg-[#f9f7f3] text-white shadow-lg rounded px-8 py-4 cursor-pointer'>Get Started</button>
        </div>
    </div>
  ) 
}

export default NewsLetter