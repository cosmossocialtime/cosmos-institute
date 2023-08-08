import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Rapaz é um teste oo',
}

export default async function PrivateRoutes({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
