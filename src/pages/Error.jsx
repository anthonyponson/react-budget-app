import { Link, useNavigate, useRouteError } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { HiHome } from 'react-icons/hi'

const Error = () => {
  const error = useRouteError()
  const navigate = useNavigate()
  return (
    <>
      <div className='text-center mt-12'>
        <h1 className='text-4xl'>Uh oh! We've encountered an error</h1>
        <p>{error.message || error.statusText}</p>

        <div className='flex justify-center gap-5 mt-8'>
          <button
            onClick={() => navigate(-1)}
            className='flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded'
          >
            <FaArrowLeft />
            <span>Go Back</span>
          </button>

          <Link className='flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded'>
            <HiHome />
            <span>Go Home</span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Error
