import Image from 'next/image'
import { ToastContainer } from 'react-toastify'
import { FormLogin } from './components/form'

export default function Login() {
  return (
    <div className="flex h-screen w-full bg-[#F9FAFF]">
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
      <FormLogin />
      <ToastContainer autoClose={2000} limit={3} />
    </div>
  )
}
