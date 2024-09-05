import { auth } from '@/server/auth'
import { UserButton } from './user-button'

export default async function Nav() {
  const session = await auth()
  console.log(session)
  return (
    <header className='py-4'>
      <nav>
        <ul className='flex justify-between'>
          <li>logo</li>
          <li><UserButton expires={session?.expires} user={session?.user}/></li>
        </ul>
      </nav>
    </header>
  )
}