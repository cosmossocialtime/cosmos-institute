import { getServerSession } from 'next-auth'
import { ReactNode } from 'react'
import { nextAuthOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

interface PrivateRoutesProps {
  children: ReactNode
}

export default async function PrivateRoutes({ children }: PrivateRoutesProps) {
  const session = await getServerSession(nextAuthOptions)

  if (!session) {
    redirect('/')
  }

  return <>{children}</>
}
