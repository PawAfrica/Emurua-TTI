import Faculties from "../components/sections/Faculties"
import LandingPage from "../components/sections/LandingPage"
import OurStory from "../components/sections/OurStory"
import Values from "../components/sections/Values"


const Home = () => {
  return (
    <div className='relative'>
      <LandingPage />
      <Values />
      <OurStory />
      <Faculties />
      {/* <About />
      <Belief />
      <HandsOn />
      <Courses />
      <Intakes />
      <Sport />
      <Partners />
      <News /> */}
    </div>
  )
}

export default Home
