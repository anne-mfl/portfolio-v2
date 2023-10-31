import React from 'react'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'
import Top from './Top'

export default function RightScreen() {

  return (
    <div className='absolute right-0 w-6/12 font-light bg-white max-xl:w-full'>
      <Top />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}
