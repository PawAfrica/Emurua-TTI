import { Image, Text, Title} from '@mantine/core'

import Football from '../../assets/football.png'
import Netball from '../../assets/netball.png'
import Basketball from '../../assets/basketball.png'

const Extras = () => {
  return (
    <div className='extras px-[4%] h-auto'>
      <Title className='text-[2.5em] md:text-[2.9em] mb-8'>
        There is <span className='text-claret-800'>more to learning</span>{' '}
        <span>...</span>
      </Title>

      {/* <div className='images-section h-auto md:h-[80%] flex flex-col md:flex-row gap-4 overflow-hidden'>
       
        <div className='relative w-full md:w-[65%] h-[250px] md:h-full overflow-hidden rounded-2xl'>
          <Image src={Football} className='w-full h-full object-cover' />

 
          <div className='absolute inset-0 bg-gradient-to-tr from-black-800 via-transparent    to-transparent'></div>

        
          <Text className='absolute bottom-4 left-4 text-white text-xl md:text-2xl font-bold z-10'>
            Football
          </Text>
        </div>

        
        <div className='w-full md:w-[35%] flex flex-col gap-4'>

          <div className='relative h-[200px] md:h-1/2 overflow-hidden rounded-2xl'>
            <Image src={Netball} className='w-full h-full object-cover' />

            <div className='absolute inset-0 bg-gradient-to-tr from-black-800 via-transparent to-transparent'></div>

            <Text className='absolute bottom-4 left-4 text-white text-lg md:text-xl font-bold z-10'>
              Netball
            </Text>
          </div>

          
          <div className='relative h-[200px] md:h-1/2 overflow-hidden rounded-2xl'>
            <Image src={Basketball} className='w-full h-full object-cover' />

            <div className='absolute inset-0 bg-gradient-to-tr from-black-800 via-transparent to-transparent'></div>

            <Text className='absolute bottom-4 left-4 text-white text-lg md:text-xl font-bold z-10'>
              Basketball
            </Text>
          </div>
        </div>
      </div> */}

      <div className='images-section flex flex-col md:flex-row gap-4'>
  {/* Left Large Image */}
  <div className='relative w-full md:w-[65%] h-[250px] md:h-[420px] overflow-hidden rounded-2xl'>
    <Image src={Football} className='w-full h-full object-cover' />

    {/* Gradient Overlay */}
    <div className='absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-transparent'></div>

    {/* Text */}
    <Text className='absolute bottom-4 left-4 text-white text-xl md:text-2xl font-bold z-10'>
      Football
    </Text>
  </div>

  {/* Right Column */}
  <div className='w-full md:w-[35%] flex flex-col gap-4 md:h-[420px]'>
    {/* Netball */}
    <div className='relative h-[200px] md:h-1/2 overflow-hidden rounded-2xl'>
      <Image src={Netball} className='w-full h-full object-cover' />

      <div className='absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-transparent'></div>

      <Text className='absolute bottom-4 left-4 text-white text-lg md:text-xl font-bold z-10'>
        Netball
      </Text>
    </div>

    {/* Basketball */}
    <div className='relative h-[200px] md:h-1/2 overflow-hidden rounded-2xl'>
      <Image src={Basketball} className='w-full h-full object-cover' />

      <div className='absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-transparent'></div>

      <Text className='absolute bottom-4 left-4 text-white text-lg md:text-xl font-bold z-10'>
        Basketball
      </Text>
    </div>
  </div>
</div>


      <div className='text-section mt-8 text-left max-w-3xl mb-1 '>
        {/* Divider */}
        <div className='w-20 h-[3px] bg-claret-800 -auto mb-6 rounded-full'></div>

        {/* Message */}
        <Text className='text-lg md:text-xl text-gray-700 leading-relaxed pb-2'>
          At our institution, education goes beyond the classroom. We nurture
          teamwork, leadership, discipline, and talent through vibrant
          co-curricular activities that shape well-rounded professionals.
        </Text>

     
      </div>
    </div>
  )
}

export default Extras
