import React from 'react'
import Image from 'next/image'
import { Upcoming } from '../../public/index'

function Book() {
    return (
        <>
            <div className='w-full bg-red-600 h-3'>

            </div>
            <div className='w-full flex justify-start items-center '>
                <div className='w-full  overflow-hidden'>
                    <Image alt='upcoming image' src={Upcoming} />
                </div>
            </div>
            <div>

            </div>
            <div className='w-full bg-yellow-600 h-3'>

            </div>
        </>)
}

export default Book
