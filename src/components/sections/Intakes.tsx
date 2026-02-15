// import { Card, Image, Text, Title, Button } from '@mantine/core'

// const Intakes = () => {
//   return (
//     <div className='intakes px-[4%] h-[80vh]'>
//       <Title className='text-[2.9em]'>Intakes</Title>

//       <div className="lower mt-10">
//         <div className="intake-card">
//             <Text className='text-[1.4em] font-bold'>January Intake</Text>

//             <div className="details">
//                 <Text>Starting on</Text>
//                 <Text>1st January 2026</Text>
//                 <Text>Closing on</Text>
//                 <Text>2nd February 2026</Text>
//             </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Intakes



import { Text, Title,Button } from '@mantine/core'

const intakeData = [
  {
    name: 'January Intake',
    start: '1st January 2026',
    close: '2nd February 2026'
  },
  {
    name: 'May Intake',
    start: '1st May 2026',
    close: '15th June 2026'
  },
  {
    name: 'September Intake',
    start: '1st September 2026',
    close: '15th October 2026'
  }
]

const Intakes = () => {
  return (
    <div className='intakes px-[4%] py-16'>
      <Title className='text-[2.5em] md:text-[2.9em] text-black-800 mb-12'>
        Intakes
      </Title>

      {/* <div className="lower flex flex-col md:flex-row gap-6">
        {intakeData.map((intake, i) => (
          <div
            key={i}
            className="intake-card w-full md:w-[32%] bg-neutral-100 p-6 border-l-[6px] border-black shadow-sm hover:shadow-md transition duration-300"
          >
            <Text className='text-[1.4em] font-bold mb-6'>
              {intake.name}
            </Text>

            <div className="details space-y-3">
              <div>
                <Text className='text-gray-500 text-sm'>
                  Starting on
                </Text>
                <Text className='font-semibold'>
                  {intake.start}
                </Text>
              </div>

              <div>
                <Text className='text-gray-500 text-sm'>
                  Closing on
                </Text>
                <Text className='font-semibold'>
                  {intake.close}
                </Text>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      <div className="lower flex flex-col md:flex-row gap-6">
  {intakeData.map((intake, i) => (
    <div
      key={i}
      className="intake-card w-full md:w-[32%] bg-neutral-100 p-6 border-l-[6px] border-black-800 shadow-sm hover:shadow-md transition duration-300 flex flex-col"
    >
      <Text className='text-[1.4em] font-bold mb-6'>
        {intake.name}
      </Text>

      <div className="details space-y-3 mb-6">
        <div>
          <Text className='text-gray-500 text-sm'>
            Starting on
          </Text>
          <Text className='font-semibold'>
            {intake.start}
          </Text>
        </div>

        <div>
          <Text className='text-gray-500 text-sm'>
            Closing on
          </Text>
          <Text className='font-semibold'>
            {intake.close}
          </Text>
        </div>
      </div>

      {/* Apply Button */}
      {/* <Button className="mt-auto bg-black text-white py-3 rounded-full hover:bg-gray-800 transition duration-300">Apply </Button> */}
      <button className="mt-auto w-[50%] bg-black-800 text-white py-3 rounded-full hover:bg-gray-800 transition duration-300">
        Apply Now
      </button>
    </div>
  ))}
</div>

    </div>
  )
}

export default Intakes
