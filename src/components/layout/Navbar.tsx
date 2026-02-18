// import { Button, Image, Text } from '@mantine/core'
// import navdata from '../../data/navdata'
// import { Link } from 'react-router-dom'
// import Logo from '../../assets/logos/logo.svg'

// const Navbar = () => {
//   const leftItems = navdata.slice(0, 4)
//   const rightItems = navdata.slice(4)

//   return (
//     <div className='navbar z-100 sticky top-[-10%] overflow-hidden'>
//       <div
//         className={`upper bg-white px-[4%] h-[60px] py-1 flex border-b-3 border-[#f6f7f9] `}
//       >
//         <Text className='text-secondary-500 font-bold text-[1.3em] pt-[.3em]'>
//           Emurua Dikirr Technical Training Institute
//         </Text>

//         <div className='right-side flex ml-auto bg-amberr-200'>
//           <Text className='phone text-secondary-500 text-[1.11em] pt-[.6em] mr-10'>
//             +25471970231
//           </Text>
//           <Text className='phone text-secondary-500 text-[1.11em] pt-[.6em] '>
//             info@edtti.ac.ke
//           </Text>
//         </div>
//       </div>

//       {/* <div className='lower bg-amber-700'>
//         {navdata.map((item, i) => (
//           <Link key={i} to={`${item.path}`} className=''>
//             {item.name}
//           </Link>
//         ))}
//       </div> */}

//       <div className='lower bg-white h-[70px] flex items-center px-[4%] relative'>
//         {/* Left side */}
//         <div className='flex gap-6'>
//           {leftItems.map((item, i) => (
//             <Link key={i} to={item.path} className='text-[1.1em]'>
//               {item.name}
//             </Link>
//           ))}
//         </div>

//         {/* Center Logo */}
//         <div className='absolute left-1/2 -translate-x-1/2'>
//           <img src={Logo} alt='Logo' className='h-[50px]' />
//         </div>

//         {/* Right side */}
//         <div className='flex gap-6 ml-auto justify-center items-center'>
//           {rightItems.map((item, i) => (
//             <Link key={i} to={item.path} className='text-[1.1em]'>
//               {item.name}
//             </Link>
//           ))}

//           <Button className='primary-btn rounded-full h-11 px-[2em]'>Admission</Button>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Navbar

import { Button } from '@mantine/core'
import navdata from '../../data/navdata'
import { Link, useLocation,useNavigate } from 'react-router-dom'
import Logo from '../../assets/logos/logo.svg'

const Navbar = () => {
  const leftItems = navdata.slice(0, 4)
  const rightItems = navdata.slice(4)
  const location = useLocation() // Get current route path
    const navigate = useNavigate()

  const getLinkClass = (path: string) =>
    `text-[1.1em] px-5 py-2 rounded-full ${
      location.pathname === path
        ? 'bg-black-100 text-black-800 font-bold'
        : 'text-gray-700 hover:bg-gray-100'
    }`



  return (
    <div className='navbar z-100 sticky top-[-10%] overflow-hidden'>
      {/* Upper info bar */}
      <div className='upper bg-white px-[4%] h-[60px] py-1 flex border-b border-[#f6f7f9]'>
        <span className='text-secondary-500 font-bold text-[1.3em] pt-[.3em]'>
          Emurua Dikirr Technical Training Institute
        </span>

        <div className='ml-auto flex gap-6 text-secondary-500'>
          <span className='pt-[.6em]'>+254 740 555 123</span>
          <span className='pt-[.6em]'>emuruadikirrtti2019@gmail.com</span>
        </div>
      </div>

      {/* Main navigation */}
      <div className='lower bg-white h-[70px] flex items-center px-[4%] relative'>
        {/* Left side links */}
        <div className='flex gap-6'>
          {leftItems.map((item, i) => (
            // <Link key={i} to={item.path} className={getLinkClass(item.path)}>
              <Link
      key={i}
      to={item.path}
      className={`${getLinkClass(item.path)} 
                 transition-all duration-200 transform hover:scale-105 hover:bg-gray-100 hover:text-black hover:shadow-sm`}
    >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Center logo */}
        <div className='absolute left-1/2 -translate-x-1/2'>
          <Link to={'/'}>
            <img src={Logo} alt='Logo' className='h-[50px]' />
          </Link>
        </div>

        {/* Right side links + button */}
        <div className='flex gap-6 ml-auto items-center'>
          {rightItems.map((item, i) => (
            // <Link key={i} to={item.path} className={getLinkClass(item.path)}>
               <Link
      key={i}
      to={item.path}
      className={`${getLinkClass(item.path)} 
                 transition-all duration-300 transform hover:scale-105 hover:bg-gray-100 hover:text-black hover:shadow-sm`}
    >
              {item.name}
            </Link>
          ))}

          <Button 
          onClick={() => navigate('/admissions')}
          className='primary-btn rounded-full h-11 px-[2em] bg-claret-700'>
            Admission
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
