// import { Button, Image, Text, Title } from '@mantine/core'

// const Values = () => {
//   return (
//     <div className='values bg-primary-900 text-white px-[4%] pt-10 h-[50vh]'>
//       <div className='title'>
//         <Title className='text-[3.3em]'>Our Values</Title>
//       </div>

//       <div className='lower flex mt-[3em] '>
//         <div className='vision border-r-white'>
//           <Text className='text-[1.5em] font-bold'>Vision</Text>
//           <div className='text'>Lorem ipsum dolor sit amet consectetur.</div>
//         </div>
//         <div className='Motto'>
//           <Text>Motto</Text>
//           <div className='text'>Lorem ipsum dolor sit amet consectetur.</div>
//         </div>
//         <div className='Mission'>
//           <Text>Mission</Text>
//           <div className='text'>Lorem ipsum dolor sit amet consectetur.</div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Values



import { Button, Image, Text, Title } from '@mantine/core'

const Values = () => {
  return (
    <div className="values bg-primary-900 text-white px-[4%] pt-10 pb-12">
      {/* Title */}
      <div className="title text-left">
        <Title className="text-[3em] md:text-[3.5em] font-bold">Our Values</Title>
        {/* <Text className="mt-4 text-lg md:text-xl max-w-2xl ">
          We are committed to excellence, integrity, and empowering our students to achieve their goals.
        </Text> */}
      </div>

      {/* Values Section */}
      <div className="lower flex flex-col md:flex-row justify-between mt-10 gap-10">
        {/* Vision */}
        <div className="vision flex-1 border-b md:border-b-0 md:border-r border-white pb-6 md:pb-0 md:pr-6">
          <Text className="text-[1.5em] font-bold mb-2">Vision</Text>
          <Text>
            To be a leading institution in technical training, empowering students with skills for a better future.
          </Text>
        </div>

        {/* Motto */}
        <div className="motto flex-1 border-b md:border-b-0 md:border-r border-white pb-6 md:pb-0 md:px-6">
          <Text className="text-[1.5em] font-bold mb-2">Motto</Text>
          <Text>
            Knowledge, Skill, and Excellence – guiding every student toward success.
          </Text>
        </div>

        {/* Mission */}
        <div className="mission flex-1 md:pl-6">
          <Text className="text-[1.5em] font-bold mb-2">Mission</Text>
          <Text>
            To provide high-quality technical education and training that prepares students for the workforce and life.
          </Text>
        </div>
      </div>
    </div>
  )
}

export default Values
