import { useLoaderData } from 'react-router-dom'
import { fetchData } from '../helper'

export function dashboardLoader() {
  const userName = fetchData('userName')
  return { userName }
}

const Dashboard = () => {
  const { userName } = useLoaderData()
 
  return (
    <>
      <div>Dashboard</div>
      <h1>{userName}</h1>
    </>
  )
}

export default Dashboard
