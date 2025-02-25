import { auth } from '@/services/auth'

export default async function Dashboard() {
  const session = await auth()

  console.log(session?.user)

  return <div>Dashboard</div>
}
