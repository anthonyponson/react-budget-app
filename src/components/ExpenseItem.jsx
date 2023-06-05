import { Link, useFetcher } from 'react-router-dom'
import { formartCurrency, formatDateToLocaleString, getAllMatchingItems } from '../helper'

const ExpenseItem = ({ expense }) => {

  const fetcher = useFetcher()

  const budget = getAllMatchingItems({
    category: 'budget',
    key: 'id', 
    value: expense.budgetId
  })[0]
  console.log(budget, 'cnjcn')

  return (
    <>
      <td>{expense.name}</td>
      <td> {formartCurrency(expense.amount)}</td>
      <td>{formatDateToLocaleString(expense.createdAt)}</td>
      <td><Link style={{backgroundColor: budget.color , padding: '1px 5px' ,borderRadius: '10px'}} to={`/budget/${budget.id}`}>{budget.name}</Link></td>

      <td>
       <fetcher.Form method='post'>
        <input type="hidden" name="_action" value={} />
        <input type="hidden" name="_action" value={} />

       </fetcher.Form>
      </td>
    </>
  )
}

export default ExpenseItem
