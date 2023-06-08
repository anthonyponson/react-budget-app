import ExpenseItem from './ExpenseItem'
import { RiDeleteBin5Line } from 'react-icons/ri'

const Tables = ({ expense, showBudget = true }) => {
  console.log(expense)
  return (
    <>
      <div className='overflow-x-auto'>
        <table className='mt-4   w-full'>
          <thead className=''>
            <tr>
              {['name', 'amount', 'date', showBudget ? 'budget' : '', ''].map(
                (item, index) => (
                  <th key={index}>{item}</th>
                )
              )}
            </tr>
          </thead>
          <tbody className=''>
            {expense.map((expense) => (
              <tr className='text-center' key={expense.id}>
                <ExpenseItem expense={expense} showBudget={showBudget} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Tables
