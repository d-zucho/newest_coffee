import Link from 'next/link'

const Header = () => {
  return (
    <header className='flex justify-between items-center py-8'>
      <div className='logo'>
        <Link href={'/'}>
          <img src='/assets/logo.svg' alt='logo' />
        </Link>
      </div>
      <nav className='flex items-center gap-4'>
        <Link className='nav-link text-my_gray hover:text-my_dblue' href='/'>
          Home
        </Link>
        <Link
          className='nav-link text-my_gray hover:text-my_dblue'
          href='/about '
        >
          About Us
        </Link>
        <Link className='nav-link text-my_gray hover:text-my_dblue' href='/'>
          Create Your Plan
        </Link>
      </nav>
    </header>
  )
}

export default Header
