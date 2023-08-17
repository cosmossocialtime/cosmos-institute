import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Etapa final',
}

export default async function LayoutFinishOnboarding({
  children,
}: {
  children: ReactNode
}) {
  return <>{children}</>
}
