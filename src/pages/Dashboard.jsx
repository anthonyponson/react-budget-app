import { useLoaderData } from 'react-router-dom'
import { fetchData } from '../helper'
import Intro from '../components/Intro'
import { toast } from 'react-toastify'
import AddBudgetForm from '../components/AdddBudegetForm'

export function dashboardLoader() {
  const userName = fetchData('userName')
  const budgets = fetchData('budgets')
  return { userName , budgets}
}

export async function dashboardAction({ request }) {
  const data = await request.formData()
  const formData = Object.fromEntries(data)
  try {
    localStorage.setItem('userName', JSON.stringify(formData.userName))
    return toast.success(`welcome ${formData.userName} to the dashboard`)
  } catch (e) {
    throw new Error('there was a problem creating your account')
  }
}

const Dashboard = () => {
  const { userName, budgets } = useLoaderData()

  return (
    <>
      {userName ? (
        <div className='px-8'>
          <h1 className='text-4xl font-bold'>
            Welcome Back, <span className='text-teal-400'>{userName}</span>
          </h1>
          <div className="">
            {/* {budgets ? () : ()} */}
            <div>
              <div>
                <AddBudgetForm />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  )
}

export default Dashboard
