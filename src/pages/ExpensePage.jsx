import { useLoaderData } from 'react-router-dom'
import { fetchData } from '../helper'
import Tables from '../components/Tables'

export function expenseLoader() {
  const expense = fetchData('expense')
  return { expense }
}

const ExpensePage = () => {
  const { expense } = useLoaderData()
  return (
    <>
      <div>
        <h1>All Expenses</h1>
        {expense && expense.length > 0 ? (
          <div className=''>
            <h2>
              Recent Expense <small>({expense.length})</small>
            </h2>
            <Tables expense={expense} />
          </div>
        ) : (
          <div>no expenses found</div>
        )}
      </div>
    </>
  )
}

export default ExpensePage
