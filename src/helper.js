export const wait = () =>
  new Promise((res) => setTimeout(res, Math.random() * 800))

// generate random color

const generateRandomColor = () => {
  const existingBudgetLenght = fetchData('budget')?.length ?? 0
  return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`
}

// fetch data from localstorage

export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key))
}

// remove key form localstorage (user)

// export const deleteItem = ({ key }) => {
//   return localStorage.removeItem(key)
// }

// get all matching data

export const getAllMatchingItems = ({ category, key, value }) => {
  const data = fetchData(category) ?? []

  return data.filter((item) => item[key] === value)
}

// create budget

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

// delete expense from localstorage

export const deleteItem = ({ key, id }) => {
  const existingData = fetchData(key)
  if (id) {
    const newData = existingData.filter((item) => item.id !== id)
    return localStorage.setItem(key, JSON.stringify(newData))
  }
  return localStorage.removeItem(key)
}

// delete budget from localstorage

// export const deleteBudget = ({ key, id }) => {
//   const existingData = fetchData(key)
//   if (id) {
//     const newData = existingData.filter((item) => item.id !== id)
//     return localStorage.setItem(key, JSON.stringify(newData))
//   }
//   return localStorage.removeItem(key)
// }



// create expense

export const createExpense = ({ name, amount, budgetId }) => {
  const newItem = {
    id: Date.now().toString(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    budgetId: budgetId,
  }
  const existingExpense = fetchData('expense') ?? []

  return localStorage.setItem(
    'expense',
    JSON.stringify([...existingExpense, newItem])
  )
}

// calculate budget spent

export const calulateSpentByBudget = (budgetId) => {
  const expenses = fetchData('expense') ?? []

  const budgetSepnt = expenses.reduce((acc, expense) => {
    // check if expense.Id is equal to budget.id i passed in
    if (expense.budgetId !== budgetId) return acc
    // add current amount to my total
    return (acc += expense.amount)
  }, 0)
  return budgetSepnt
}

// formatting

// formating curency

export const formartCurrency = (amt) => {
  return amt.toLocaleString(undefined, {
    style: 'currency',
    currency: 'USD',
  })
}

// format date

export const formatDateToLocaleString = (epch) =>
  new Date(epch).toLocaleDateString()
