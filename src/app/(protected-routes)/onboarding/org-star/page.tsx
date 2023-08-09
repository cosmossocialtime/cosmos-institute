'use client'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import * as Dialog from '@/components/ui/dialog'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function OrgStar() {
  const router = useRouter()
  return (
    <main className="flex h-screen w-full items-center justify-center bg-backgroundOrgStar bg-cover bg-bottom bg-no-repeat">
      <Button
        onClick={() => router.push('/onboarding/start')}
        className="absolute left-24 top-24 rounded-full border-none bg-[#EFF1F5]/10 py-7 backdrop-blur-sm hover:bg-purple-600"
        variant={'outline'}
      >
        <ArrowLeft className="text-zinc-50" width={24} />
      </Button>
      <div className="flex flex-col items-center gap-5">
        <div className="flex gap-20">
          <div className="flex max-w-2xl flex-col gap-5 rounded-lg bg-[#7C7C7C14]/10 p-10 text-zinc-50 backdrop-blur-sm">
            <h1 className="text-3xl font-semibold">
              Na Cosmos, cada Organização Social é uma Estrela que gera um
              impacto positivo no universo.
            </h1>
            <p className="text-xl">
              Neste programa, você será a(o) Guia de uma das estrelas mais
              brilhantes da galáxia, a organização [Nome da organização]!{' '}
            </p>
            <p className="text-xl">
              <strong>Clique sobre a estrela ao lado</strong> para visualizar
              informações sobre ela.
            </p>
          </div>
          <Dialog.Dialog>
            <Dialog.DialogTrigger className="rounded-lg bg-[#7C7C7C14]/10 p-10 text-zinc-50 backdrop-blur-sm transition-all duration-300 hover:bg-[#7C7C7C14]/20 hover:backdrop-blur-none">
              <Image
                src="/star.png"
                height={250}
                width={250}
                alt="Estrela ONG"
              />
              Nome da Organização social
            </Dialog.DialogTrigger>
            <Dialog.DialogContent className="border-none bg-[#22255D] text-zinc-50">
              Tester
            </Dialog.DialogContent>
          </Dialog.Dialog>
        </div>
        <Button className="mt-14 w-full max-w-sm py-6 text-lg">
          Continuar
        </Button>
      </div>
    </main>
  )
}
