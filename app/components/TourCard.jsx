import  { useState } from 'react'

import { motion } from 'framer-motion'
import Image from 'next/image'

const TourCard = ({item}) => {
    const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
        className='h-[456px] w-full bg-black relative overflow-hidden cursor-pointer group shadow-2xl'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        <Image
            src={item.image}
            fill
            alt="img"
            className='object-cover group-hover:scale-105 transition group-hover:brightness-75'
        />
        <motion.p 
            initial={{ y: 20 , opacity: 0}}
            animate={isHovered ? { y:0 , opacity: 1} : {y: 20 , opacity: 0}}
            className='text-white absolute bottom-6 left-3 text-xl pr-3'
        >
            {item.title}
        </motion.p>

    </div>
  )
}

export default TourCard