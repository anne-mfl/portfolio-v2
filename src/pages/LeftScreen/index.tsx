import logo from 'assets/logo03sec.gif'
import Nav from './Nav'
import Footer from './Footer'

export default function LeftScreen() {
  return (
    <div className='
      h-screen w-6/12 fixed pl-40 
      max-xl:w-full max-xl:static max-xl:pl-0 max-xl:flex max-xl:flex-col max-xl:items-center
    '>
      <Nav />

      <div className='max-xl:hidden'>
        <Footer />
      </div>
    </div>
  )
}
