// import { Card, Image, Text, Title, Button } from '@mantine/core'
// import Faculty1 from '../../assets/college.png'
// // import Faculty2 from '../../assets/faculty2.png'
// // import Faculty3 from '../../assets/faculty3.png'
// // import Faculty4 from '../../assets/faculty4.png'
// // import Faculty5 from '../../assets/faculty5.png'
// // import Faculty6 from '../../assets/faculty6.png'

// const facultiesData = [
//   { name: 'Electrical and Electronics Engineering', image: Faculty1 },
//   { name: 'Mechanical and Automotive Engineering', image: Faculty1 },
//   { name: 'Civil and Building Engineering', image: Faculty1 },
//   { name: 'Applied Sciences', image: Faculty1 },
//   { name: 'Agriculture', image: Faculty1 },
//   { name: 'Hospitality and Fashion', image: Faculty1 },
//   { name: 'ICT and Records', image: Faculty1 },
//   { name: 'Business and Administration', image: Faculty1 },
//   { name: 'Short and Skills Courses', image: Faculty1 }
// ]

// const Faculties = () => {
//   return (
//     <div className='faculties px-[4%] py-16 bg-primar   '>
//       {/* Section Title */}
//       <Title className='text-3xl md:text-4xl text-primary-800 text-left mb-12'>
//         Our Faculties
//       </Title>

//       <div className='lower w-[100%] flex gap-2 flex-wrap'>
//         {facultiesData.map((faculty, i) => (
//           <div className='card flex h-[180px] w-[32%] bg-neutral-200 rounded-xl overflow-hidden'>
//             <div className='left w-[35%]'>
//               <Image src={faculty.image} className='h-full' />
//             </div>

//             <div className='right w-[63%] flex flex-col justify-between p-1'>
//               <Text className='text-[1em] font-medium text-gray-500 mb-3'>
//                 Department of
//               </Text>

//               {/* Faculty Name */}
//               <Text className='text-[1.1em] md:text-[1.2em] font-bold text-black-800 mb-3'>
//                 {faculty.name}
//               </Text>

//               {/* Button */}
//               <Button
//                 variant='outline'
//                 // className='primary-btn'
//                 className='mb-3 border-2 border-primary-600 text-primary-800 w-[60%] mt-auto hover:bg-secondary-500 hover:text-white transition-colors duration-300 rounded-3xl'
//               >
//                 See Courses
//               </Button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Faculties

import { Image, Text, Title, Button } from '@mantine/core'
import { useNavigate } from 'react-router-dom'

import Faculty1 from '../../assets/departments/electrical.png'
import Faculty2 from '../../assets/departments/mechanical.png'
import Faculty3 from '../../assets/departments/civil.png'
import Faculty4 from '../../assets/departments/applied.png'
import Faculty5 from '../../assets/departments/agric.png'
import Faculty6 from '../../assets/departments/hospitality.png'
import Faculty7 from '../../assets/departments/ict.png'
import Faculty8 from '../../assets/departments/business.png'
import Faculty9 from '../../assets/departments/short.png'

const facultiesData = [
  { name: 'Electrical and Electronics Engineering', image: Faculty1 },
  { name: 'Mechanical and Automotive Engineering', image: Faculty2 },
  { name: 'Civil and Building Engineering', image: Faculty3 },
  { name: 'Applied Sciences', image: Faculty4 },
  { name: 'Agriculture', image: Faculty5 },
  { name: 'Hospitality and Fashion', image: Faculty6 },
  { name: 'ICT and Records', image: Faculty7 },
  { name: 'Business and Administration', image: Faculty8 },
  { name: 'Short and Skills Courses', image: Faculty9 }
]

const Faculties = () => {
  const navigate = useNavigate()

  const handleSeeCourses = (facultyName: string) => {
    // Navigate to /courses and set category query param
    navigate(`/courses?category=${encodeURIComponent(facultyName)}`)
  }
  return (
    <div className='faculties px-[4%] pt-2 pb-8 bg-primar'>
      {/* Section Title */}
      <Title className='text-[2.5em] md:text-[2.9em] text-black-800 text-left mb-12'>
        Our Faculties
      </Title>

      <div className='lower w-full flex flex-wrap gap-4'>
        {facultiesData.map((faculty, i) => (
          <div className='card flex flex-col md:flex-row h-auto md:h-[180px] w-full md:w-[32%] bg-neutral-200 rounded-xl overflow-hidden'>
            <div className='left w-full md:w-[35%] h-[150px] md:h-full'>
              <Image
                src={faculty.image}
                className='h-full w-full object-cover'
              />
            </div>

            <div className='right w-full md:w-[63%] flex flex-col p-3'>
              <Text className='text-[1em] font-medium text-gray-500 mb-2 md:mb-2'>
                Department of
              </Text>

              {/* Faculty Name */}
              <Text className='text-[1.1em] md:text-[1.1em] font-bold text-black-800 mb-2 md:mb-3'>
                {faculty.name}
              </Text>

              {/* Button */}
              <Button
                variant='outline'
                className='border-2 border-primary-600 text-primary-800 w-[60%] md:w-[60%] mt-auto hover:bg-secondary-500 hover:text-white transition-colors duration-300 rounded-3xl'
              onClick={() => handleSeeCourses(faculty.name)}
              >
                See Courses
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faculties
