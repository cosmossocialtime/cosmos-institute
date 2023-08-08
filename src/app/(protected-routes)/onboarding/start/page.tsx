import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Teste() {
  return (
    <main className="h-screen w-full items-center justify-center">
      <Image
        src="/onboardingStart.png"
        width={1000}
        height={1000}
        alt="background cosmonauta"
        className="relative h-full w-full bg-cover bg-no-repeat"
      />
      <div className="absolute left-1/3 top-1/2 flex max-w-xl -translate-x-1/2 -translate-y-1/2 flex-col gap-7 rounded-2xl bg-[#7C7C7C]/10 p-14 backdrop-blur-md">
        <h1 className="text-3xl font-semibold text-zinc-50">
          Olá, Cosmonauta!
        </h1>
        <span className="text-xl text-zinc-50">
          Boas-vindas ao programa [Nome do Programa]. Prepare-se para uma
          aventura!
        </span>
        <Button className="py-6 text-lg">Vamos lá!</Button>
      </div>
    </main>
  )
}
