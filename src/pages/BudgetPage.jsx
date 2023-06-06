import { useLoaderData } from 'react-router-dom'
import { getAllMatchingItems } from '../helper'

export async function BudgetLoader({ params }) {
  const budget = await getAllMatchingItems({
    category: 'budget',
    key: 'id',
    value: params.id,

  })[0]

  if(!budget){
    throw new Error('the budget you are trying to find is not exists')
  }

  return { budget }
}

const BudgetPage = () => {
  const { budget } = useLoaderData()

  return (
    <>
      <div>{budget.name}</div>
    </>
  )
}

export default BudgetPage
