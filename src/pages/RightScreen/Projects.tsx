import { Element } from 'react-scroll'
import { useState } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faGlobe } from "@fortawesome/free-solid-svg-icons"


export default function Projects() {

  const [display, setDisplay] = useState('mobapp')

  const projects = [
    {
      name: 'promptopia',
      title: 'AI Prompt Sharing Full-Stack App',
      using: 'Next.js/NextAuth/ MongoDB/TailwindCSS',
      repo: 'https://github.com/anne-mfl/promptopia',
      site: 'https://promptopia-q7z8zz077-annes-projects-5e12311d.vercel.app/'
    },
    {
      name: 'audiophile',
      title: 'Audiophile E-commerce Website',
      using: 'React/Typescript/Redux/TailwindCSS',
      repo: 'https://github.com/anne-mfl/audiophile-ecommerce-website',
      site: 'https://anne-mfl.github.io/audiophile-ecommerce-website/'
    },
    {
      name: 'bookmark',
      title: 'Bookmark Landing Page',
      using: 'React/TypeScript/TailwindCSS',
      repo: 'https://github.com/anne-mfl/bookmark-landing-page',
      site: 'https://anne-mfl.github.io/bookmark-landing-page/'
    },
    {
      name: 'comments',
      title: 'Interactive Comments Section',
      using: 'React/Redux/TailwindCSS',
      repo: 'https://github.com/anne-mfl/interactive-comments-section',
      site: 'https://anne-mfl.github.io/interactive-comments-section/'
    },
    {
      name: 'ecommerce',
      title: 'E-commerce Product Page with Lightbox',
      using: 'React/SCSS',
      repo: 'https://github.com/anne-mfl/ecommerce-product-page',
      site: 'https://anne-mfl.github.io/ecommerce-product-page/'
    },
    {
      name: 'crowdfunding',
      title: 'Crowdfunding Product Page',
      using: 'React/TailwindCSS',
      repo: 'https://github.com/anne-mfl/crowdfunding-product-page',
      site: 'https://anne-mfl.github.io/crowdfunding-product-page/'
    },
    {
      name: 'dashboard',
      title: 'Time Tracking Dashboard',
      using: 'React',
      repo: 'https://github.com/anne-mfl/time-tracking-dashboard',
      site: 'https://anne-mfl.github.io/time-tracking-dashboard/'
    },
    {
      name: 'dropdownnav',
      title: 'Intro Section with Dropdown Navigation',
      using: 'React/TailwindCSS',
      repo: 'https://github.com/anne-mfl/intro-section-with-dropdown-navigation',
      site: 'https://anne-mfl.github.io/intro-section-with-dropdown-navigation/'
    },
    {
      name: 'pricing',
      title: 'Pricing Component with Toggle',
      using: 'React/TailwindCSS',
      repo: 'https://github.com/anne-mfl/pricing-component-with-toggle',
      site: 'https://anne-mfl.github.io/pricing-component-with-toggle/'
    },
    {
      name: 'faq',
      title: 'FAQ Accordion Card',
      using: 'React',
      repo: 'https://github.com/anne-mfl/FAQ-accordion-card',
      site: 'https://anne-mfl.github.io/FAQ-accordion-card/'
    },
    // {
    //   name: 'signup',
    //   title: 'Sign-up Form',
    //   using: 'React',
    //   repo: 'https://github.com/anne-mfl/intro-component-with-signup-form',
    //   site: 'https://anne-mfl.github.io/intro-component-with-signup-form/'
    // },
    // {
    //   name: 'rating',
    //   title: 'Interactive Rating Component',
    //   using: 'React',
    //   repo: 'https://github.com/anne-mfl/interactive-rating-component',
    //   site: 'https://anne-mfl.github.io/interactive-rating-component/'
    // },
    {
      name: 'mobapp',
      title: 'iReport Mobile App',
      using: 'React Native',
      repo: 'https://gitlab.com/anne_lee/mobile-app-project',
      desc: 'Features: Users can post with CRUD operation / Users can comment on each post / Uploading pictures and videos via Cloudinary / Obtaining current location using Google API'
    },
    {
      name: 'webapp',
      title: 'iReport - Citizen report app',
      using: 'MongoDB/Express/React/Node',
      repo: 'https://gitlab.com/anne_lee/first-project',
      // site: 'http://142.93.105.20/',
      desc: 'Features in addition to mobile version: Stripe payments for donation / Contact form using Node mailer / Place autocomplete using Google API'
    }
  ]

  return (
    <Element
      className='bg-stone-200 h-screen px-8 flex items-center justify-center sticky top-0
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
        <h1 className='text-xl font-normal mb-9'>Projects</h1>

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
                  className={`h-[132px] max-xl:w-full max-sm:h-full transform scale-100 duration-200 ${display === project.name && 'scale-110 blur-sm brightness-50'}`}
                />

                {display === project.name &&
                  <div className='absolute top-0 left-0 w-full h-full duration-200 flex justify-center items-center text-white p-1'>
                    <div className=''>
                      <h1 className='text-center font-normal text-sm pb-1'>{project.title}</h1>
                      <p className='text-center text-xs'>{project.using}</p>

                      <p className='text-[9px] mx-1 mt-1'>{project.desc}</p>

                      <div className={project.name === 'mobapp' || project.name === 'webapp' ? 'text-center mt-1' : 'text-center mt-5'}>
                        <a href={`${project.repo}`}
                          target="_blank"
                          rel="noreferrer noopener"
                          className='mx-3 hover:text-stone-400 hover:duration-500'
                        >
                          <FontAwesomeIcon icon={faCode} className={project.name === 'mobapp' || project.name === 'webapp' ? 'text-xs' : ''} />
                        </a>
                        {project.site &&
                          <a href={`${project.site}`}
                            target="_blank"
                            rel="noreferrer noopener"
                            className='mx-3 hover:text-stone-400 hover:duration-200'>
                            <FontAwesomeIcon icon={faGlobe}/>
                          </a>
                        }
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
