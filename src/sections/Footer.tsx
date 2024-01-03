import Link from 'next/link'
import Logo from '/assets/logo.svg'

const Footer = () => {
  return (
    <footer className='mt-[250px] w-full bg-my_dblue py-24'>
      <div className='container mx-auto text-[#fff] flex justify-between items-center'>
        <img
          src={'/assets/shared/desktop/logo.svg'}
          alt=''
          className='text-my_bg'
        />
        <nav className='flex items-center gap-4'>
          <Link className='nav-link text-my_gray hover:text-my_bg' href='/'>
            Home
          </Link>
          <Link className='nav-link text-my_gray hover:text-my_bg' href='/'>
            About Us
          </Link>
          <Link className='nav-link text-my_gray hover:text-my_bg' href='/'>
            Create Your Plan
          </Link>
        </nav>

        <div id='social-icons' className='flex gap-4'>
          <img src={'/assets/shared/desktop/icon-facebook.svg'} alt='' />
          <img src={'/assets/shared/desktop/icon-twitter.svg'} alt='' />
          <img src={'/assets/shared/desktop/icon-instagram.svg'} alt='' />
        </div>
      </div>
    </footer>
  )
}

export default Footer
