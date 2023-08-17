import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Início',
}

export default async function PrivateRoutes({
  children,
}: {
  children: ReactNode
}) {
  return <>{children}</>
}
