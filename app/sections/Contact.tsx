import React from 'react'
import { Phone, Calendar, Share2, MapPin, Mail } from "lucide-react"
import Contactcard from '../components/Contact/Contactcard';
import Form from '../components/Contact/Form';



const contactInfo = [
  {
    title: "Hours",
    icon: <Phone />,
    items: [
      "Tuesday – Sunday",
      "10:00 AM - 8:00 PM",
      "Monday closed"
    ]
  },
  {
    title: "Contact",
    icon: <Calendar />,
    items: [
      "+91 81838895205",
      "+91 81838895205"
    ]
  },
  {
    title: "Social",
    icon: <Share2 />,
    items: [
      "www.instagram.com", "instagram",
    ]
  },
  {
    title: "Location",
    icon: <MapPin />,
    items: [
      "Green Valley Estate,pinarayi,kannur"

    ]
  },
  {
    title: "Mail",
    icon: <Mail />,
    items: [
      "user@gmail.com"
    ]
  }
];

function Contact() {
  return (
    <section className='w-full gap-y-6 flex flex-col justify-center px-4 items-center'>
      <div className='w-fit gap-y-2 flex justify-center items-center flex-col'>
        <h3 className='text-white whitespace-nowrap flex justify-center items-center gap-x-3 font-semibold  text-3xl '>
          <span className='text-2xl font-semibold'>Visit</span>
          <div className='w-2 h-2 rounded-full bg-KalaYellow-500'>
          </div>
          <span className='text-2xl font-semibold'>Witness</span>
          <div className='w-2 h-2 rounded-full bg-KalaYellow-500'>
          </div>
          <span className='text-2xl font-semibold'>Belong</span>
          <div className='w-2 h-2 rounded-full bg-KalaYellow-500'>
          </div>
        </h3>
        <div className='flex justify-center items-center w-full'>
          <div className='w-1/3 bg-KalaRed-500 h-1.5'>

          </div>
          <div className='w-1/3 bg-KalaYellow-500 h-1.5'>

          </div>
        </div>
      </div>
      <div className='w-full gap-y-6 lg:gap-x-6 lg:flex-row flex-col  flex justify-center items-start'>
        <div className='w-full lg:w-1/2 grid gap-4 grid-cols-2'>
          {contactInfo.map((item, index) => (
            <Contactcard key={index} main={item.title} details={item.items} icon={item.icon} />
          ))}
        </div>
        <div className='w-full lg:w-1/2 relative  gap-y-6 flex flex-col justify-center items-start'>
          <Form />
          <div className='w-full flex justify-start items-center'>
            <button className='px-12 sm:px-16 lg:px-20 py-3  bg-KalaYellow-500 text-xs sm:text-sm lg:py-4    font-semibold text-neutral-800'>EXPLORE</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
