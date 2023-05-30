import { useState } from 'react'
import { calulateSpentByBudget, formartCurrency } from '../helper'

const BudgetItem = ({ budget }) => {
  const { name, id, amount, color } = budget
  const spent = calulateSpentByBudget(id)
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
