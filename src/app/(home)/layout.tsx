import '../../styles/globals.css'
import type { Metadata } from 'next'
import { Roboto_Flex as Roboto } from 'next/font/google'
import { ReactNode } from 'react'

const roboto = Roboto({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home Instituição',
  description:
    'Aplicação voltada para as instituições/Ongs, feito com nextJs, typescript, tailwindcss',
  authors: [
    { name: 'Gabriel dos Santos Ximenes Ferreira' },
    { name: 'Erick Henrique Ferreira' },
  ],
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
