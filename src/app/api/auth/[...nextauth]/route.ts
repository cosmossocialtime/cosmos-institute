import { api } from '@/utils/api'
import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'

export const nextAuthOptions: NextAuthOptions = {
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },

      async authorize(credentials) {
        const { data, status } = await api.post('/login', {
          email: credentials?.email,
          password: credentials?.password,
        })

        if (data && status === 200) {
          return data
        } else {
          return null
        }
      },
    }),
  ],
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST }
