import React from 'react'
import Dots from '../components/Dots'
import Block from '../components/macro/Block'

function About() {
  return (
    <section className='w-full gap-y-6 flex-col flex pt-8 sm:pt-12 lg:pt-16 justify-center items-center'>
      <div className='flex flex-col  justify-center items-center'>
        <span className='text-4xl border-y-2 border-t-KalaRed-500 border-b-KalaYellow-500 sm:border-y-3 lg:border-y-4 sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extrabold whitespace-nowrap'>KALA DHARA</span>
        {/* <Dots/> */}
      </div>
      {/* <div className='w-full gap-x-3 h-24 flex justify-start items-stretch'>
        <Block/>
        <div>
          <p className='font-medium'>Nestled in the heart of Kerala, Kaladhara stands as a vibrant cultural hub, preserving and promoting the state’s rich heritage through timeless traditional art forms. This center is more than just a stage—it is a living, breathing tribute to Kerala’s artistic spirit. From the fiery intensity of Theyyam to the graceful storytelling of Kathakali, and the rhythmic thunder of Chendamelam, Kaladhara brings together diverse expressions of devotion, drama, and percussion. Whether you are an art lover, a curious traveler, or a passionate cultural enthusiast, Kaladhara offers an immersive experience into the rituals, colors, and music that define Kerala’s identity.</p>
        </div>
      </div> */}
    </section>
  )
}

export default About
