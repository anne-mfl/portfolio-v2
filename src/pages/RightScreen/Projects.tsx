import { Element } from 'react-scroll'
import { useState } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faGlobe } from "@fortawesome/free-solid-svg-icons"


export default function Projects() {

  const [display, setDisplay] = useState('')

  const projects = [
    {
      name: 'audiophile',
      image: '../../assets/audiophile.png',
      title: 'Audiophile E-commerce Website',
      using: 'React/Typescript/Redux/TailwindCSS',
      repo: 'https://github.com/anne-mfl/audiophile-ecommerce-website',
      site: 'https://anne-mfl.github.io/audiophile-ecommerce-website/'
    },
    {
      name: 'bookmark',
      image: '',
      title: 'Bookmark Landing Page',
      using: 'React/TypeScript/TailwindCSS',
      repo: 'https://github.com/anne-mfl/bookmark-landing-page',
      site: 'https://anne-mfl.github.io/bookmark-landing-page/'
    },
    {
      name: 'comments',
      image: '',
      title: 'Interactive Comments Section',
      using: 'React/Redux/TailwindCSS',
      repo: 'https://github.com/anne-mfl/interactive-comments-section',
      site: 'https://anne-mfl.github.io/interactive-comments-section/'
    },
    {
      name: 'ecommerce',
      image: '',
      title: 'E-commerce Product Page with Lightbox',
      using: 'React/SCSS',
      repo: 'https://github.com/anne-mfl/ecommerce-product-page',
      site: 'https://anne-mfl.github.io/ecommerce-product-page/'
    },
    {
      name: 'crowdfunding',
      image: '',
      title: 'Crowdfunding Product Page',
      using: 'React/TailwindCSS',
      repo: 'https://github.com/anne-mfl/crowdfunding-product-page',
      site: 'https://anne-mfl.github.io/crowdfunding-product-page/'
    },
    {
      name: 'dashboard',
      image: '',
      title: 'Time Tracking Dashboard',
      using: 'React',
      repo: 'https://github.com/anne-mfl/time-tracking-dashboard',
      site: 'https://anne-mfl.github.io/time-tracking-dashboard/'
    },
    {
      name: 'dropdownnav',
      image: '',
      title: 'Intro Section with Dropdown Navigation',
      using: 'React/TailwindCSS',
      repo: 'https://github.com/anne-mfl/intro-section-with-dropdown-navigation',
      site: 'https://anne-mfl.github.io/intro-section-with-dropdown-navigation/'
    },
    {
      name: 'pricing',
      image: '',
      title: 'Pricing Component with Toggle',
      using: 'React/TailwindCSS',
      repo: 'https://github.com/anne-mfl/pricing-component-with-toggle',
      site: 'https://anne-mfl.github.io/pricing-component-with-toggle/'
    },
    {
      name: 'faq',
      image: '',
      title: 'FAQ Accordion Card',
      using: 'React',
      repo: 'https://github.com/anne-mfl/FAQ-accordion-card',
      site: 'https://anne-mfl.github.io/FAQ-accordion-card/'
    },
    {
      name: 'signup',
      image: '',
      title: 'Sign-up Form',
      using: 'React',
      repo: 'https://github.com/anne-mfl/intro-component-with-signup-form',
      site: 'https://anne-mfl.github.io/intro-component-with-signup-form/'
    },
    // {
    //   name: 'rating',
    //   image: '',
    //   title: 'Interactive Rating Component',
    //   using: 'React',
    //   repo: 'https://github.com/anne-mfl/interactive-rating-component',
    //   site: 'https://anne-mfl.github.io/interactive-rating-component/'
    // },
    {
      name: 'mobapp',
      image: '',
      title: 'iReport Mobile App',
      using: 'React Native',
      repo: 'https://gitlab.com/anne_lee/mobile-app-project',
      site: '',
      desc: 'Features: Users can post about incidents & events that happened with CRUD operation / Users can comment on each post / Uploading pictures and videos via Cloudinary / Obtaining current location using Google API '
    },
    {
      name: 'webapp',
      image: '',
      title: 'MERN stack citizen report app - iReport',
      using: 'React',
      repo: 'https://gitlab.com/anne_lee/first-project',
      site: 'http://142.93.105.20/',
      desc: 'Features in addition to mobile version: Stripe payments for donation / Contact form using Node mailer / Place autocomplete using Google API'
    }
  ]

  return (
    <Element
      className='bg-stone-100 h-screen px-8 flex items-center justify-center sticky top-0
       max-md:h-auto max-md:-top-72 max-md:py-24
       max-sm:-top-[3400px]
       max-[600px]:-top-[3100px]
       max-[560px]:-top-[2800px] max-[560px]:pb-36
       max-[520px]:-top-[2550px]
       max-[480px]:-top-[2250px]
       max-[440px]:-top-[2000px]
       max-[400px]:-top-[1750px]
       max-[380px]:-top-[1580px]
       max-[360px]:-top-[1410px]
       max-[340px]:-top-[1300px]
       '
      /*sticky top-0 z-30*/
      id='projects'
      style={{ zIndex: 30 }}
      name='projects'
    >
      <div>
        <h1 className='text-xl font-normal mb-10'>Projects</h1>

        <div className='grid md:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
          {projects.map((project, i) => (
            <AnimationOnScroll
              animateIn="animate__fadeInUp"
              delay={i % 3 === 1 ? 200 : i % 3 === 2 && 400}
              key={project.name}
            >
              <div
                className='overflow-hidden relative'
                onMouseEnter={() => setDisplay(project.name)}
                onMouseLeave={() => setDisplay('')}
              >
                <img
                  src={require(`../../assets/${project.name}.png`)}
                  key={project.name}
                  alt={`${project.name} thumbnail`}
                  className={`h-[125px] max-xl:w-full max-sm:h-full transform scale-100 duration-200 ${display === project.name && 'scale-110 blur-sm brightness-50'}`}
                />

                {display === project.name &&
                  <div className='absolute top-0 left-0 w-full h-full duration-200 flex justify-center items-center text-white p-1'>
                    <div className=''>
                      <h1 className='text-center font-normal text-sm pb-1'>{project.title}</h1>
                      <p className='text-center text-xs'>{project.using}</p>

                      <p className='text-sm mx-5 mt-2'>{project.desc}</p>

                      <div className='text-center mt-5'>
                        <a href={`${project.repo}`}
                          target="_blank"
                          rel="noreferrer noopener"
                          className='mx-3 hover:text-stone-400 hover:duration-500'
                        >
                          <FontAwesomeIcon icon={faCode} className='' />
                        </a>
                        <a href={`${project.site}`}
                          target="_blank"
                          rel="noreferrer noopener"
                          className={project.name === 'mobapp'
                            ? 'mx-3 cursor-auto pointer-events-none'
                            : 'mx-3 hover:text-stone-400 hover:duration-500'}>
                          <FontAwesomeIcon icon={faGlobe} className='' />
                        </a>
                      </div>
                    </div>
                  </div>
                }
              </div>
            </AnimationOnScroll>
          ))}


        </div>
      </div>
    </Element>
  )
}
