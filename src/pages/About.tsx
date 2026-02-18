// import HEROIMAGE from '../assets/heroimage.png'

// const About = () => {
//   return (
//     <div className="bg-gray-50">

//       {/* ================= HERO SECTION ================= */}
//       <div className="relative h-[70vh] md:h-[70vh] w-full">

//         {/* Background Image */}
//         <img
//           src={HEROIMAGE}
//           alt="About EDTTI"
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/60"></div>

//         {/* Text Content */}
//         <div className="relative z-10 flex items-center h-full max-w-6xl mx-auto px-6">
//           <div>
//             <h1 className="text-4xl md:text-5xl font-bold text-white">
//               About Us
//             </h1>
//             <p className="text-gray-200 mt-4 max-w-2xl">
//               Empowering youth through quality technical education and skills development.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* ================= CONTENT SECTION ================= */}
//       <div className="max-w-6xl mx-aut py-16 px-[4%] space-y-14">

//         {/* Introduction */}
//         <section>
//           <h2 className="text-2xl font-bold text-primary-800 mb-4">
//             Institutional Overview
//           </h2>
//           <p className="text-gray-700 leading-relaxed">
//             Emurua Dikirr Technical Training Institute (EDTTI) is a Kenyan
//             government technical college located in Narok County, Emurua
//             Dikirr Constituency, Mogondo Ward on a 10-acre piece of land
//             along the Dikirr–Olchobosei main road, approximately 5km
//             North West of Dikirr Trading Centre.
//           </p>
//         </section>

//         {/* Establishment & Vision */}
//         <section>
//           <h2 className="text-2xl font-bold text-primary-900 mb-4">
//             Establishment & National Vision
//           </h2>
//           <p className="text-gray-700 leading-relaxed">
//             The institute was constructed under the Government’s initiative
//             to establish at least one Technical and Vocational Education and
//             Training (TVET) institution in every constituency. This initiative
//             aligns with Kenya’s Vision 2030, the Sustainable Development Goals,
//             and the Government’s Big Four Agenda.
//           </p>
//           <p className="text-gray-700 leading-relaxed mt-4">
//             EDTTI was officially commissioned by His Excellency
//             Dr. William Ruto on 30th August 2019. The institution
//             began operations with an initial enrollment of 250 students,
//             comprising 139 females and 111 males across various departments.
//           </p>
//         </section>

//         {/* Growth & Development */}
//         <section>
//           <h2 className="text-2xl font-bold text-primary-900 mb-4">
//             Growth and Development
//           </h2>

//           <ul className="list-disc pl-6 space-y-3 text-gray-700">
//             <li>
//               Increased staffing levels including eight (8) Public Service Commission (PSC) staff and thirty-four (34) Board of Governors (BOG) staff.
//             </li>
//             <li>
//               Trainers trained in Competency Based Assessment by the TVET Curriculum Development, Assessment and Certification Council (TVET CDACC).
//             </li>
//             <li>
//               Accreditation of twenty-eight (28) training programmes.
//             </li>
//             <li>
//               Acquisition of modern training equipment including computer workshop facilities, training restaurant, plumbing and building technology equipment.
//             </li>
//             <li>
//               Establishment and equipping of key offices including procurement, finance, cash office, reception, and examinations office.
//             </li>
//             <li>
//               Creation and equipping of Laboratory Technology Lab and fabrication of a training kitchen.
//             </li>
//             <li>
//               Provision of office furniture including cabinets, tables, and chairs for staff.
//             </li>
//           </ul>
//         </section>

//         {/* Partnerships */}
//         <section>
//           <h2 className="text-2xl font-bold text-primary-900 mb-4">
//             Strategic Partnerships
//           </h2>
//           <p className="text-gray-700 leading-relaxed">
//             In partnership with the NG-CDF Emurua Dikirr Constituency,
//             the institute commissioned the drilling and establishment of
//             a water supply system to support both the institution and
//             the surrounding community.
//           </p>
//         </section>

//         {/* Government & Regulatory Bodies */}
//         <section>
//           <h2 className="text-2xl font-bold text-primary-900 mb-4">
//             Regulatory & Institutional Collaboration
//           </h2>
//           <p className="text-gray-700 leading-relaxed">
//             As a government training institution, EDTTI works closely
//             with key government agencies including:
//           </p>

//           <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
//             <li>Ministry of Education – State Department of Vocational and Technical Training</li>
//             <li>TVET Authority (TVETA)</li>
//             <li>TVET Curriculum Development, Assessment and Certification Council (TVET-CDACC)</li>
//             <li>Kenya National Examination Council (KNEC)</li>
//           </ul>

//           <p className="text-gray-700 leading-relaxed mt-4">
//             The Institute is also a member of the Kenya Association of Technical
//             Training Institutions (KATTI).
//           </p>
//         </section>

//         {/* Commitment */}
//         <section>
//           <h2 className="text-2xl font-bold text-primary-900 mb-4">
//             Our Commitment
//           </h2>
//           <p className="text-gray-700 leading-relaxed">
//             EDTTI remains committed to providing quality technical training
//             aimed at equipping youth with practical, employable skills.
//             The institute continues to play a transformative role in shaping
//             productive citizens who contribute meaningfully to national
//             development.
//           </p>
//         </section>

//       </div>
//     </div>
//   )
// }

// export default About





import { FaUsers, FaBuilding, FaBook, FaHandshake, FaRegLightbulb } from 'react-icons/fa'
import { Title, Text } from '@mantine/core'

const About = () => {
  return (
    <div className="bg-gray-50">

      {/* ================= HERO SECTION ================= */}
      {/* <div className="relative bg-gradient-to-r from-primary-800 to-primary-600 py-20 md:py-32">

        <div className="absolute inset-0 opacity-20 bg-[url('/patterns/dots.svg')] bg-repeat"></div>
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <Title order={1} className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Emurua Dikirr TTI
          </Title>
          <Text className="text-gray-200 text-lg md:text-xl">
            Excellence in technical education, empowering youth with skills for the future
          </Text>
        </div>
      </div> */}

      {/* ================= HERO SECTION ================= */}
{/* ================= HERO SECTION ================= */}
<div className="relative bg-gray-50 dark:bg-gray-900 pt-40 pb-15 md:py-32 overflow-hidden">
  {/* Background pattern */}
  <svg
    className="absolute top-0 left-0 w-full h-full opacity-10"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#3b82f6" strokeWidth="0.3" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>

  {/* Floating shapes */}
  <div className="absolute top-10 right-10 w-24 h-24 bg-primary-600 rounded-full opacity-20 animate-bounce-slow"></div>
  <div className="absolute bottom-0 left-10 w-32 h-32 bg-secondary-500 rounded-full opacity-15 animate-pulse-slow"></div>

  <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-10">
    {/* Left side text */}
    <div className="flex-1 text-left md:text-left">
      <h1 className="text-4xl md:text-5xl font-extrabold text-primary-800 mb-4">
        About Emurua Dikirr TTI
      </h1>
      <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-6">
        Excellence in technical education, empowering youth with practical skills and innovative learning.
      </p>
      {/* <a
        href="#about-content"
        className="inline-block px-8 py-3 rounded-full bg-primary-600 text-white font-semibold hover:bg-primary-700 transition"
      >
        Learn More
      </a> */}
    </div>

    {/* Right side illustrative shapes */}
    <div className="flex-1 relative hidden md:block">
      <div className="absolute top-0 left-0 w-24 h-24 bg-claret-800 rounded-lg rotate-12 opacity-40"></div>
      <div className="absolute top-16 right-0 w-32 h-32 bg-red-400 rounded-full opacity-30"></div>
      <div className="absolute bottom-0 left-12 w-28 h-28 bg-blue-400 rounded-xl opacity-35"></div>
      <div className="absolute bottom-10 right-16 w-20 h-20 bg-green-400 rounded-full opacity-25"></div>
    </div>
  </div>
</div>




      {/* ================= CONTENT SECTIONS ================= */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">

        {/* Institutional Overview */}
        <section className="bg-white p-6 md:p-10 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <FaBuilding className="text-primary-700 text-3xl" />
            <Title order={3} className="text-2xl text-primary-900">Institutional Overview</Title>
          </div>
          <Text className="text-gray-700 leading-relaxed">
            Emurua Dikirr Technical Training Institute (EDTTI) is a Kenyan government technical
            college located in Narok County, Emurua Dikirr Constituency, Mogondo Ward on a 10-acre
            piece of land along Dikirr–Olchobosei main road, approximately 5km NW of Dikirr Trading Centre.
          </Text>
        </section>

        {/* Establishment & Vision */}
        <section className="bg-gray-100 p-6 md:p-10 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <FaRegLightbulb className="text-primary-700 text-3xl" />
            <Title order={3} className="text-2xl text-primary-900">Establishment & Vision</Title>
          </div>
          <Text className="text-gray-700 leading-relaxed">
            EDTTI was constructed under the Government initiative to create a TVET college in every
            constituency, aligned with Vision 2030, Sustainable Development Goals, and the Big Four Agenda.
          </Text>
          <Text className="text-gray-700 leading-relaxed mt-3">
            Officially commissioned on 30th August 2019 by H.E. Dr. William Ruto, the institute began
            with 250 students (139 females, 111 males) across multiple departments.
          </Text>
        </section>

        {/* Growth & Development */}
        <section className="bg-white p-6 md:p-10 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <FaUsers className="text-primary-700 text-3xl" />
            <Title order={3} className="text-2xl text-primary-900">Growth & Development</Title>
          </div>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
            <li>Staffing: 8 PSC and 34 BOG staff, with trainers trained in Competency-Based Assessment.</li>
            <li>28 accredited training programs across departments.</li>
            <li>Acquisition of modern training equipment including computer workshops and training kitchens.</li>
            <li>Creation and equipping of offices: procurement, finance, reception, examinations.</li>
            <li>Laboratory and workshop facilities improved with furniture and tools.</li>
          </ul>
        </section>

        {/* Partnerships */}
        <section className="bg-gray-100 p-6 md:p-10 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <FaHandshake className="text-primary-700 text-3xl" />
            <Title order={3} className="text-2xl text-primary-900">Strategic Partnerships</Title>
          </div>
          <Text className="text-gray-700 leading-relaxed">
            EDTTI works closely with the NG-CDF Emurua Dikirr Constituency to provide water supply
            systems benefiting both the institute and the local community.
          </Text>
        </section>

        {/* Regulatory Collaboration */}
        <section className="bg-white p-6 md:p-10 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <FaBook className="text-primary-700 text-3xl" />
            <Title order={3} className="text-2xl text-primary-900">Regulatory Collaboration</Title>
          </div>
          <Text className="text-gray-700 leading-relaxed">
            EDTTI collaborates with:
          </Text>
          <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
            <li>Ministry of Education – State Department of Vocational & Technical Training</li>
            <li>TVET Authority (TVETA)</li>
            <li>TVET CDACC</li>
            <li>Kenya National Examination Council (KNEC)</li>
            <li>Member of KATTI</li>
          </ul>
        </section>

        {/* Commitment */}
        <section className="bg-gray-100 p-6 md:p-10 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <FaRegLightbulb className="text-primary-700 text-3xl" />
            <Title order={3} className="text-2xl text-primary-900">Our Commitment</Title>
          </div>
          <Text className="text-gray-700 leading-relaxed">
            EDTTI remains committed to equipping youth with employable skills, transforming them into
            productive citizens who contribute meaningfully to national development.
          </Text>
        </section>

      </div>
    </div>
  )
}

export default About
