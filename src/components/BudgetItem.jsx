const BudgetItem = ({ budget }) => {
  const { name, id, amount, color } = budget
  return (
    <>
      <div className=''>
        <div className='progress-text'>
          <h2 className=''>{name}</h2>
          <h3 className=''>{amount}</h3>
        </div>
        <progress className='bg-slate-50' max={amount} value='60'></progress>

        <div className='progress-text'>
          <small>...Spen</small>
          <small>...Remaining</small>
        </div>
      </div>
    </>
  )
}

export default BudgetItem
