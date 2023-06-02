import ExpenseItem from './ExpenseItem'

const Tables = ({ expense }) => {
  console.log(expense)
  return (
    <>
      <div className='overflow-x-auto'>
        <table className='mt-4 w-full'>
          <thead className=''>
            <tr>
              {['name', 'amount', 'date'].map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {expense.map((expense) => (
              <tr className='mt-3 text-center' key={expense.id}>
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
