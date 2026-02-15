import PSC from '../../assets/psc.png'
import KNEC from '../../assets/knec.png'
import KUCCPS from '../../assets/kuccps.png'
import CDACC from '../../assets/cdacc.png'
import HELB from '../../assets/helb.png'


import { Image, Title } from '@mantine/core'

const Partners = () => {
  return (
    <div className="partners px-[4%] py-16 bg-gray-50">
      
      {/* Section Title */}
      {/* <div className="text-left mb-12">
        <Title order={2} className="text-3xl md:text-4xl font-bold">
          Our <span className="text-claret-800">Partners</span>
        </Title>
        <div className="w-20 h-[3px] bg-claret-800 mx-auto mt-4 rounded-full"></div>
      </div> */}

      <div className="text-left mb-12">
  <Title order={2} className="text-3xl md:text-4xl font-bold">
    Our <span className="text-claret-800">Partners</span>
  </Title>

  {/* Left aligned underline */}
  <div className="w-20 h-[3px] bg-claret-800 mx-[20%] md:mx-[8%] mt-4 rounded-full"></div>
</div>


      {/* Logos Container */}
      <div className="flex flex-wrap justify-cente items-center gap-16 md:gap-25">
        
        {/* Just replace src with your logos */}
        <div className="h-30 flex items-center justify-center transition duration-300">
          <Image src={PSC} className="h-full w-auto object-contain" />
        </div>

        <div className="h-30 flex items-center justify-center transition duration-300">
          <Image src={KNEC} className="h-full w-auto object-contain" />
        </div>

        <div className="h-30 flex items-center justify-center transition duration-300">
          <Image src={KUCCPS} className="h-full w-auto object-contain" />
        </div>

       <div className="h-30 flex items-center justify-center transition duration-300">
          <Image src={HELB} className="h-full w-auto object-contain" />
        </div>

        <div className="h-30 flex items-center justify-center transition duration-300">
          <Image src={CDACC} className="h-full w-auto object-contain" />
        </div>

      </div>
    </div>
  )
}

export default Partners
