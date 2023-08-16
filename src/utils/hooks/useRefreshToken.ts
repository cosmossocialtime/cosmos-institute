'use client'
import { useSession } from 'next-auth/react'
import { api } from '../api'

export const useRefreshToken = () => {
  const { data: session } = useSession()

  const refreshToken = async () => {
    const res = await api.post(
      '/auth/refreshToken',
      {},
      {
        headers: {
          RefreshToken: session?.user.refreshToken,
        },
      },
    )
    if (session) session.user.accessToken = res.data.accessToken
  }
  return refreshToken
}
