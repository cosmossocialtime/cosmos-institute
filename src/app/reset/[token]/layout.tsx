import { getServerSession } from 'next-auth'
import { ReactNode } from 'react'
import { nextAuthOptions } from '../../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import { Metadata } from 'next'

interface PrivateLayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'Restaurar senha',
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  const session = await getServerSession(nextAuthOptions)

  if (session) {
    redirect('/onboarding/start')
  }

  return <>{children}</>
}
