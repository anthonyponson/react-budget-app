import { useLoaderData } from 'react-router-dom'

import { createExpense, deleteItem, getAllMatchingItems } from '../helper'

import BudgetItem from '../components/BudgetItem'

import AddExpenseForm from '../components/AddExpenseForm'

import Tables from '../components/Tables'
import { toast } from 'react-toastify'


// actions 



export async function expenseLoader() {
  const expense = fetchData('expense')
  return { expense }
}

export async function budgetAction({request}) {

  const data = await request.formData()
  const { _action, ...values } = Object.fromEntries(data)

  // delete budget

  if (_action === 'deleteExpense') {
    try {
      deleteItem({
        key: 'expense',
        id: values.expenseId,
      })
      return toast.success(`Budget deleted`)
    } catch (e) {
      throw new Error('there was a problem deleting your Budget ')
    }
  }
// create expense
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

export async function BudgetLoader({ params }) {
  const budget = await getAllMatchingItems({
    category: 'budget',
    key: 'id',
    value: params.id,
  })[0]

  const expense = await getAllMatchingItems({
    category: 'expense',
    key: 'budgetId',
    value: params.id
  })

  if (!budget) {
    throw new Error('the budget you are trying to find is not exists')
  }

  return { budget, expense }
}

const BudgetPage = () => {
  const { budget , expense } = useLoaderData()

  return (
    <>
      <div className='w-full px-8'>
        <h1 className='text-2xl font-semibold'>
          <span className='text-teal-400 text-2xl pr-2 font-semibold'>
            {budget.name}
          </span>
          Overview
        </h1>

        <div className=''>
          <BudgetItem budget={budget}  showDelete={true}/>
          <AddExpenseForm budget={[budget]} />
        </div>

        {expense && expense.length > 0 && (
          <div className=''>
            <h1 className='text-2xl font-semibold'>
              <span className='text-teal-400 text-2xl pr-2 font-semibold'>
                {budget.name}
              </span>
              Expense
            </h1>
            <Tables expense={expense} showBudget={false}/>
          </div>
        )}


      </div>
    </>
  )
}

export default BudgetPage
