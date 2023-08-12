'use client'
import { ButtonBackRotues } from '@/components/ButtonBackRoutes'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function Instructions() {
  const router = useRouter()
  function handleSubmitPage() {
    router.push('/onboarding/institutions')
  }
  return (
    <main className="flex h-screen w-full flex-col items-start justify-center gap-10 bg-backgroundInstructions bg-cover bg-bottom bg-no-repeat">
      <ButtonBackRotues />
      <div className="ml-32 flex max-w-2xl flex-col gap-5 rounded-lg border-l border-t border-[#9D37F2]/50 bg-[#7C7C7C14]/10 p-12 text-zinc-50 backdrop-blur-sm">
        <h1 className="text-2xl font-semibold">
          Na próxima tela, você poderá fazer o upload da logo da sua organização
          e compartilhar esta conquista nas redes sociais.
        </h1>
        <p className="text-lg">
          Após compartilhar, clique em Continuar para avançar na jornada.
        </p>
      </div>
      <Button
        className="ml-32 w-full max-w-sm py-6 text-lg"
        onClick={handleSubmitPage}
      >
        Continuar
      </Button>
    </main>
  )
}
