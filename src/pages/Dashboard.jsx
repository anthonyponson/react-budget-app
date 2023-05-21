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
    <div>
     {userName}
     <h2>Dashboard</h2>

    </div>
     
    </>
  )
}

export default Dashboard
