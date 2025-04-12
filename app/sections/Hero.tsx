import React from 'react'
import Navbar from '../components/Hero/Navbar'

function Hero() {
    return (
        <section className="w-full h-screen">
            <Navbar/>
            <video className="object-cover h-screen w-screen" autoPlay
                loop
                muted
                playsInline src="/TheyyamHero.mp4"></video>
        </section>
    )
}

export default Hero
