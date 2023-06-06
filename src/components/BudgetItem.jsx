import { HiTrash } from 'react-icons/hi'
import { calulateSpentByBudget, formartCurrency } from '../helper'
import { useFetcher } from 'react-router-dom'

const BudgetItem = ({ budget }) => {
  const { name, id, amount, color } = budget
  const spent = calulateSpentByBudget(id)
  // const fetcher = useFetcher()
  return (
    <>
      <div
        className='max-w-sm border-4 border-teal-400
       rounded-3xl px-8 py-4 my-5 space-y-3 md:flex-col md:w-full'
      >
        {/* <fetcher.Form method='post'>
          <input type='hidden' name='_action' value='deleteBudget' />
          <input type='hidden' name='budgetId' value={budget.id} />
          <button type='submit' aria-label={`Delete ${budget.id} expense`}>
            <HiTrash />
          </button>
        </fetcher.Form> */}

        <div className='progress-text flex items-center justify-between'>
          <h2 className=''>{name}</h2>
          <h3 className=''>
            {formartCurrency(amount)} <br /> budgeted{' '}
          </h3>
        </div>

        <progress
          className='appearance-none border-none h-6 w-full rounded-[100vmax] overflow-hidden '
          max={amount}
          value={spent}
        ></progress>

        <div className='progress-text flex justify-between'>
          <small>{formartCurrency(spent)}Spend</small>
          <small>{formartCurrency(amount - spent)}</small>
        </div>
      </div>
    </>
  )
}

export default BudgetItem
