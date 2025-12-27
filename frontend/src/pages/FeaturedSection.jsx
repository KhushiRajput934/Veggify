import React from 'react'
import FeaturedImg from '../assets/featured.webp'

const FeaturedSection = () => {
  return (
    <div className='overflow-hidden flex md:flex-row flex-col justify-between items-center sm:my-20 m-4 md:gap-20 gap-12 px-5 lg:px-10'>
        <div className='relative'>
            <div className='absolute top-4 left-5 bg-white text(--color-secondary) px-3 py-1 rounded-md uppercase tracking-wider '>Featured Racipe</div>
            <img src={FeaturedImg} alt="Featured" className='rounded-md'/>
        </div>

        <div className='text-start sm:w-1/2'>
            <h2 className='text-3xl font-semibold text-(--color-secondary) sm:text-5xl sm:leading-relaxed '>Pineapple + smoked Jackfruit Pizza</h2>
            <p className='text-xl mt-4 text-[#5c5c5c]'>Pineapple + Smoked Jackfruit Pizza is a bold, plant-based twist on a classic favorite, balancing sweet, smoky, and savory flavors in every bite.🍕🍍!</p>
        </div>
    </div>
  )
}

export default FeaturedSection