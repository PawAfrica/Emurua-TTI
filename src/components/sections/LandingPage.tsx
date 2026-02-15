// import { Button, Image, Text, Title } from '@mantine/core'
// import School from '../../assets/college.png'
// // import SchoolBlur from '../../assets/school-lp-min.png'
// import { useNavigate } from 'react-router-dom'
// import { useState } from 'react'

// const LandingPage = () => {
//   const navigate = useNavigate()
//   const [loaded, setLoaded] = useState(false)
// //   const stats = [
// //     { num: '5+', text: 'Graduations', color: 'bg-primary-800' },
// //     { num: '300+', text: 'Students', color: 'bg-primary-700' },
// //     { num: '3', text: 'Accreditations', color: 'bg-primary-600' }
// //   ]

//   return (
//     // <div className='z-10 w-[100%] h-[110vh] -mt-[110px] overflow-hidden relative mb-10'>
//     <div className='z-10 w-[100%] h-[96vh] md:h-[110vh] -mt-[110px] overflow-hidden relative mbb-10'>
//       <div className='absolute top-0 right-0 w-[100%] h-[100%]'>
//         {/* <Image
//           src={School}
//           className='object-contain -mt-[25%] mix-blend-multiply'
//         /> */}

//         {/* <Image
//           src={SchoolBlur}
//           alt='Blurred'
//           className='absolute top-0 right-0 w-[80%] h-full object-cover mix-blend-multiply scale-105 blur-md transition-opacity duration-500'
//           style={{ opacity: loaded ? 0 : 1 }}
//         /> */}

//         <Image
//           src={School}
//           alt='School'
//           className='object-cover h-[100%] md:mt-[7%] mix-blend-multiply'
//           // className='absolute top-0 right-0 w-[80%] h-full object-cover mix-blend-multiply transition-opacity duration-700 ease-in-out'
//           style={{ opacity: loaded ? 1 : 0 }}
//           onLoad={() => setLoaded(true)}
//         />

    
//       </div>

//       {/* <div className='absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#002C35_20%,#002C35_30%,#002C35bf_50%,#002C3500_100%)]'></div> */}

//       {/* <div className='text-card absolute left-0 bottom-55 w-[50%] h-[260px] mx-[4%]'> */}
//       <div className='text-card absolute left-0 bottom-30 md:bottom-55 md:w-[50%] h-[260px] mx-[4%]'>
     

//         <Title className='text-white md:text-[4em] mb-1 font-sans'>

//           Master the Craft, Secure the Future
//         </Title>


//         <Button
//           onClick={() => navigate('/admissions')}
//           className='primary-btn bg-claret-800 rounded-full mt-10'
//         >
//           Admission
//         </Button>
//       </div>

//       {/* <div className='stats absolute bottom-0 left-0 flex px-[4%]'>
//         {stats.map((stat, i) => (
//           <div
//             key={i}
//             className={`x flex flex-col text-white font-bold justify-center px-4 w-[110px] h-[100px] md:w-[160px] md:h-[120px] ${stat.color}`}
//           >
//             <div className='u text-[2em]'>{stat.num}</div>
//             <div className='l text-[.8em] md:text-[1.1em]'>{stat.text}</div>
//           </div>
//         ))}
//       </div> */}
//     </div>
//   )
// }

// export default LandingPage



import { Button, Image, Text, Title } from '@mantine/core'
import School from '../../assets/college.png'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate()

  return (
    <div className='landing relative w-full h-[96vh] md:h-[110vh] overflow-hidden'>
      {/* Hero Image */}
      <Image
        src={School}
        alt='School'
        className='absolute inset-0 w-full h-full object-cover scale-105'
      />

      {/* Dark Gradient Overlay */}
      <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20'></div>

      {/* Hero Text */}
      <div className='absolute left-0 bottom-50 md:bottom-50 md:left-10 lg:left-20 px-6 md:px-0 w-full md:w-[50%]'>
        <Title className='text-white text-3xl md:text-[3.5em] lg:text-[4em] font-bold leading-tight drop-shadow-lg'>
          Master the Craft, <br /> Secure the Future
        </Title>
        <Text className='text-gray-200 mt-4 md:mt-6 text-lg md:text-xl drop-shadow-md'>
          Join Emurua Dikirr TTI to build your skills, expand your opportunities, and achieve excellence.
        </Text>
        <Button
          onClick={() => navigate('/admissions')}
          className='primary-btn mt-6 md:mt-10 px-8 py-4 bg-gradient-to-r from-claret-700 to-claret-900 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300'
        >
          Admission
        </Button>
      </div>

      {/* Optional Stats at Bottom */}
      {/* 
      <div className='absolute bottom-4 left-0 w-full flex justify-start gap-4 px-6 md:px-10'>
        {stats.map((stat, i) => (
          <div key={i} className={`flex flex-col items-center justify-center w-[100px] h-[100px] bg-gradient-to-r from-primary-800 to-primary-600 text-white rounded-xl`}>
            <Text className='text-2xl font-bold'>{stat.num}</Text>
            <Text className='text-sm'>{stat.text}</Text>
          </div>
        ))}
      </div>
      */}
    </div>
  )
}

export default LandingPage
