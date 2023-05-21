import { NavLink, Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import home from '../assets/home.png'

const Nav = ({ userName }) => {
  return (
    <>
      <nav className='flex justify-start px-8'>
        <div className='flex max-w-sm h-11 mt-2'>
          <NavLink
            to='/'
            className='flex items-center gap-2 nav-link hover:border-solid hover:border-teal-400 hover:border-2 border-[2px] border-white px-3 py-1 rounded-md'
          >
            <AiFillHome className='text-teal-400' size={28} />
            <span className='text-base font-bold'>Home</span>
          </NavLink>
        </div>
      </nav>
    </>
  )
}

export default Nav
