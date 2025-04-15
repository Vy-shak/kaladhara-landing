import React from 'react'

function Form() {
    return (
        <div className='w-full flex flex-col items-start justify-center'>
            <div className='w-full gap-y-1 flex flex-col justify-center items-start'>
                <span className='text-lg'>Name</span>
                <input className='w-full h-12 rounded bg-neutral-700' type="text" />
            </div>
            <div className='w-full gap-y-1 flex flex-col justify-center items-start'>
                <span className='text-lg'>Phone Number</span>
                <input className='w-full h-12 rounded bg-neutral-700' type="text" />
            </div>
            <div className='w-full gap-y-1 flex flex-col justify-center items-start'>
                <span className='text-lg'>Subject</span>
                <input className='w-full h-40 rounded bg-neutral-700' type="text" />
            </div>
        </div>
    )
}

export default Form
