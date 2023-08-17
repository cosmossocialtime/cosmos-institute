import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Instruções',
}

export default async function LayoutInstructions({
  children,
}: {
  children: ReactNode
}) {
  return <>{children}</>
}
