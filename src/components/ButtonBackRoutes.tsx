'use client'
import { ArrowLeft } from 'lucide-react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

export function ButtonBackRotues() {
  const router = useRouter()
  return (
    <Button
      onClick={() => router.back()}
      className="absolute left-24 top-24 rounded-full border-none bg-[#EFF1F5]/10 py-7 backdrop-blur-sm hover:bg-purple-600"
      variant={'outline'}
    >
      <ArrowLeft className="text-zinc-50" width={24} />
    </Button>
  )
}
