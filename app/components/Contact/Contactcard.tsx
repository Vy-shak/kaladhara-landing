import React, { ReactElement } from 'react'
import { Phone } from "lucide-react"

interface card {
    main: string,
    icon: ReactElement,
    details: string[]
}

function Contactcard({ main, icon, details }: card) {
    return (
        <div className='w-60 h-40 flex flex-col justify-center items-start gap-y-4 rounded p-4 bg-neutral-800'>
            <div className='w-fit space-x-3 flex justify-center items-center'>
                <div className=' p-2  bg-neutral-700 rounded'>
                    {icon}
                </div>
                <span className='text-xl text-neutral-300'>{main}</span>
            </div>
            <div className='w-full flex flex-col justify-center items-start'>
                {details.map((item,index) => (
                    <div key={index}  className='flex justify-center items-center w-fit gap-x-3'>
                        <div className='w-2 h-2 shrink-0 rounded bg-KalaYellow-500'></div>
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Contactcard
