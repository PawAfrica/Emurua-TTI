import { Card, Image, Text, Title, Button } from '@mantine/core'

import Football from '../../assets/football.png'
import Netball from '../../assets/netball.png'
import Basketball from '../../assets/basketball.png'

const Extras = () => {
  return (
    <div className='extras px-[4%] h-[90vh] mb-10'>
      <Title className='text-[2.5em] md:text-[2.9em] mb-8'>
        There is <span className='text-claret-800'>more to learning</span>{' '}
        <span>...</span>
      </Title>

      {/* <div className='images-section h-[80%] flex gap-4 overflow-hidden'>
   
        <div className='left w-[65%] h-full overflow-hidden rounded-2xl'>
          <Image src={Football} className='w-full h-full object-cover' />
          <Text>Football</Text>
          <div className="overlay"></div>
        </div>


        <div className='right w-[35%] h-full flex flex-col gap-4'>
          <div className='h-1/2 overflow-hidden rounded-2xl'>
            <Image src={Netball} className='w-full h-full object-cover' />
            <Text>Netball</Text>
            <div className="overlay"></div>
          </div>

          <div className='h-1/2 overflow-hidden rounded-2xl'>
            <Image src={Basketball} className='w-full h-full object-cover' />
            <Text>Basketball</Text>
            <div className="overlay"></div>
          </div>
        </div>
      </div> */}

      <div className='images-section h-auto md:h-[80%] flex flex-col md:flex-row gap-4 overflow-hidden'>
  
  {/* Left Large Image */}
  <div className='relative w-full md:w-[65%] h-[250px] md:h-full overflow-hidden rounded-2xl'>
    
    <Image
      src={Football}
      className='w-full h-full object-cover'
    />

    {/* Gradient Overlay */}
    <div className='absolute inset-0 bg-gradient-to-tr from-black-800 via-transparent    to-transparent'></div>

    {/* Text */}
    <Text className='absolute bottom-4 left-4 text-white text-xl md:text-2xl font-bold z-10'>
      Football
    </Text>
  </div>

  {/* Right Column */}
  <div className='w-full md:w-[35%] flex flex-col gap-4'>
    
    {/* Netball */}
    <div className='relative h-[200px] md:h-1/2 overflow-hidden rounded-2xl'>
      
      <Image
        src={Netball}
        className='w-full h-full object-cover'
      />

      <div className='absolute inset-0 bg-gradient-to-tr from-black-800 via-transparent to-transparent'></div>

      <Text className='absolute bottom-4 left-4 text-white text-lg md:text-xl font-bold z-10'>
        Netball
      </Text>
    </div>

    {/* Basketball */}
    <div className='relative h-[200px] md:h-1/2 overflow-hidden rounded-2xl'>
      
      <Image
        src={Basketball}
        className='w-full h-full object-cover'
      />

      <div className='absolute inset-0 bg-gradient-to-tr from-black-800 via-transparent to-transparent'></div>

      <Text className='absolute bottom-4 left-4 text-white text-lg md:text-xl font-bold z-10'>
        Basketball
      </Text>
    </div>

  </div>
</div>


    </div>
  )
}

export default Extras









