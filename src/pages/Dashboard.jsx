import { useLoaderData } from 'react-router-dom'
import { fetchData } from '../helper'
import Intro from '../components/Intro'

export function dashboardLoader() {
  const userName = fetchData('userName')
  return { userName }
}

export async function dashboardAction({ request }) {
  const data = await request.formData()
  const formData = Object.fromEntries(data)
  localStorage.setItem('userName', JSON.stringify(formData.userName))
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
