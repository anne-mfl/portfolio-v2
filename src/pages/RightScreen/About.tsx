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
      <div className='text-stone-50 shadow-4xl py-3'>
        <h1 className='text-xl font-normal px-4 mb-2'>About me</h1>
        <p className='font-normal text-[15px] leading-6.5 px-4 py-2'>
          Hi, Hola, and こんにちは! My name is Anne, and I am a detail-oriented Frontend Developer with three years of experience, currently based in Barcelona, Spain. I am passionate about crafting user-centric web experiences and transforming designs into responsive, pixel-perfect interfaces.
          <br /><br />
          I come from a non-technical background, having transitioned from a career in dancing and translating to web development in 2021. After completing a full-stack coding bootcamp, I worked as a Frontend Developer at a startup building an NFT marketplace and later at a venture capital firm.
          <br /><br />
          Currently, I work at one of Europe's largest genome sequencing centers, where I develop a data visualization platform for a research project and a full-stack management app for the lab group.
        </p>
      </div>
      {/* </AnimationOnScroll> */}

    </Element>
  )
}
