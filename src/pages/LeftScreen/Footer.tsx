import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import ScrollAnimation from 'react-animate-on-scroll'

export default function Footer() {
  return (
    <div className='h-1/6'>
        <div className='flex max-xl:justify-center max-xl:mt-16'>
          <a href="https://github.com/anne-mfl" className='text-stone-500 pr-4 block text-2xl text-center hover:text-stone-900 duration-200'><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.linkedin.com/in/anne-gemma-lee" className='text-stone-500 px-4 block text-2xl text-center hover:text-stone-900 duration-200'><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://www.instagram.com/tr_anne_vel/" className='text-stone-500 px-4 block text-2xl text-center hover:text-stone-900 duration-200'><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="mailto:anne.gemma.lee@gmail.com" className='text-stone-500 px-4 block text-2xl text-center hover:text-stone-900 duration-200'><FontAwesomeIcon icon={faEnvelope} /></a>
        </div>
    </div >
  )
}
