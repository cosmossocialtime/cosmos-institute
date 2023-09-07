'use server'
import { cookies } from 'next/headers'

export async function useCreateCookie(name: string, value: string) {
  cookies().set(name, value)
}
