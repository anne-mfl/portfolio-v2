import Footer from 'pages/LeftScreen/Footer'
import { Element } from 'react-scroll'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
  return (
    <Element
      id='contact'
      className='h-screen px-16 flex items-center justify-center bg-stone-300 sticky top-0 max-md:px-12 max-sm:px-8'
      style={{ zIndex: 40 }}
      name='projects'
    >

      <div className='w-full'>
        <h1 className='text-xl font-normal mb-16 text-center'>Contact</h1>
        <section>
          <p className='text-center'>I am currently seeking for a frontend developer position.<br />
            Contact me for further inquiries!
          </p>

          <button className='rounded-lg px-9 py-3 mt-12 bg-white block mx-auto hover:bg-yellow hover:bg-opacity-50'>
            <a href="mailto:anne.gemma.lee@gmail.com">Send an email</a>
          </button>

          {/* <a href="mailto:anne.gemma.lee@gmail.com" className='block mt-12 text-center [&>svg]:transition [&>svg]:hover:translate-x-2  [&>svg]:hover:duration-200 [&>span]:hover:underline'>
            <span>Send an email</span>
            <FontAwesomeIcon icon={faArrowRight} className='ml-2 text-sm' />
          </a> */}

        </section>

        <section className='hidden max-xl:block'>
          <Footer />
        </section>
      </div>


      <p className='absolute bottom-0 block mx-'>© Anne Lee 2023</p>
    </Element>
  )
}
