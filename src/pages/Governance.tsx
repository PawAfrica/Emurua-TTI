


// export default function Governance() {
//   return (
//     <section className="bg-gray-50 dark:bg-gra-900 py-20 px-6">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
//         {/* Text Panel */}
//         <div className="md:w-1/3">
//           <h2 className="text-3xl font-bold text-primary-800 mb-4">
//             Governance at EDTTI
//           </h2>
//           <p className="text-gray-700 dark:text-gray-300 mb-4">
//             Emurua Dikirr Technical Training Institute (EDTTI) is guided by a clear governance structure ensuring 
//             accountability, transparency, and efficient decision-making across all levels.
//           </p>
//           <p className="text-gray-700 dark:text-gray-300 mb-4">
//             Governance spans from the Ministry of Education overseeing national policies, down to the Board of 
//             Governors who set strategic direction, and to operational staff and student leadership ensuring daily 
//             execution of institutional objectives.
//           </p>
//           <p className="text-gray-700 dark:text-gray-300">
//             This structured framework allows EDTTI to maintain high standards in technical education while ensuring 
//             all stakeholders have defined roles and responsibilities.
//           </p>
//         </div>

//         {/* Organogram Panel */}
//         <div className="md:w-2/3 h-[90vh] border rounded-lg shadow-lg">
//           <Organogram />
//         </div>
//       </div>
//     </section>
//   )
// }



// export default function Governance() {
//   return (
//     <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
//         {/* Text Panel */}
//         <div className="md:w-1/3">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">
//             Governance at EDTTI
//           </h2>
//           <p className="text-gray-700 mb-4">
//             Emurua Dikirr Technical Training Institute (EDTTI) follows a structured governance framework to ensure
//             accountability, transparency, and efficient decision-making across all levels.
//           </p>
//           <p className="text-gray-700 mb-4">
//             From the Ministry of Education overseeing national policies, to the Board of Governors setting strategic
//             direction, and operational staff and student leadership executing daily operations, every level has
//             defined roles.
//           </p>
//           <p className="text-gray-700">
//             This governance structure ensures EDTTI maintains high standards in technical education while supporting
//             all stakeholders effectively.
//           </p>
//         </div>

//         {/* Organogram Panel */}
//         <div className="md:w-2/3 h-[80vh] sm:h-[60vh] border border-gray-200 rounded-lg shadow-md overflow-hidden">
//           <Organogram />
//         </div>
//       </div>
//     </section>
//   )
// }




// import { useState } from 'react'
// // import Organogram from './Organogram'

// export default function GovernanceSection() {
//   const [showOrganogram, setShowOrganogram] = useState(false)

//   const governanceLevels = [
//     {
//       title: 'Ministry of Education (TVET)',
//       desc: 'National oversight and policy direction.',
//     },
//     {
//       title: 'Board of Governors',
//       desc: 'Institutional governance and strategic decisions.',
//     },
//     { title: 'Principal (CEO)', desc: 'Leads the institution and reports to the Board.' },
//     {
//       title: 'Deputy Principals',
//       desc: 'Administration & HR / Academic Affairs oversight.',
//     },
//     {
//       title: 'Mid-Level Management',
//       desc: 'Heads of Departments, Dean of Students, Registrar, Finance Officer, Procurement Officer.',
//     },
//     {
//       title: 'Sectional Leadership',
//       desc: 'Head of Sections, Deputy Registrar, Security Officer.',
//     },
//     {
//       title: 'Operational Staff & Student Leadership',
//       desc: 'Trainers, Technical/Admin staff, Student leaders.',
//     },
//     { title: 'Trainees', desc: 'The core beneficiaries of the institution.' },
//   ]

//   return (
//     <div className="bg-white text-gray-900 py-16 px-6 md:px-20">
//       {/* Intro */}
//       <div className="text-center md:text-left mb-12">
//         <h2 className="text-3xl font-bold mb-4">Governance at EDTTI</h2>
//         <p className="text-gray-700 max-w-3xl mx-auto md:mx-0">
//           Emurua Dikirr Technical Training Institute is guided by structured governance levels
//           ensuring accountability, transparency, and effective management. Below are the key
//           governance structures that ensure smooth operations and strategic decision-making.
//         </p>
//       </div>

//       {/* Governance Levels */}
//       <div className="grid md:grid-cols-2 gap-6 mb-10">
//         {governanceLevels.map((level, i) => (
//           <div
//             key={i}
//             className="p-5 border-l-4 border-claret-700 bg-gray-50 rounded-md shadow-sm hover:shadow-md transition-shadow"
//           >
//             <h3 className="font-semibold text-lg">{level.title}</h3>
//             <p className="text-gray-600 mt-1">{level.desc}</p>
//           </div>
//         ))}
//       </div>

//       {/* Organogram toggle */}
//       <div className="text-center">
//         <button
//           onClick={() => setShowOrganogram(!showOrganogram)}
//           className="inline-flex items-center gap-2 px-6 py-3 bg-claret-700 text-white font-semibold rounded-full shadow-md hover:bg-claret-800 transition-all"
//         >
//           {showOrganogram ? 'Hide Organogram' : 'View Organogram'}
//           <span
//             className={`inline-block transform transition-transform ${
//               showOrganogram ? 'rotate-180' : ''
//             }`}
//           >
//             ▼
//           </span>
//         </button>
//       </div>

//       {/* Organogram */}
//       {showOrganogram && (
//         <div className="mt-10 border rounded-lg overflow-hidden h-[70vh] md:h-[80vh]">
//           <Organogram />
//         </div>
//       )}
//     </div>
//   )
// }








import { useState } from 'react'
// import {Title} from '@mantine/core'
import Organogram from "../components/sections/Organogram";
import { IoClose } from 'react-icons/io5'

export default function GovernanceSection() {
  const [showOrganogram, setShowOrganogram] = useState(false)

  const governanceLevels = [
    { title: 'Ministry of Education (TVET)', desc: 'National oversight and policy direction.' },
    { title: 'Board of Governors', desc: 'Institutional governance and strategic decisions.' },
    { title: 'Principal (CEO)', desc: 'Leads the institution and reports to the Board.' },
    {
      title: 'Deputy Principals',
      desc: 'Administration & HR / Academic Affairs oversight.',
    },
    {
      title: 'Mid-Level Management',
      desc: 'Heads of Departments, Dean of Students, Registrar, Finance Officer, Procurement Officer.',
    },
    {
      title: 'Sectional Leadership',
      desc: 'Head of Sections, Deputy Registrar, Security Officer.',
    },
    {
      title: 'Operational Staff & Student Leadership',
      desc: 'Trainers, Technical/Admin staff, Student leaders.',
    },
    { title: 'Trainees', desc: 'The core beneficiaries of the institution.' },
  ]

  return (
    <div className="bg-white text-gray-900 py-16 px-6 md:px-20 relative">
      {/* Intro */}
      <div className="text-center md:text-left mb-12">
        <h2 className="text-3xl font-bold mb-4">Governance at EDTTI</h2>
        <p className="text-gray-700 max-w-3xl mx-auto md:mx-0">
          Emurua Dikirr Technical Training Institute is guided by structured governance levels
          ensuring accountability, transparency, and effective management. Below are the key
          governance structures that ensure smooth operations and strategic decision-making.
        </p>
      </div>

      {/* Governance Levels */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {governanceLevels.map((level, i) => (
          <div
            key={i}
            className="p-5 border-l-4 border-claret-700 bg-gray-50 rounded-md shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-lg">{level.title}</h3>
            <p className="text-gray-600 mt-1">{level.desc}</p>
          </div>
        ))}
      </div>

      {/* Organogram Button */}
      <div className="text-center">
        <button
          onClick={() => setShowOrganogram(true)}
          className="inline-flex items-center gap-2 px-6 py-3 bg-claret-700 text-white font-semibold rounded-full shadow-md hover:bg-claret-800 transition-all"
        >
          View Full Organogram
        </button>
      </div>

      {/* Full-page Organogram Overlay */}
      {showOrganogram && (
        <div
          className="w-[100%] fixed inset-0 z-101 flex flex-col justify-center items-center bg-black/15 backdrop-blur-sm p-1 mt-0 md:p-1"
          onClick={() => setShowOrganogram(false)} // closes when clicking outside
        >
            {/* <Title className='m-3 md:m-2 text-[1.7em] md:text-[3em] text-primary-800'>Governance Organogram</Title> */}
          <div
            className="relative w-full h-full md:h-[90vh] bg-white rounded-lg shadow-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            {/* Close Button */}
            <button
              onClick={() => setShowOrganogram(false)}
              className="absolute top-4 right-4 text-claret-500 hover:text-claret-900 text-4xl z-50"
            >
              <IoClose />
              {/* Close */}
              
            </button>

            {/* Organogram */}
            <div className="w-full h-full">
              <Organogram />
            </div>
          </div>
        </div>


        
      )}
    </div>
  )
}
