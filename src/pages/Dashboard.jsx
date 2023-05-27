import { useLoaderData } from 'react-router-dom'
import { createBudget, createExpense, fetchData, wait } from '../helper'
import Intro from '../components/Intro'
import { toast } from 'react-toastify'
import AddBudgetForm from '../components/AdddBudegetForm'
import AddExpenseForm from '../components/AddExpenseForm'
import BudgetItem from '../components/BudgetItem'

export function dashboardLoader() {
  const userName = fetchData('userName')
  const budget = fetchData('budget')
  return { userName, budget }
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
        amount: values.newBudgetAmount,
      })
      return toast.success(`budget created successfully`)
    } catch (e) {
      throw new Error('there was a problem creating your budget')
    }
  }

  if (_action === 'createExpense') {
    try {
      createExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        budgetId: values.newExpenseBudget,
      })
      return toast.success(`Expense ${values.newExpense} created`)
    } catch (e) {
      throw new Error('there was a problem creating your budget')
    }
  }
}

const Dashboard = () => {
  const { userName, budget } = useLoaderData()

  return (
    <>
      {userName ? (
        <div className='px-8'>
          <h1 className='text-4xl font-bold'>
            Welcome Back, <span className='text-teal-400'>{userName}</span>
          </h1>
          <div className='flex flex-col'>
            {budget && budget.length > 0 ? (
              <div className=''>
                <div className=''>
                  <AddBudgetForm />
                  <AddExpenseForm budget={budget} />
                  <h2 className='text-2xl font-bold'>Existing Budgets</h2>
                  <div className='flex'>
                    {budget.map((budget) => (
                      <BudgetItem key={budget.id} budget={budget} />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className=''>
                  <p>personal budgeting is the secreat to finalcial freedom</p>
                  <p>create a budget to get started</p>
                  <AddBudgetForm />
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  )
}

export default Dashboard
