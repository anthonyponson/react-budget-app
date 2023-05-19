import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard, { dashboardLoader } from './pages/Dashboard'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    loader: dashboardLoader,
  },
])

function App() {
  return (
    <div className=''>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
