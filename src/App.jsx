import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import Dashboard, { dashboardAction, dashboardLoader } from './pages/Dashboard'

import Error from './pages/Error'

import Main, { mainLoader } from './layout/Main'

import { logoutAction } from '../src/actions/logout'


import ExpensePage, { expenseLoader } from './pages/ExpensePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        errorElement: <Error />,
        action: dashboardAction,
      },
      {
        path: 'expense',
        element: <ExpensePage />,
        loader: expenseLoader,
      },
      {
        path: 'logout',
        action: logoutAction,
      },
    ],
  },
])

function App() {
  return (
    <div className=''>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  )
}

export default App
