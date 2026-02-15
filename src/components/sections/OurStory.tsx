// import { Button, Image, Text, Title } from '@mantine/core'
// import Story from '../../assets/story.png'

// const OurStory = () => {
//   return (
//     <div className='story flex mt-[4%] h-[80vh] px-[4%]'>
//       <div className='left w-full md:w-[40%] h-[100%] b-accent-300'>
//         <div className='outer-ring bg-black-900 h-[90%] w-[80%] rounded-3xl'>
//           <div className='image flex items-center justify-center h-full'>
//             <Image src={Story} className='w-[80%] z-10 rounded-2xl' />
//           </div>
//         </div>
//       </div>
//       <div className='right w-full md:w-[55%]'>
//         <Title>Our Story</Title>
//         <div className='story'>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
//           maiores quisquam quia deserunt commodi, expedita debitis error itaque,
//           repellat illum necessitatibus. Aliquam suscipit inventore eius,
//           debitis cumque magni autem voluptatem doloribus, quasi consectetur
//           adipisci, rerum sed facere atque ducimus maiores.
//         </div>
//       </div>
//     </div>
//   )
// }

// export default OurStory

import { Button, Image, Text, Title } from '@mantine/core'
import { Link } from 'react-router-dom'
import Story from '../../assets/story.png'

const OurStory = () => {
  return (
    <div className='story flex flex-col md:flex-row mt-[4%] px-[4%] py-10 md:h-[90vh] gap-10'>
      {/* Left Image */}
      {/* <div className='left w-full md:w-[40%] flex justify-center items-center'>
        <div className='outer-ring bg-black-900 h-[100%] md:w-[80%] rounded-3xl flex items-center justify-center shadow-lg'>
          <Image src={Story} className='w-[90%] md:w-[80%] rounded-2xl z-10' />
        </div>
      </div> */}

      <div className='left w-full md:w-[40%] flex justify-center items-center py-6'>
        <div
          className='outer-ring relative bg-black-900 rounded-[2rem] flex items-center justify-center shadow-lg
                  w-90 h-100 md:w-[90%] md:h-[110%]'
        >
          <div className='inner-image w-3/4 h-3/4 md:w-4/5 md:h-4/5 rounded-xl overflow-hidden'>
            <Image
              src={Story}
              alt='Story Image'
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </div>

      {/* Right Text */}
      <div className='right w-full md:w-[55%] flex flex-col justify-center gap-6'>
        <Title className='text-5xl md:text-5xl text-black-800 mb-1'>
          Our Story
        </Title>

        {/* Subsection: Origins */}
        <div>
          <Text className='text-xl font-semibold mb-2'>Origins</Text>
          <Text className='text-text-500 leading-relaxed'>
            Emurua Dikirr TTI was conceived with the vision of empowering local
            communities with practical skills and knowledge. Founded in 2020,
            the institute has steadily grown into a hub for technical and
            vocational excellence.
          </Text>
        </div>

        {/* Subsection: Growth & Mission */}
        <div>
          <Text className='text-xl font-semibold mb-2'>Growth & Mission</Text>
          <Text className='text-text-500 leading-relaxed'>
            Over the years, we have expanded our programs and facilities to meet
            the growing demands of industry. Our mission is to provide hands-on
            training, foster innovation, and prepare students for successful
            careers in technical fields.
          </Text>
        </div>

        {/* Read More Button */}
        <div className='mt-4'>
          <Link to='/about'>
            <Button
              variant='outline'
              className='primary-btn bg-black-700 text-white rounded-full'
              //   className="border-3 border-secondary-500 text-primary-500 h-[3.2em] md:w-[30%]"
            >
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OurStory
