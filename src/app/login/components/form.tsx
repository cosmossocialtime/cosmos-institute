'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { schemaLogin, typesForLogin } from '@/types/loginForm'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<typesForLogin>({
    resolver: zodResolver(schemaLogin),
    mode: 'all',
    criteriaMode: 'all',
  })

  function handleSubmitLogin(data: typesForLogin) {
    console.log(data)
  }
  console.log(errors)

  return (
    <div className="flex flex-1 flex-col items-center justify-center p-10">
      <h1 className="mb-20 text-3xl font-semibold text-[#68459E]">
        Faça o seu login
      </h1>
      <form
        onSubmit={handleSubmit(handleSubmitLogin)}
        className="flex w-full flex-col items-center gap-3"
      >
        <div className="flex w-1/2 flex-col gap-2">
          <label htmlFor="email" className="max-w-fit text-lg  text-zinc-500">
            Email
          </label>
          <Input
            {...register('email')}
            type="email"
            id="email"
            placeholder="exemplo@email.com"
            className="px-3 py-3 text-zinc-500"
          />
          {errors.email && (
            <span className="text-sm text-rose-600">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="flex w-1/2 flex-col gap-2">
          <label
            htmlFor="password"
            className="max-w-fit text-lg  text-zinc-500"
          >
            Senha
          </label>
          <Input
            {...register('password')}
            className="px-3 py-3 text-zinc-500"
            type="password"
            id="password"
            placeholder="Digite sua senha aqui"
          />
          {errors.password && (
            <span className="text-sm text-rose-600">
              {errors.password.message}
            </span>
          )}
        </div>
        <Button className="mt-10 w-1/2 py-6 text-lg font-normal">Entrar</Button>
      </form>
    </div>
  )
}
