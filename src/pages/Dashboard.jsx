import { useLoaderData } from 'react-router-dom'
import { createBudget, fetchData, wait } from '../helper'
import Intro from '../components/Intro'
import { toast } from 'react-toastify'
import AddBudgetForm from '../components/AdddBudegetForm'

export function dashboardLoader() {
  const userName = fetchData('userName')
  const budgets = fetchData('budgets')
  return { userName, budgets }
}

export async function dashboardAction({ request }) {

  await wait()

  const data = await request.formData()
  const { _action, ...values } = Object.fromEntries(data)

  if (_action === 'newUser') {
    try {
      localStorage.setItem('userName', JSON.stringify(values.userName))
      return toast.success(`welcome ${values.userName} to the dashboard`)
    } catch (e) {
      throw new Error('there was a problem creating your account')
    }
  }

  if (_action === 'createBudget') {
    try {
      createBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount
      })
      return toast.success(`budget created successfully`)
    } catch (e) {
      throw new Error('there was a problem creating your budget')
    }
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
          <div className=''>
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
