'use client'
import { Metadata } from 'next'
import { usePathname, useParams } from 'next/navigation'
import { ReactNode, useState } from 'react'
import {
  ArrowLeft,
  Calendar,
  File,
  HouseLine,
  MapTrifold,
  Star,
  User,
  UsersThree,
} from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dashboard',
}

type PrivateRoutes = {
  children: ReactNode
}

export default function PrivateRoutes({ children }: PrivateRoutes) {
  const params = useParams()
  const [showside, setShowSide] = useState(true)
  const pathname = usePathname()
  const SideBarItems = [
    {
      id: 1,
      route: `/dashboard/${params.id}/mission-painel`,
      name: 'Painel da Missão',
      icon: <HouseLine />,
    },
    {
      id: 2,
      route: `/dashboard/${params.id}/log-book`,
      name: 'Diário de Bordo',
      icon: <File />,
    },
    {
      id: 3,
      route: `/dashboard/${params.id}/satellite-images`,
      name: 'Imagens de Satétile',
      icon: <Star />,
    },
    {
      id: 4,
      route: `/dashboard/${params.id}/events-calendar`,
      name: 'Calendário de Eventos',
      icon: <Calendar />,
    },
    {
      id: 6,
      route: `/dashboard/${params.id}/navigation-map`,
      name: 'Mapa de Navegação',
      icon: <MapTrifold />,
    },
    {
      id: 7,
      route: `/dashboard/${params.id}/crew`,
      name: 'Tripulação',
      icon: <UsersThree />,
    },
    {
      id: 8,
      route: `/dashboard/${params.id}/profile`,
      name: 'Perfil',
      icon: <User />,
    },
  ]

  return (
    <div className="flex">
      <div className="relative max-h-screen w-max">
        <aside
          className={`${
            showside ? 'w-[19rem]' : 'w-20 2xl:w-[5.5rem]'
          } relative flex min-h-screen flex-col overflow-hidden bg-violet-900 transition-all duration-300`}
        >
          <div>
            <div className="mx-auto my-7 w-fit">
              <Link href={'/dashboard/1/profile'}>
                {showside ? (
                  <Image
                    width={160}
                    height={30}
                    src="/logoCompletedName.svg"
                    alt="Logo Cosmos"
                  />
                ) : (
                  <Image
                    width={32}
                    height={0}
                    src="/logoNotCompletedName.svg"
                    alt="Logo Cosmos"
                  />
                )}
              </Link>
            </div>

            {showside && (
              <Link
                href={'/user/painel'}
                className="mx-auto block min-w-max text-center font-semibold text-blue-400"
              >
                Voltar ao Painel Principal
              </Link>
            )}

            <div className="relative mt-2 flex min-w-max flex-col px-2">
              {SideBarItems.map((item) => {
                return (
                  <Link
                    key={item.id}
                    href={item.route}
                    className={`${
                      pathname.includes(item.route) ? 'bg-white/10' : ''
                    } z-[1] my-1 flex items-center gap-4 rounded-lg border border-solid border-transparent py-3 pl-2 pr-3 text-white transition-colors hover:border-violet-500`}
                  >
                    <span
                      className={`${
                        pathname.includes(item.route)
                          ? 'bg-purple-600'
                          : 'bg-white/10'
                      } items-center justify-center rounded-full p-2 text-center text-2xl 2xl:p-4`}
                    >
                      {item.icon}
                    </span>
                    {showside && <strong>{item.name}</strong>}
                  </Link>
                )
              })}
            </div>
          </div>

          <div
            className={`${
              showside ? '' : 'hidden'
            } mt-auto flex min-w-max flex-col gap-1 bg-blue-900 px-2 py-4 text-white`}
          >
            <Link href="/">Precisa de ajuda?</Link>
            <Link href="/" className="text-blue-400">
              Chat do Controle da Missão
            </Link>
          </div>
        </aside>
        <button
          onClick={() => setShowSide(!showside)}
          className={`absolute left-full top-1/2 z-20 h-fit -translate-y-1/2 rounded-r-lg bg-violet-900 px-1 py-5 text-lg text-white`}
        >
          <ArrowLeft
            className={`${
              !showside && 'rotate-180'
            } transition-transform duration-300`}
          />
        </button>
      </div>
      {children}
    </div>
  )
}
