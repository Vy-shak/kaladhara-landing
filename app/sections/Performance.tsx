import React from 'react'
import Heading from '../components/macro/Heading'
import Marquee from 'react-fast-marquee'

const videos = [
    {
        id: 1,
        title: "Sample Video 1",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 2,
        title: "Sample Video 2",
        url: "https://www.w3schools.com/html/movie.mp4"
    },
    {
        id: 3,
        title: "Sample Video 3",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 4,
        title: "Sample Video 4",
        url: "https://www.w3schools.com/html/movie.mp4"
    },
    {
        id: 5,
        title: "Sample Video 5",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 6,
        title: "Sample Video 5",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: 7,
        title: "Sample Video 5",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
    }
];



function Performance() {
    return (
        <section className=' w-full gap-y-12 flex flex-col justify-center items-center'>
            <div className='w-fit h-fit  flex justify-center items-center'>
                <Heading title='Live cultural performance' />
            </div>
            <Marquee gradient={true} gradientWidth={30} gradientColor='#000000' direction='right'  >
                <div className='w-full flex justify-center items-center '>
                {videos.map((item) => (
                    <div key={item.id} className='w-56 mr-12 rounded-lg h-72 bg-neutral-800'>

                    </div>
                ))}
                </div>
            </Marquee>
            {/* <Marquee gradient={true} gradientWidth={30} gradientColor='#000000' direction='left' className='-rotate-4   relative top-32' >
                <div className='w-full flex justify-center items-center '>
                {videos.map((item) => (
                    <div key={item.id} className='w-56 mr-12 rounded-lg h-72 bg-neutral-800'>

                    </div>
                ))}
                </div>
            </Marquee> */}
        </section>
    )
}

export default Performance
