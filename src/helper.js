export const wait = () =>
  new Promise((res) => setTimeout(res, Math.random() * 3000))

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
