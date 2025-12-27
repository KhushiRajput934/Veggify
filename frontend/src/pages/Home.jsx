import Hero from '../components/Hero'
import AboutSection from './AboutSection'
import CategoryWrapper from './CategoryWrapper'
import FeaturedSection from './FeaturedSection'
import LatestRecipe from './LatestRecipe'
import NewsLetter from './NewsLetter'

const Home = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col justify-center items-center w-full py-20' >
        <Hero />
        <CategoryWrapper />
      </div>
       
       {/* Other Compontns */}
       <FeaturedSection />
       <LatestRecipe/>
       <NewsLetter />
       <AboutSection />
    </div>
  )
}

export default Home