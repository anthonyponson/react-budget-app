import ExpenseItem from './ExpenseItem'
import { RiDeleteBin5Line } from 'react-icons/ri'

const Tables = ({ expense }) => {
  console.log(expense)
  return (
    <>
      <div className='overflow-x-auto'>
        <table className='mt-4   w-full'>
          <thead className=''>
            <tr>
              {['name', 'amount', 'date', 'budgets'].map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody className=''>
            {expense.map((expense) => (
              <tr className='text-center' key={expense.id}>
                <ExpenseItem expense={expense} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Tables
