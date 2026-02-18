// import { Card, Image, Text, Title } from '@mantine/core'
// import { Link } from 'react-router-dom'
// import Logo from '../../assets/logos/logo.svg'
// import navdata from '../../data/navdata'
// import {
//   FaPhoneAlt,
//   FaHome,
//   FaEnvelope,
//   FaFacebook,
//   FaTwitter
// } from 'react-icons/fa'

// const Footer = () => {
//   const currentYear = new Date().getFullYear()

//   const contacts = [
//     { icon: <FaPhoneAlt />, text: '+25471970231' },
//     { icon: <FaHome />, text: 'P.O BOX 123-40200, Emurua Dikirr' },
//     { icon: <FaEnvelope />, text: 'info@edtti.ac.ke' },
//     { icon: <FaTwitter />, text: '@EDTTI' },
//     { icon: <FaFacebook />, text: 'Emurua Dikirr TTI' }
//   ]

//   return (
//     <div className='flex flex-col md:flex-row justify-between items-start py-12 px-[4%] bg-primary-900 text-white gap-10'>
//       {/* Logo & tagline */}
//       <div className='md:w-[25%]'>
//         <Title order={3} className='text-2xl mb-2'>
//           Emurua Dikirr Technical Training Institute
//         </Title>
//         <Text className='italic font-semibold text-[1.1em] mb-4'>
//           Excellence in Technical Education
//         </Text>
//         <Link to='/'>
//           <Card className='w-[50%] rounded-lg mb-6'>
//             <Image src={Logo} alt='EDTTI Logo' />
//           </Card>
//         </Link>
//         <div className='flex justify-between text-sm text-gray-300'>
//           <Text>&copy; {currentYear}</Text>
//           <Text>@EDTTI</Text>
//         </div>
//       </div>

//       {/* Sitemap & Contacts */}
//       <div className='md:w-[33%] mt-6 md:mt-0'>
//         <Title order={4} className='text-2xl mb-4'>
//           Site Map
//         </Title>
//         <div className='flex flex-wrap gap-3 mb-6'>
//           {navdata.map((item, i) => (
//             <Link
//               to={
//                 item.name.toLowerCase() === 'home'
//                   ? '/'
//                   : `/${item.name.toLowerCase().replace(/\s+/g, '-')}`
//               }
//               key={i}
//               className='text-[1.05em] hover:text-secondary-400 transition-colors'
//             >
//               {item.name}
//             </Link>
//           ))}
//         </div>

//         <Title order={4} className='text-2xl mb-3'>
//           Contacts
//         </Title>
//         <div className='flex flex-col gap-3'>
//           {contacts.map((contact, i) => (
//             <div key={i} className='flex items-center gap-3'>
//               <span className='text-xl'>{contact.icon}</span>
//               <span className='text-[1em]'>{contact.text}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Map Section */}
//       <div className='md:w-[35%] mt-6 md:mt-0'>
//         <Title order={4} className='text-2xl mb-4'>
//           Location
//         </Title>
//         <Card className='h-[30vh] p-0 rounded-lg overflow-hidden'>


//           <iframe
//             src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.2196009488694!2d35.06972827363091!3d-0.9926088989978155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182c83956741036b%3A0x873ae9420b876b0e!2sEmurua%20Dikirr%20Technical%20Training%20Institute!5e0!3m2!1sen!2ske!4v1771192636660!5m2!1sen!2ske'
//             width='600'
//             height='450'
//             style={{ border: 0 }}
//             allowFullScreen
//             loading='lazy'
//             referrerPolicy='no-referrer-when-downgrade'
//           ></iframe>
//         </Card>
//       </div>
//     </div>
//   )
// }

// export default Footer




import { Image, Text, Title } from '@mantine/core'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logos/logo.svg'
import navdata from '../../data/navdata'
import {
  FaPhoneAlt,
  FaHome,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='bg-black-900 text-white px-6 pt-12 pb-8'>
      {/* Top Section */}
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10'>

        {/* About + Logo */}
        <div className='flex flex-col items-center md:items-start text-center md:text-left gap-4'>
          <Link to='/'>
            <Image
              src={Logo}
              alt='EDTTI Logo'
              className='w-28 md:w-36 mx-auto md:mx-0 hover:scale-105 transition-transform duration-300'
            />
          </Link>

          <Title order={4} className='text-white font-bold'>
            Emurua Dikirr Technical Training Institute
          </Title>

          <Text className='text-gray-300'>
            Empowering students with practical skills and knowledge for a brighter future.
          </Text>

          <div className='flex gap-4 text-xl text-secondary-400 mt-2'>
            <a href='https://www.facebook.com/people/Emurua-Dikirr-Technical-Training-Institute-EDTTI/100064015154360/' target='_blank' rel='noopener noreferrer'>
              <FaFacebook className='hover:text-white transition-colors duration-200' />
            </a>
            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
              <FaTwitter className='hover:text-white transition-colors duration-200' />
            </a>
            <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
              <FaInstagram className='hover:text-white transition-colors duration-200' />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className='flex flex-col gap-3'>
          <Title order={5} className='text-white mb-3 font-semibold'>
            Quick Links
          </Title>
          {navdata.map((item, i) => (
            <Link
              key={i}
              to={
                item.name.toLowerCase() === 'home'
                  ? '/'
                  : `/${item.name.toLowerCase().replace(/\s+/g, '-')}`
              }
              className='text-gray-300 hover:text-secondary-400 transition-colors'
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Contact Info */}
        <div className='flex flex-col gap-3'>
          <Title order={5} className='text-white mb-3 font-semibold'>
            Contact Us
          </Title>

          <div className='flex items-center gap-3 text-gray-300'>
            <FaPhoneAlt />
            <Text>+254 740 555 123</Text>
          </div>
          <div className='flex items-center gap-3 text-gray-300'>
            <FaEnvelope />
            <Text>emuruadikirrtti2019@gmail.com. </Text>
          </div>
          <div className='flex items-center gap-3 text-gray-300'>
            <FaHome />
            <Text>P.O. Box 180-20401, Chebunyo, Kenya </Text>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className='border-t border-gray-700 my-8'></div>

      {/* Bottom Section */}
      <div className='max-w-7xl mx-auto text-center text-gray-400 text-sm'>
        &copy; {currentYear} Emurua Dikirr Technical Training Institute — All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
