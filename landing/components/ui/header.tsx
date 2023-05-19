import Link from 'next/link';
import MobileMenu from './mobile-menu';
import Logo from 'public/images/logo.png';
import Image from 'next/image';
import Avatar from '@mui/material/Avatar';

export default function Header({ user }) {
  return (
    <header className='absolute w-full z-30 pt-2'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='flex items-center justify-between h-20'>
          {/* Site branding */}
          <div className='shrink-0'>
            {/* Logo */}
            <a href='/' className='block flex items-center' aria-label='Buildify'>
              <Image src={Logo} width={60} height={60} alt='Buildify' />
              <span className='self-center text-3xl font-bold whitespace-nowrap text-indigo-500 ml-2'>Buildify</span>
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className=''>
            {/* Desktop sign in links */}
            <ul className='flex grow justify-end flex-wrap items-center'>
              {user?.username ? <><Link href='/dashboard'>
                <a className='btn-sm text-white bg-blue-500 hover:bg-blue-700 ml-3'>
                  Dashboard
                </a>
              </Link> <div className='flex ml-10 items-center'><Avatar /> <span className='ml-4 fs-sm font-medium'><span className='text-blue-700 fs-sm'>{user.fullName}</span></span></div></> : <><li>
                <Link href='/sign-in'>
                  <a className='btn-sm text-purple-600 hover:text-gray-200 px-4 flex items-center transition duration-150 ease-in-out hover:bg-gray-600'>
                    Sign in
                  </a>
                </Link>
              </li>
                <li>
                  <Link href='/sign-up'>
                    <a className='btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3'>Sign up</a>
                  </Link>
                </li></>}

            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
