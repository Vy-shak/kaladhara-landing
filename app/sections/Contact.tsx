import React from 'react'
import {Phone,Calendar,Share2,MapPin,Mail } from "lucide-react"
import Contactcard from '../components/Contact/Contactcard';



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
        "Linkdin.com", "linkedin" 
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
        <section className='w-full flex flex-col justify-center items-center'>
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
            <div className='w-full flex justify-center items-center'>
                <div className='w-1/2 flex flex-wrap gap-6'>
                {contactInfo.map((item,index)=>(
                    <Contactcard key={index} main={item.title} details={item.items} icon={item.icon} />
                ))}
                </div>
            </div>
        </section>
    )
}

export default Contact
