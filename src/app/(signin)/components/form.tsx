'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { schemaLogin, typesForLogin } from '@/types/loginForm'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { Eye, EyeClosed } from '@phosphor-icons/react'
import Link from 'next/link'

export function FormLogin() {
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<typesForLogin>({
    resolver: zodResolver(schemaLogin),
    mode: 'all',
    criteriaMode: 'all',
  })
  const router = useRouter()

  async function handleSubmitLogin({ email, password }: typesForLogin) {
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    if (result?.error) {
      return toast.error('Credenciais incorretas, tente novamente por favor!')
    }

    router.replace('/onboarding/start')
  }

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
          <div className="group relative flex w-full max-w-md items-center justify-center gap-2">
            <Input
              {...register('password')}
              id="password"
              min={8}
              required
              type={showPassword ? 'text' : 'password'}
              placeholder="Digite sua senha aqui"
              className="w-full rounded-md border-2 border-solid border-[#A2ABCC] p-2 px-3 py-3 text-zinc-500 transition-all duration-200 hover:border-purple-500 hover:shadow-sm hover:shadow-purple-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="button-show-password absolute right-4 top-4"
            >
              {showPassword ? (
                <EyeClosed size={23} className="text-[#A2ABCC]" />
              ) : (
                <Eye size={23} className="text-[#A2ABCC]" />
              )}
            </button>
          </div>
          {errors.password && (
            <span className="text-sm text-rose-600">
              {errors.password.message}
            </span>
          )}
          <span className="py-3 text-right text-sm">
            <Link
              href="/forgot-the-password"
              className="text-purple-500 hover:text-purple-700"
            >
              Esqueci a minha senha
            </Link>
          </span>
        </div>
        <Button className="mt-10 w-1/2 py-6 text-lg font-normal">Entrar</Button>
      </form>
    </div>
  )
}
