import React from 'react'
import AboutImg from '../assets/about.jpg'

const AboutSection = () => {
  return (
    <div className='overflow-hidden flex md:flex-row flex-col justify-between items-center sm:my-20 m-4 md:gap-20 gap-12 px-5 lg:px-10'>

        <div className='text-start sm:w-1/2'>
            <h2 className='text-3xl font-semibold text-(--color-secondary) sm:text-5xl sm:leading-relaxed '>Vegan foodie who loves to experiment with recipes</h2>
            <p className='text-xl mt-4 text-[#5c5c5c]'>A passionate vegan foodie who loves experimenting with plant-based recipes, creatively combining fresh ingredients, bold flavors. <br /> <br /> And global cuisines to craft nutritious, delicious meals while exploring innovative cooking techniques and healthy food choices. 🌱🍽️</p>
        </div>

        <div>
            <img src={AboutImg} alt="Featured" className='rounded-md'/>
        </div>
    </div>
  )
}

export default AboutSection