import ExpenseItem from './ExpenseItem'

const Table = ({ expense }) => {
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
            {expense.map((item) => {
              ;<tr key={item.id}>
                {item.name}
                <ExpenseItem />
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Table
