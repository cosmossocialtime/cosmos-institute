import { ButtonBackRotues } from '@/components/ButtonBackRoutes'
import { Button } from '@/components/ui/button'

export default function Institutions() {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-backgroundFinish bg-cover bg-bottom bg-no-repeat">
      <ButtonBackRotues />
      <div className="flex max-w-xl flex-col items-center gap-5 rounded-lg border-l border-t border-[#9D37F2]/50 bg-[#7C7C7C14]/10 p-12 text-zinc-50 backdrop-blur-sm">
        <h1 className="text-center text-2xl font-semibold">
          Tudo pronto para a decolagem!
        </h1>
        <p className="text-xl">
          Os preparativos foram finalizados! O painel com as etapas da missão
          agora já está disponível para você começar. Vamos lá?
        </p>
        <Button className="mt-10 w-full max-w-sm py-6 text-lg">
          Dar a partida!
        </Button>
      </div>
    </main>
  )
}
