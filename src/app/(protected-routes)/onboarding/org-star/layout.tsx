import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Estrela da organização',
}

export default async function OrgStar({ children }: { children: ReactNode }) {
  return <>{children}</>
}
