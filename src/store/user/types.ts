export type UserProps = {
  email: string
}

export type ActionProps = {
  addUser: (user: string) => void
}

export type StoreProps = {
  user: UserProps
  actions: ActionProps
}
