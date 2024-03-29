import { HiTrash } from 'react-icons/hi'

import { Link, useFetcher } from 'react-router-dom'

import {
  formartCurrency,
  formatDateToLocaleString,
  getAllMatchingItems,
} from '../helper'

const ExpenseItem = ({ expense, showBudget }) => {
  const fetcher = useFetcher()

  const budget = getAllMatchingItems({
    category: 'budget',
    key: 'id',
    value: expense.budgetId,
  })[0]

  return (
    <>
      <td>{expense.name}</td>
      <td> {formartCurrency(expense.amount)}</td>
      <td>{formatDateToLocaleString(expense.createdAt)}</td>

      {showBudget && (
        <td className='p-2'>
          <Link to={`/budget/${budget.id}`}>
            <h3 className='bg-teal-400 inline-block px-3 py-1 rounded-full'>
              {budget.name}
            </h3>
          </Link>
        </td>
      )}

      <td>
        <fetcher.Form method='post'>
          <input type='hidden' name='_action' value='deleteExpense' />
          <input type='hidden' name='expenseId' value={expense.id} />
          <button type='submit' aria-label={`Delete ${expense.id} expense`}>
            <HiTrash />
          </button>
        </fetcher.Form>
      </td>
    </>
  )
}

export default ExpenseItem
