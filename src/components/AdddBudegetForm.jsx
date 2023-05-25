import { Form, useFetcher } from 'react-router-dom'
import { HiCurrencyDollar } from 'react-icons/hi'
import { useEffect, useRef } from 'react'

const AddBudgetForm = () => {
  const fetcher = useFetcher()
  const isSubmitting = fetcher.state === 'submitting'
  const ref = useRef()

  useEffect(() => {
    if (!isSubmitting) {
      ref.current.reset()
    }
  }, [isSubmitting])

  return (
    <>
      <div
        className='flex flex-col justify-center mt-10 border-2
       border-teal-300 rounded-lg p-6 max-w-3xl'
      >
        <h2 className='text-xl font-bold'> Create Budget</h2>
        <fetcher.Form
          ref={ref}
          method='post'
          className='flex flex-col space-y-4'
        >
          <div className='flex flex-col space-y-2 mt-4'>
            <label className='text-lg font-medium' htmlFor='newBudget'>
              Budget Name
            </label>
            <input
              className='max-w-md border-2 border-teal-400 px-4 py-1 rounded-md focus:outline-none'
              type='text'
              name='newBudget'
              id='newBudget'
              placeholder='eg . Groceries'
              required
            />
          </div>
          <div className='flex flex-col space-y-2'>
            <label className='text-lg font-medium' htmlFor='newBudgetAmount'>
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
          <input type='hidden' name='_action' value='createBudget' />
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
                  <HiCurrencyDollar />
                </div>
              </>
            )}
          </button>
        </fetcher.Form>
      </div>
    </>
  )
}

export default AddBudgetForm
