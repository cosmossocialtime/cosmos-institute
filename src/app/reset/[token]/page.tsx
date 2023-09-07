'use client'
import { Button } from '@/components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { useUserStore } from '@/store/user'
import { resetProps, schemaForResetPassword } from '@/types/reset-password'
import { api } from '@/utils/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeClosed, Question } from '@phosphor-icons/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

type queryParamsProps = {
  params: {
    token: string
  }
}

export default function resetPassword({ params }: queryParamsProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setConfirmPassword] = useState(false)
  const { email } = useUserStore()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<resetProps>({ resolver: zodResolver(schemaForResetPassword) })

  function handleSubmitResetPassword({ password }: resetProps) {
    api
      .patch('/auth/resetPassword', {
        password,
        email,
        token: params.token,
      })
      .then((response) => {
        if (response.status === 200) {
          router.push('/')
          toast.success('Senha alterada com sucesso')
        }

        if (response.status === 404) {
          return toast.error(
            'Não foi possivel processar sua requisição, tente novamente',
          )
        }
      })
  }

  return (
    <div className="flex h-screen w-full">
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
      <div className="flex h-screen w-full flex-1 flex-col items-center justify-center  text-zinc-900">
        <form
          onSubmit={handleSubmit(handleSubmitResetPassword)}
          className="mt-4 flex w-full max-w-lg flex-col gap-3 p-10"
        >
          <div className="flex items-start gap-1 text-left">
            <label htmlFor="password" className="text-gray-600">
              Nova senha
            </label>
            <HoverCard openDelay={200}>
              <HoverCardTrigger className="cursor-pointer text-[#A2ABCC]">
                <Question size={24} />
              </HoverCardTrigger>
              <HoverCardContent className="max-w-sm rounded-lg border border-solid border-purple-800 bg-gray-100 p-2 shadow-2xl">
                <span className="text-gray-600">
                  A senha deve ter no minimo 8 caracteres, com pelo menos uma
                  letra maiscula e um número.
                </span>
              </HoverCardContent>
            </HoverCard>
          </div>
          <div className="group relative flex w-full gap-2">
            <input
              {...register('password')}
              required
              id="password"
              minLength={8}
              type={showPassword ? 'text' : 'password'}
              placeholder="Digite sua senha aqui"
              className={` w-full rounded-md border-2 border-solid border-[#A2ABCC] p-2 text-gray-600 transition-all duration-200 hover:border-purple-500 hover:shadow-sm  hover:shadow-purple-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 ${
                errors.password ? 'border-rose-600' : 'valid:border-green-500'
              }`}
            />
            <button
              className="absolute right-2 top-3"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeClosed size={20} className="text-[#A2ABCC]" />
              ) : (
                <Eye size={20} className="text-[#A2ABCC]" />
              )}
            </button>
          </div>
          {errors.password && (
            <span className="text-sm text-rose-600">
              {errors.password.message}
            </span>
          )}

          <label htmlFor="confirm-password" className="text-gray-600">
            Confirme a nova senha
          </label>
          <div className="group relative flex w-full justify-between gap-2">
            <input
              {...register('confirmPassword')}
              required
              id="confirm-password"
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Digite sua senha aqui"
              className={`w-full rounded-md border-2 border-solid border-[#A2ABCC] p-2 text-gray-600 transition-all duration-200 hover:border-purple-500 hover:shadow-sm hover:shadow-purple-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 ${
                errors.password ? 'border-rose-600' : 'valid:border-green-500'
              }} `}
            />
            <button
              className="absolute right-2 top-3"
              type="button"
              onClick={() => setConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <EyeClosed size={20} className="text-[#A2ABCC]" />
              ) : (
                <Eye size={20} className="text-[#A2ABCC]" />
              )}
            </button>
          </div>
          {errors.confirmPassword && (
            <span className="text-sm text-rose-600">
              {errors.confirmPassword.message}
            </span>
          )}

          <Button className="mt-5">Confirmar</Button>
        </form>
      </div>
    </div>
  )
}
