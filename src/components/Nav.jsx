import { NavLink, Link, Form } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import home from '../assets/home.png'

const Nav = ({ userName }) => {
  return (
    <>
      <nav className='flex justify-between px-8 py-5'>
        <div className='flex max-w-sm'>
          <NavLink
            to='/'
            className='flex items-center gap-2 nav-link hover:border-solid hover:border-teal-400 hover:border-2 border-[2px] border-white px-3 py-1 rounded-md'
          >
            <AiFillHome className='text-teal-400' size={28} />
            <span className='text-base font-bold'>Home</span>
          </NavLink>
        </div>
        {userName && (
          <Form
            method='post'
            action='/logout'
            onSubmit={(event) => {
              if (!confirm('delete all data and user')) {
                event.preventDefault()
              }
            }}
          >
            <button
              type='submit'
              className='nav-link px-3 py-1 border-[2px] border-red-400 bg-reddishgray text-red-400 rounded-md hover:border-solid teal-300 hover:bg-red-400 hover:text-white'
            >
              Logout
            </button>
          </Form>
        )}
      </nav>
    </>
  )
}

export default Nav
