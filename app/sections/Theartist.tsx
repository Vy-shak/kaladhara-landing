import React from 'react'
import Image from 'next/image'
import { Pattern3 } from '@/public'
import Block from '../components/macro/Block'

function Theartist() {
    return (
        <section className='w-full flex-col gap-y-6 flex justify-between items-center'>
            <div className=' flex-col gap-y-4 flex justify-between items-center'>
                <span className='text-white font-semibold  text-3xl'>The art and aritst</span>
            </div>
            <div className='w-full flex gap-x-16  justify-between items-center'>
                <Image alt="pattern" src={Pattern3} />
                <div className='w-full gap-y-6 flex-grow flex flex-col justify-center items-center'>
                    <div className='w-4xl shrink-0 gap-x-4 flex justify-center h-64 items-start'>
                        <div className='w-82 shrink-0 bg-neutral-800 rounded-lg h-64'></div>
                        <Block />
                        <div>
                            <p>Behind every handcrafted piece lies a story — of heritage passed down, of skills honed through generations, and of lives shaped by art. At Kaladhara, we celebrate not just the beauty of traditional crafts, but the soulful journey of the artisans who bring them to life.</p>
                        </div>
                    </div>
                    <div className='w-4xl  flex justify-start items-start'>
                        <p className='w-4xl' >Each sculpture, each woven strand, each carved form carries the essence of Kerala’s cultural richness. It’s more than a product — it’s a living expression of identity, devotion, and creativity.
                            Discover the hands that mold the clay, the hearts that kindle the metal, and the stories that echo through every work of art.</p>
                    </div>
                    <div className='w-4xl flex justify-start items-center'>
                        <button className='px-20 py-4 bg-KalaYellow-500 font-semibold text-neutral-800'>EXPLORE</button>
                    </div>
                </div>
                <Image alt="pattern" src={Pattern3} />
            </div>
        </section>
    )
}

export default Theartist
