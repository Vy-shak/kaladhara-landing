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
    }
];



function Performance() {
    return (
        <section className=' w-full gap-y-12 flex flex-col justify-center items-center'>
            <Heading title='Live cultural performance' />
            <Marquee >
                <div className='w-full flex justify-center items-center gap-x-12'>
                {videos.map((item) => (
                    <div key={item.id} className='w-56 rounded-lg h-72 bg-neutral-800'>

                    </div>
                ))}
                </div>
            </Marquee>
        </section>
    )
}

export default Performance
