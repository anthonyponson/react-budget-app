import { HiTrash } from 'react-icons/hi'
import { calulateSpentByBudget, formartCurrency } from '../helper'
import { Form, Link, useFetcher } from 'react-router-dom'
import { FaMoneyBill } from 'react-icons/fa'

const BudgetItem = ({ budget, showDelete = false }) => {
  const { name, id, amount } = budget
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

        {showDelete ? (
          <Form method='post' action='delete' onSubmit={(event) => {
            if(!confirm('are you sure you wnat to permenently delete this budget?'))
            {
              event.preventDefault()
            }
          }}>

            <button type='submit'>
            <div className="flex items-center space-x-2 bg-teal-400 px-2 py-1 rounded">
            <span className='text-lg text-white'>Delete Budget</span>
            <HiTrash className='text-xl text-white'/>
            </div>
            </button>
            
          </Form>
        ) : (
          <Link className='flex items-center space-x-3 ' to={`/budget/${id}`}>
            <div className="flex items-center space-x-4 bg-teal-400 px-3 py-1 rounded">
            <span className='text-xl text-white'>view detail</span>
            <FaMoneyBill className='text-2xl text-white'/>
            </div>
            
          </Link>
        )}
      </div>
    </>
  )
}

export default BudgetItem
