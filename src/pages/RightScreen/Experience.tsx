import { useState } from 'react'
import { Element } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


export default function Experience() {

  const [displayed, setDisplayed] = useState('cnag')

  const experiences = {
    cnag: {
      title: 'Frontend Developer',
      where: 'Centro Nacional de Análisis Genómico',
      period: 'June 2024 - Present',
      descriptions: [
        'Create data visualization platform for a research project',
        'Design and build a new web site for the lab',
        'Develop full-stack management app for the lab',
      ],
      stacks: ['React', 'JS', 'TS', 'Tailwind CSS', 'Plotly', 'Node.js', 'Express' ,'SQLite', 'REST API', 'Git'],
      website: 'https://www.cnag.eu/'
    },
    nauta: {
      title: 'Frontend Developer',
      where: 'Nauta Capital',
      period: 'October 2022 - September 2023',
      descriptions: [
        'Maintain and implement new feature of a data-driven investment platform and its Chrome Extension',
        'Develop CRM web application from scratch',
        'Conduct unit tests and integration tests',
      ],
      stacks: ['React', 'JS', 'TS', 'GraphQL', 'Webpack', 'Babel', 'Jest', 'React Testing Library', 'CSS-in-JS (Stitches)', 'Git'],
      website: 'https://nautacapital.com/'
    },
    mavon: {
      title: 'Frontend Developer',
      where: 'Mavon GmbH',
      period: 'July 2021 - April 2022',
      descriptions: ["Build company's landing page and web page, converting Figma mocks made by designers to interfaces"],
      stacks: ['React', 'JS', 'Node', 'Express', 'MongoDB', 'Git']
    },
    bcs: {
      title: 'JavaScript Full-Stack Bootcamp',
      where: 'Barcelona Code School',
      period: 'May 2021 - July 2021',
      descriptions: ['Intensive full-stack training on web and mobile development with JavaScript MERN stack and React Native'],
      stacks: ['HTML', 'CSS', 'JS', 'Node', 'Express', 'MongoDB', 'React', 'React Native'],
      website: 'https://barcelonacodeschool.com/'
    },
  }

  return (
    <Element
      className='h-screen flex flex-col justify-center bg-stone-100 px-16 sticky top-0 max-md:px-12 max-sm:px-6'
      // sticky top-0 z-20
      id='experience'
      style={{ zIndex: 20 }}
      name='experience'
    >

      <div className='h-[344px] max-md:h-[400px] max-sm:h-[424px]'>
        <h1 className='text-xl font-normal mb-16 max-sm:mb-8'>Experience</h1>

        <div className='flex max-md:flex-col'>

          <section className='flex h-fit max-md:flex-col max-md:w-fit'>

            <div className='border-l-4 relative max-md:hidden'>
              <div className={`bg-lightYellow h-1/4 w-1 absolute 
                  ${displayed === 'cnag' && 'right-0 top-0 duration-500'}
                  ${displayed === 'nauta' && 'right-0 top-[25%] duration-500'}
                  ${displayed === 'mavon' && 'right-0 top-[50%] duration-500'}
                  ${displayed === 'bcs' && 'right-0 top-[75%] duration-500'}
              `} />
            </div>

            <ul className='w-40 h-fit [&>li]:py-3 [&>li]:pl-4 [&>li]:cursor-pointer 
             max-md:w-full max-md:flex max-md:[&>li]:px-5 max-md:[&>li]:py-1.5 max-sm:[&>li]:px-3'>
              <li className={displayed === 'cnag' ? 'font-semibold' : 'normal'} onClick={() => setDisplayed('cnag')}><a>CNAG</a></li>
              <li className={displayed === 'nauta' ? 'font-semibold' : 'normal'} onClick={() => setDisplayed('nauta')}><a>Nauta&nbsp;Capital</a></li>
              <li className={displayed === 'mavon' ? 'font-semibold' : 'normal'} onClick={() => setDisplayed('mavon')}><a>Mavon</a></li>
              <li className={displayed === 'bcs' ? 'font-semibold' : 'normal'} onClick={() => setDisplayed('bcs')}><a>BCS</a></li>
            </ul>

            <div className='hidden max-md:block border-b-4 relative mb-5'>
              <div className={`bg-lightYellow absolute h-1
                  ${displayed === 'cnag' && 'left-0 duration-500 w-[22%]'}
                  ${displayed === 'nauta' && 'left-[22%] duration-500 w-[36%]'}
                  ${displayed === 'mavon' && 'left-[56%] duration-500 w-[27%]'}
                  ${displayed === 'bcs' && 'left-[83%] duration-500 w-[17%]'}
                 
              `} />
            </div>

          </section>

          <section>
            <div className='flex'>
              {experiences[displayed].website
                ?
                <a href={experiences[displayed].website} target='_blank'>
                  <h2 className='text-lg font-normal [&>span>svg]:transition [&>span>svg]:hover:-translate-y-1 [&>span>svg]:hover:translate-x-1 [&>span>svg]:hover:duration-200 hover:underline'>
                    {experiences[displayed].title}
                    <p className='text-lg px-1 font-thin inline'>at</p>
                    {displayed === 'cnag' && <br/>}
                    <span className='whitespace-nowrap'>
                      {experiences[displayed].where}
                      {experiences[displayed].website && <FontAwesomeIcon icon={faArrowRight} className='ml-2 mb-0 text-sm -rotate-45' />}
                    </span>
                  </h2>
                </a>
                :
                <h2 className='text-lg font-normal'>
                  {experiences[displayed].title}
                  <p className='text-lg px-1 font-thin inline'>at</p>
                  {experiences[displayed].where}
                </h2>
              }
            </div>
            <h3 className='text-sm mb-4'>
              {experiences[displayed].period}
            </h3>
            <ul className='leading-7 max-sm:text-sm'>
              {experiences[displayed].descriptions.map((description: string) => {
                return <li key={description}>&nbsp;-&nbsp;{description}</li>
              })}
            </ul>

            <ul className='flex flex-wrap leading-8 mt-3'>
              {experiences[displayed].stacks.map((stack: string) => {
                return <li key={stack} className='text-xs bg-yellow bg-opacity-50 py-1 m-1 px-3 rounded-full'>
                  {stack}
                </li>
              })}
            </ul>
          </section>
        </div>


      </div>

      <div className='mt-16'>
        <a
          href='https://drive.google.com/file/d/17EwCYQt-qMvSkx6R_YIlxCbDE0d-T2Ic/view?usp=sharing'
          // href='https://drive.google.com/file/d/1isFWH0YExilSQpwXZBSBgnc-E_Tz3L-a/view?usp=sharing'
          target='_blank'
          className='[&>svg]:transition [&>svg]:hover:translate-x-2  [&>svg]:hover:duration-200 [&>span]:hover:underline'
        >
          <span>View resume</span>
          <FontAwesomeIcon icon={faArrowRight} className='ml-2 text-sm' />
        </a>
      </div>
    </Element>
  )
}
