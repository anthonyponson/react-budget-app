export const wait = () =>
  new Promise((res) => setTimeout(res, Math.random() * 800))

const generateRandomColor = () => {
  const existingBudgetLenght = fetchData('budget')?.length ?? 0
  return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`
}

export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key))
}

export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key)
}

export const createBudget = ({ name, amount }) => {
  const newItem = {
    id: Date.now().toString(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    color: generateRandomColor(),
  }
  const existingBudget = fetchData('budget') ?? []

  return localStorage.setItem(
    'budget',
    JSON.stringify([...existingBudget, newItem])
  )
}

export const createExpense = ({ name, amount, budgetId }) =>  {
  const newItem = {
    id: Date.now().toString(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    budgetId: budgetId
  }
  const existingExpense = fetchData('expense') ?? []

  return localStorage.setItem(
    'expense',
    JSON.stringify([...existingExpense, newItem])
  )
}

export const calulateSpentByBudget = (budgetId) => {
  const expenses = fetchData('expense') ?? [];
  const budgetSepnt = expenses.reduce((acc, expense) => {
    // check if expense.Id is equal to budget.id i passed in 
    if(expense.budgetId !== budgetId) return acc
    // add current amount to my total
    return acc += expense.amount
  },0)
return budgetSepnt
}

// formatting



// formating curency

export const formartCurrency = (amt)=> {
  return amt.toLocaleString(undefined, {
    style: "currency",
    currency:"USD",

  })
}



// format date 

export const formatDateToLocaleString = (epch) => new Date(epch).toLocaleDateString()