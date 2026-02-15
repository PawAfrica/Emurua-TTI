import Extras from '../components/sections/Extras'
import Faculties from '../components/sections/Faculties'
import Intakes from '../components/sections/Intakes'
import LandingPage from '../components/sections/LandingPage'
import OurStory from '../components/sections/OurStory'
import Values from '../components/sections/Values'

const Home = () => {
  return (
    <div className='relative'>
      <LandingPage />
      <Values />
      <OurStory />
      <Faculties />
      <Intakes />
      <Extras />
    </div>
  )
}

export default Home
