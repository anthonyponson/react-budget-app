import { useLoaderData } from 'react-router-dom'
import { fetchData } from '../helper'
import Intro from '../components/Intro'

export function dashboardLoader() {
  const userName = fetchData('userName')
  return { userName }
}

const Dashboard = () => {
  const { userName } = useLoaderData()

  return (
    <>
      <div>{userName ? <p>{userName}</p> : <Intro />}</div>
    </>
  )
}

export default Dashboard
