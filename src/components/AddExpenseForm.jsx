import { useRef } from 'react'
import { useFetcher, Form } from 'react-router-dom'

const AddExpenseForm = ({ budget }) => {
  const fetcher = useFetcher()
  const ref = useRef()
  const focusRef = useRef()

  return (
    <>
      <div
        className='flex flex-col justify-center mt-10 border-2
       border-teal-300 rounded-lg p-6 max-w-3xl'
      >
        <h2 className='text-xl'>
          Add New {''}{' '}
          <span className=''>
            {budget.length === 1 && `${budget.map((item) => item.name)}`}
          </span>
        </h2>

        <fetcher.Form
          ref={ref}
          method='post'
          className='flex flex-col space-y-4'
        >
          <div className='flex flex-col space-y-2 mt-4'>
            <div className='flex flex-col'>
              <label className='text-lg font-medium' htmlFor='newExpense'>
                Expense Name
              </label>
              <input
                className='max-w-md border-2 border-teal-400 px-4 py-1 rounded-md focus:outline-none'
                type='text'
                name='newExpense'
                id='newExpense'
                placeholder='e.g Ginger'
                required
                ref={focusRef}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="newExpenseAmount">Amount</label>
              <input type="number"
              step='0.1'
              inputMode='decimal'
              name='newExpenseAmount'
              id='newExpenseAmount'
              placeholder='10'
              required />
            </div>
          </div>
        </fetcher.Form>
      </div>
    </>
  )
}

export default AddExpenseForm
