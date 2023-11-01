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
        <div className='text-white'>
          <h1 className='text-xl font-normal px-4 mb-2'>About me</h1>
          <p className='font-normal leading-6.5 px-4 py-2'>
            My name is Anne and I am a frontend developer based in Barcelona, Spain.
            I enjoy replicating design to pixel-perfect interfaces.<br />
            Back in 2021, I decided to transform from dancing/translating career and challenge the tech industry. 
            After attending a full-stack coding bootcamp, I joined a startup company on NFT marketplace, followed by working at a venture capital.<br />
            I am currently looking for a frontend developer position!

          </p>
        </div>
      {/* </AnimationOnScroll> */}

    </Element>
  )
}
