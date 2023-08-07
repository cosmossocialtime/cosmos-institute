import '../../styles/globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ReactNode } from 'react'

const popins = Poppins({
  subsets: ['latin'],
  weight: ['200', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Login Instituição',
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
      <body className={popins.className}>{children}</body>
    </html>
  )
}
