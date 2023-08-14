'use client'
import { Button } from '@/components/ui/button'
import { Cake, Heart, MapPin, Users } from 'lucide-react'
import * as Dialog from '@/components/ui/dialog'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ButtonBackRotues } from '@/components/ButtonBackRoutes'
import { Coins } from '@phosphor-icons/react'

export default function OrgStar() {
  const router = useRouter()
  function handleSubmitPage() {
    router.push('/onboarding/instructions')
  }

  return (
    <main className="flex h-screen w-full items-center justify-center bg-backgroundOrgStar bg-cover bg-bottom bg-no-repeat">
      <ButtonBackRotues />
      <div className="flex flex-col items-center gap-5">
        <div className="flex gap-20">
          <div className="flex max-w-2xl flex-col gap-5 rounded-lg bg-[#7C7C7C14]/10 p-12 text-zinc-50 backdrop-blur-sm">
            <h1 className="text-2xl font-semibold">
              Na Cosmos, cada Organização Social é uma Estrela que gera um
              impacto positivo no universo.
            </h1>
            <p className="text-lg">
              Neste programa, você será a(o) Guia de uma das estrelas mais
              brilhantes da galáxia, a organização [Nome da organização]!{' '}
            </p>
            <p className="text-lg">
              <strong>Clique sobre a estrela ao lado</strong> para visualizar
              informações sobre ela.
            </p>
          </div>
          <Dialog.Dialog>
            <Dialog.DialogTrigger className="rounded-lg border-l border-t border-violet-500 bg-[#7C7C7C14]/10 p-10 text-zinc-50 backdrop-blur-sm transition-all duration-300 hover:bg-[#7C7C7C14]/20 hover:backdrop-blur-none">
              <Image
                src="/star.png"
                height={250}
                width={250}
                alt="Estrela ONG"
              />
              Nome da Organização social
            </Dialog.DialogTrigger>
            <Dialog.DialogContent className="border-none bg-[#22255D] text-zinc-50">
              <Dialog.DialogTitle>
                <p className="self-end text-[50px]">Teste</p>
              </Dialog.DialogTitle>

              <div className="mt-3 flex gap-4">
                <span className="flex gap-2">
                  <Cake size={24} /> {'10/02/2003' || '10/01/2000'}
                </span>
                <span className="flex gap-2">
                  <MapPin size={24} /> {`Imperatriz - MA` || ''}
                </span>
                <span className="flex gap-2">
                  <Users size={24} /> {10 || '0'} Colaboradores
                </span>
                <span className="flex gap-2">
                  <Coins size={24} /> $ {`${1.223},${30}` || '0'} receita anual
                </span>
                <span className="flex gap-2">
                  <Heart size={24} /> {20 || '0'} Beneficiários
                </span>
              </div>
              <div className="mt-10 flex flex-col gap-5">
                <h2 className="flex items-center gap-4 text-xl">
                  <span className="flex aspect-square h-8 items-center justify-center rounded-full bg-white/10 p-2">
                    1
                  </span>
                  Causa em que atua
                </h2>
                <div className="ml-12 flex gap-3">
                  <span>Hello</span>
                </div>
              </div>
              <div className="mt-10 flex flex-col gap-5">
                <h2 className="flex items-center gap-4 text-xl">
                  <span className="flex aspect-square h-8 items-center justify-center rounded-full bg-white/10 p-2">
                    2
                  </span>
                  História
                </h2>
                <p className="ml-12 w-3/4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Mollitia provident laboriosam aperiam eius consectetur facilis
                  cumque sapiente nesciunt, illum voluptatum enim iste
                  recusandae magnam pariatur? Amet doloribus deserunt pariatur
                  vitae?
                </p>
              </div>
              <div className="mt-10 flex flex-col  gap-5">
                <h2 className="flex items-center gap-4 text-xl">
                  <span className="flex aspect-square h-8 items-center justify-center rounded-full bg-white/10 p-2">
                    3
                  </span>
                  Atuação e impacto social
                </h2>
                <p className="ml-12 w-3/4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Consectetur ipsum tempora molestias eligendi quisquam
                  excepturi earum voluptatum, quod minima quasi asperiores modi
                  at deserunt nemo quibusdam aperiam magnam ipsam ab.
                </p>
              </div>
              <div className="mt-10 flex flex-col gap-5">
                <h2 className="flex items-center gap-4 text-xl">
                  <span className="flex aspect-square h-8 items-center justify-center rounded-full bg-white/10 p-2">
                    4
                  </span>
                  Principais necessidades e desafios
                </h2>
                <p className="ml-12 w-3/4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Magnam ullam veniam aperiam nostrum eos ut fugit, excepturi
                  deserunt quae officiis hic, cum temporibus suscipit sed nulla
                  sunt impedit eveniet. Dolore!
                </p>
              </div>
            </Dialog.DialogContent>
          </Dialog.Dialog>
        </div>
        <Button
          onClick={handleSubmitPage}
          className="mt-14 w-full max-w-sm py-6 text-lg"
        >
          Continuar
        </Button>
      </div>
    </main>
  )
}
