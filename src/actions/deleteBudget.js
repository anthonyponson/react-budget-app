import { toast } from 'react-toastify'
import { deleteItem, getAllMatchingItems } from '../helper'
import Error from '../pages/Error'
import { redirect } from 'react-router-dom'

export function deleteBudget({ params }) {
  try {
    deleteItem({
      key: 'budget',
      id: params.id,
    })

    const associatedExpenses = getAllMatchingItems({
      category: 'expense',
      key: 'budgetId',
      value: params.id,
    })

    associatedExpenses.forEach((expense) => {
      deleteItem({
        key: 'expense',
        id: expense.id,
      })
    })

    toast.success('Budget deleted successfully')
  } catch (e) {
    throw new Error('there was problem deleting budget')
  }
  return redirect('/')
}
