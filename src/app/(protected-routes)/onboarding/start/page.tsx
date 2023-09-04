'use client'
import { Button } from '@/components/ui/button'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'

interface Todo {
  userId: number
  id: number
  title: string
}

async function getTodos() {
  const response = await axios<Todo>({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/todos/1',
  })
  return response
}

export default function Start() {
  const { data } = useQuery({
    queryKey: ['todo'],
    queryFn: getTodos,
  })

  const router = useRouter()
  function handleNextPage() {
    return router.push('/onboarding/org-star')
  }
  console.log(data)

  return (
    <main className="h-screen w-full items-center justify-center bg-backgroundStart bg-cover bg-no-repeat">
      <div className="absolute left-1/3 top-1/2 flex max-w-xl -translate-x-1/2 -translate-y-1/2 flex-col gap-7 rounded-2xl bg-[#7C7C7C]/10 p-14 backdrop-blur-md">
        <h1 className="text-3xl font-semibold text-zinc-50">
          Olá, Cosmonauta!
        </h1>
        <span className="text-xl text-zinc-50">
          Boas-vindas ao programa [Nome do Programa]. Prepare-se para uma
          aventura!
        </span>
        <Button onClick={handleNextPage} className="py-6 text-lg">
          Vamos lá!
        </Button>
      </div>
    </main>
  )
}
