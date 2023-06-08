import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import Dashboard, { dashboardAction, dashboardLoader } from './pages/Dashboard'

import Error from './pages/Error'

import Main, { mainLoader } from './layout/Main'

import { logoutAction } from '../src/actions/logout'


import ExpensePage, { expenseAction, expenseLoader } from './pages/ExpensePage'

import BudgetPage, { budgetAction, BudgetLoader } from './pages/BudgetPage'


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
        errorElement: <Error />,
      },
      {
        path: 'expense',
        element: <ExpensePage />,
        loader: expenseLoader,
        action: expenseAction,
        errorElement: <Error />,
      },
      {
        path: 'budget/:id',
        element: <BudgetPage />,
        loader: BudgetLoader,
        action: budgetAction,

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
