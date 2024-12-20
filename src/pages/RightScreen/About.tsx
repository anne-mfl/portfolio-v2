import React from 'react'
import { Element } from 'react-scroll'
// import { AnimationOnScroll } from 'react-animation-on-scroll'

export default function About() {
  return (
    <Element className='flex items-end pb-24 mb-48 bg-transparent h-screen px-24 sticky top-0 max-md:px-12 max-sm:px-6'
      id='about'
      style={{ zIndex: 10 }}
      name='about'
    >

      {/* <AnimationOnScroll animateIn="animate__fadeIn"> */}
        <div className='text-white shadow-4xl'>
          <h1 className='text-xl font-normal px-4 mb-2'>About me</h1>
          <p className='font-normal leading-6.5 px-4 py-2'>
            Hi, Hola, and こんにちは! My name is Anne and I am a detail-oriented Frontend Developer with three years of experience based in Barcelona, Spain.
            I am passionate about crafting user-centric web experiences and replicating design into responsive and pixel-perfect interfaces.
            <br /><br />
            I originally come from a non-technical background; however, I decided to transform from dancing/translating career and challenge myself back in 2021. 
            After completing a full-stack coding bootcamp, I joined a startup on NFT marketplace, followed by working at a venture capital firm as a Frontend Developer.
            <br /><br />
            Currently I work at one of the largest genome sequencing center in Europe creating a data visualization platform for a research project, and a full-stack app for the lab group.
          </p>
        </div>
      {/* </AnimationOnScroll> */}

    </Element>
  )
}
