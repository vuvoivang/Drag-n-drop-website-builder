import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Logo from 'public/images/logo.webp';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4 mt-8">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Buildify">
              <Image src={Logo} width={100} height={100} alt="Buildify" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/sign-in"
                >
                  <a className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out hover:bg-gray-600"> Sign in</a>

                </Link>
              </li>
              <li>
                <Link href="/sign-up">
                  <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">Sign up</a>

                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
