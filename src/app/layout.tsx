import 'react-toastify/dist/ReactToastify.css'
import '../styles/globals.css'
import NextAuthSessionProvider from '@/providers/sessionProvider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '400', '500', '600'],
})

export const metadata: Metadata = {
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
      <body className={inter.className}>
        <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
      </body>
    </html>
  )
}
