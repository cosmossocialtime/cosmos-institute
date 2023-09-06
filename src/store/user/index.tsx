import { create } from 'zustand'
import { StoreProps } from './types'

type UserProps = {
  email: string
  addUser: (email: string) => void
}

export const useUserStore = create<UserProps>()((set) => ({
  email: '',
  addUser: (email) => set((state) => ({ email: state.email + email })),
}))
