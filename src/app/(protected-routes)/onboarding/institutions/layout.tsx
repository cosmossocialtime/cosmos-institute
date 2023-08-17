import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Instituições',
}

export default async function LayoutInstitutions({
  children,
}: {
  children: ReactNode
}) {
  return <>{children}</>
}
