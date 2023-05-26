import { useEffect, useRef } from 'react'
import { HiPlusCircle } from 'react-icons/hi'
import { useFetcher, Form } from 'react-router-dom'

const AddExpenseForm = ({ budget }) => {
  const fetcher = useFetcher()
  const isSubmitting = fetcher.state === 'submitting'
  const ref = useRef()
  const focusRef = useRef()

  useEffect(() => {
    if (!isSubmitting) {
      ref.current.reset()
      focusRef.current.focus()
    }
  }, [isSubmitting])


  return (
    <>
      <div
        className='flex flex-col justify-center mt-10 border-2
       border-teal-300 rounded-lg p-6 max-w-3xl'
      >
        <h2 className='text-xl'>
          Add New {''}
          <span className='text-teal-400'>
            {budget.length === 1 && `${budget.map((item) => item.name)}`}
          </span>{' '}
          Expense
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

            <div className='flex flex-col space-y-2'>
              <label className='text-lg font-medium' htmlFor='newExpenseBudget'>
                Amount
              </label>
              <input
                className='max-w-md border-2 border-teal-400 px-4 py-1 rounded-md focus:outline-none'
                type='number'
                name='newBudgetAmount'
                step='0.01'
                id='newBudget'
                placeholder='eg . $100'
                required
                inputMode='decimal'
              />
            </div>
          </div>

          <div className='flex flex-col space-y-2' hidden={budget.length === 1}>
            <label htmlFor='newExpenseBudget'>Budeget Category</label>
            <select
              name='newExpenseBudget'
              className='max-w-md border-2 border-teal-400 px-4 py-1 rounded-md focus:outline-none'
              id='newExpenseBudget'
            >
              {budget
                .sort((a, b) => a.createdAt - b.createdAt)
                .map((item) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  )
                })}
            </select>
          </div>

          <input type='hidden' value='createExpense' name='_action' />
          <button
            disabled={isSubmitting}
            className='bg-teal-400 max-w-[150px] rounded-md p-2 text-white flex items-center justify-center'
          >
            {isSubmitting ? (
              'Adding...'
            ) : (
              <>
                <div className='flex items-center space-x-2'>
                  <span>Add budget </span>
                  <HiPlusCircle />
                </div>
              </>
            )}
          </button>
        </fetcher.Form>
      </div>
    </>
  )
}

export default AddExpenseForm
