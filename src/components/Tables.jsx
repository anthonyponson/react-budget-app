import ExpenseItem from './ExpenseItem'

const Tables = ({ expense }) => {
  console.log(expense)
  return (
    <>
      <div className=''>
        <table>
          <thead>
            <tr>
              {['name', 'amount', 'date'].map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {expense.map((item) => (
              <tr key={item.id}>{item.name}</tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Tables
