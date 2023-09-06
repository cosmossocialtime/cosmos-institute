'use client'
import { Button } from '@/components/ui/button'
import { useUserStore } from '@/store/user'
import {
  schemaForgotPassword,
  typesForForgotPassword,
} from '@/types/forgot-the-password'
import { api } from '@/utils/api'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'

export default function ForgotPassword() {
  const { register, handleSubmit } = useForm<typesForForgotPassword>({
    resolver: zodResolver(schemaForgotPassword),
    mode: 'all',
    criteriaMode: 'all',
  })

  const { addUser } = useUserStore()

  function handleSubmitForgotThePassword({ email }: typesForForgotPassword) {
    try {
      api.post('/auth/forgotPassword').then((response) => {
        if (response.status === 200) {
          addUser(email)
          toast.success(
            'Enviado um link para redefinição de senha no seu email',
          )
        }
      })
    } catch (error) {
      return toast.error(
        'Não foi possivel recuperar sua senha, por favor tente novamente mais tarde',
      )
    }
  }

  return (
    <div className="h-screen w-full md:flex">
      <div className="relative h-screen w-1/2">
        <Image
          width={1000}
          height={1000}
          className="relative h-full w-full bg-cover bg-no-repeat"
          src="/backgroundLogin.png"
          alt=""
        />
        <Image
          width={500}
          height={500}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  rounded-2xl bg-black/20 p-14 backdrop-blur-md"
          src="/logo.png"
          alt="Logo"
        />
      </div>
      <main className="flex flex-1 flex-col items-center justify-center gap-2">
        <h2 className="text-3xl text-purple-600">Informe o seu email</h2>
        <form
          onSubmit={handleSubmit(handleSubmitForgotThePassword)}
          className="mt-4 flex flex-col gap-2 p-10"
        >
          <div className="mb-9 flex w-full max-w-md flex-col gap-3">
            <label htmlFor="email" className="text-lg text-gray-600">
              Para recuperar sua senha, informe o email com o qual se cadastrou
            </label>
            <input
              {...register('email')}
              id="email"
              type="email"
              required
              placeholder="Escreva seu email aqui@email.com.br"
              className="rounded-md border-2 border-solid border-[#A2ABCC] p-2 transition-all duration-200 valid:border-green-500 hover:border-purple-500 hover:shadow-sm hover:shadow-purple-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>
          <Button className="text-lg">Recuperar</Button>
        </form>
        <span className="mt-2 text-gray-600">
          Lembrou de sua senha?{' '}
          <strong className="font-bold text-purple-700 transition-all duration-200 hover:text-purple-600">
            <Link href="/">Fazer Login</Link>
          </strong>
        </span>
      </main>
      <ToastContainer autoClose={2000} limit={3} />
    </div>
  )
}
