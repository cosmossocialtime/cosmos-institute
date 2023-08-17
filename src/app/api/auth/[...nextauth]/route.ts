/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from '@/utils/api'
import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'

export const nextAuthOptions: NextAuthOptions = {
  pages: {
    signIn: '/',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },

      async authorize(credentials) {
        const { data, status } = await api.post('/auth/signin', {
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
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, token }) {
      session.user = token as any
      return session
    },
  },
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST }
