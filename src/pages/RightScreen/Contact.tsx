import Footer from 'pages/LeftScreen/Footer'
import { Element } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-regular-svg-icons'

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  const thisYear = getCurrentYear();

  return (
    <Element
      id='contact'
      className='h-screen px-16 flex items-center justify-center bg-stone-300 sticky top-0 max-md:px-12 max-sm:px-8'
      style={{ zIndex: 40 }}
      name='projects'
    >

      <div className='w-full'>
        <h1 className='text-xl font-normal mb-16 text-center'>Contact</h1>
        <section className='text-center'>
          <p>
            Contact me for further inquiries at:
          </p>

          <p className='mt-1 font-normal text-lg cursor-pointer hover:text-black'
            onClick={() => {
              navigator.clipboard.writeText('anne.gemma.lee@gmail.com')
              const tooltip = document.getElementById("myTooltip")
              tooltip.innerHTML = 'Copied!'
            }}
          >
            <div className='tooltip'>
              anne.gemma.lee@gmail.com
              <FontAwesomeIcon icon={faCopy} className='ml-3' />
              <span className='tooltiptext' id='myTooltip'>Copy to clipboard</span>
            </div>
          </p>


          {/* <button className='rounded-lg px-9 py-3 mt-12 bg-white block mx-auto hover:bg-yellow hover:bg-opacity-50'>
            <a href="mailto:anne.gemma.lee@gmail.com">Send an email</a>
          </button> */}
          {/* <a href="mailto:anne.gemma.lee@gmail.com" className='block mt-12 text-center [&>svg]:transition [&>svg]:hover:translate-x-2  [&>svg]:hover:duration-200 [&>span]:hover:underline'>
            <span>Send an email</span>
            <FontAwesomeIcon icon={faArrowRight} className='ml-2 text-sm' />
          </a> */}

        </section>

        <section className='hidden max-xl:block'>
          <Footer />
        </section>
      </div>


      <p className='absolute bottom-0 block mx-'>© Anne Lee {thisYear}</p>
    </Element>
  )
}
