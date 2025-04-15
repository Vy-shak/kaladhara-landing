import React from 'react'
import {Phone,Calendar,Share2,MapPin,Mail } from "lucide-react"
import Contactcard from '../components/Contact/Contactcard';
import Form from '../components/Contact/Form';



const contactInfo = [
    {
      title: "Hours",
      icon: <Phone/>, 
      items: [
 "Tuesday – Sunday" ,
        "10:00 AM - 8:00 PM",
         "Monday closed" 
      ]
    },
    {
      title: "Contact",
      icon: <Calendar />,
      items: [
        "+91 81838895205" ,
         "+91 81838895205" 
      ]
    },
    {
      title: "Social",
      icon: <Share2 />,
      items: [
        "www.instagram.com", "instagram" , 
      ]
    },
    {
      title: "Location",
      icon: <MapPin />,
      items: [
         "Green Valley Estate, near Pinarayi Community Hall, Pinarayi, Kannur, Kerala – PIN: 670741."
        
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
        <section className='w-full gap-y-16 flex flex-col justify-center px-16 items-center'>
            <div className='w-fit gap-y-4 flex justify-center items-center flex-col'>
                <h3 className='text-white whitespace-nowrap flex justify-center items-center gap-x-3 font-semibold  text-3xl '>
                    <span>Visit</span>
                    <div className='w-3 h-3 rounded-full bg-KalaYellow-500'>
                    </div>
                    <span>Witness</span>
                    <div className='w-3 h-3 rounded-full bg-KalaYellow-500'>
                    </div>
                    <span>Belong</span>
                    <div className='w-3 h-3 rounded-full bg-KalaYellow-500'>
                    </div>
                </h3>
                <div className='flex justify-center items-center w-full'>
                    <div className='w-1/3 bg-KalaRed-500 h-3'>

                    </div>
                    <div className='w-1/3 bg-KalaYellow-500 h-3'>

                    </div>
                </div>
            </div>
            <div className='w-full gap-x-20 flex justify-center items-start'>
                <div className='w-1/2 grid gap-4 grid-cols-2'>
                {contactInfo.map((item,index)=>(
                    <Contactcard key={index} main={item.title} details={item.items} icon={item.icon} />
                ))}
                </div>
                <div className='w-1/2 relative -top-6 gap-y-12 flex flex-col justify-center items-start'>
                  <Form/>
                  <div className='w-4xl flex justify-start items-center'>
                        <button className='px-20 py-4 bg-KalaYellow-500 font-semibold text-neutral-800'>EXPLORE</button>
                  </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
