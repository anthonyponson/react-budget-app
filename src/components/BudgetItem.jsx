import { useState } from 'react'
import { formartCurrency } from '../helper'

const BudgetItem = ({ budget }) => {
  const { name, id, amount, color } = budget
  return (
    <>
      <div
        className='max-w-sm border-4 border-teal-400
       rounded-3xl px-8 py-4 my-5 space-y-3 md:flex-col md:w-full'
      >
        <div className='progress-text flex items-center justify-between'>
          <h2 className=''>{name}</h2>
          <h3 className=''>
           {formartCurrency (amount)}  <br /> budgeted{' '}
          </h3>
        </div>

        <progress
          className='appearance-none border-none h-6 w-full rounded-[100vmax] overflow-hidden transition'
          max={amount}
          value='100'
        ></progress>

        <div className='progress-text flex justify-between'>
          <small>...Spend</small>
          <small>...Remaining</small>
        </div>
      </div>
    </>
  )
}

export default BudgetItem
