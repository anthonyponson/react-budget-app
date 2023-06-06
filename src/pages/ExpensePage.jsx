import { useLoaderData } from 'react-router-dom'
import { deleteItem, fetchData } from '../helper'
import Tables from '../components/Tables'
import { toast } from 'react-toastify'

export async function expenseLoader() {
  const expense = fetchData('expense')
  return { expense }
}
export async function expenseAction({request}) {

  const data = await request.formData()
  const { _action, ...values } = Object.fromEntries(data)

  if (_action === 'deleteExpense') {
    try {
      deleteItem({
        key: 'expense',
        id: values.expenseId,
      })
      return toast.success(`Expense ${values.newExpense} deleted`)
    } catch (e) {
      throw new Error('there was a problem deleting your expense ')
    }
  }
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
