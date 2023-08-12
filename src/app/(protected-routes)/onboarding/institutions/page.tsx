'use client'
import { ButtonBackRotues } from '@/components/ButtonBackRoutes'
import { DialogCrop } from '@/components/Crop/DialogCrop'
import SettingCropArea from '@/components/Crop/SettingCropArea'
import UploadImage from '@/components/Crop/UploadImage'
import { Camera, DownloadSimple, UploadSimple } from '@phosphor-icons/react'
import html2canvas from 'html2canvas'
import Image from 'next/image'
import { useState } from 'react'

export default function Institutions() {
  const [selectedImg, setSelectedImg] = useState('')
  const [profilePhoto, setProfilePhoto] = useState('')
  const [onDialog, setOnDialog] = useState(false)
  const [printImage, setPrintImage] = useState('')

  function receiveImg(source: string) {
    setSelectedImg(source)
    setOnDialog(true)
  }

  function handleImg(image: string) {
    setProfilePhoto(image)
    setOnDialog(false)
  }

  async function takeScreenshot() {
    const canvas = await html2canvas(document.querySelector('.card')!)
    const base64Image = canvas.toDataURL('image/jpg')

    setPrintImage(base64Image)
  }

  return (
    <div className="relative">
      <ButtonBackRotues />
      <header className="absolute inset-x-0 flex items-center justify-end gap-12 bg-violet-900/50 px-20 py-3 text-gray-100 backdrop-blur-lg">
        <a
          href={printImage}
          download
          onClick={(e) => {
            !printImage && e.preventDefault()
          }}
        >
          <DownloadSimple size={40} />
        </a>
        {/* <ToShare /> */}
      </header>

      <div className="card flex min-h-screen min-w-[1080px] flex-col items-center gap-5 bg-backgroundInstitutions bg-cover bg-center py-28">
        <div className="w-80 rounded-[20px] border-2 border-solid border-blue-900 bg-blue-800/90 p-5">
          <UploadImage updateImgSrc={receiveImg}>
            <div className="relative aspect-square w-full cursor-pointer overflow-hidden rounded-[10px] border-2 border-solid border-blue-700 bg-gray-100">
              {profilePhoto ? (
                <>
                  <Image
                    className="rounded-[10px]"
                    alt="Foto de usuário"
                    onLoad={takeScreenshot}
                    src={profilePhoto}
                    width={320}
                    height={320}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black text-gray-100 opacity-0 transition-opacity hover:opacity-30">
                    <Camera size={56} />
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 m-5 flex flex-col items-center justify-center gap-5 rounded-lg border border-dashed border-gray-400 bg-gray-200">
                  <UploadSimple size={32} />
                  <span className="text-lg text-gray-900">
                    Insira sua foto aqui
                  </span>
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 h-1/3 w-full bg-gradient-to-b from-transparent to-gray-900 " />
            </div>
          </UploadImage>
          <DialogCrop onDialog={onDialog} setOnDialog={setOnDialog}>
            <SettingCropArea
              selectedImgSrc={selectedImg}
              handleImg={handleImg}
              aspectRatio={1 / 1}
              cropShape={'rect'}
            />
          </DialogCrop>

          <h1 className="mx-3 mb-5 mt-2 text-4xl font-semibold text-gray-100">
            Teste
          </h1>

          <p className="mx-3 text-gray-100">
            [Função] em uma jornada para mentorar a organização social Nome
            institute
          </p>
        </div>

        <div className="mt-5 flex w-80 items-end justify-between px-4">
          {/* {company.logo && (
            <Image
              className="max-h-14 w-auto"
              alt="Logo da empresa"
              src={company.logo}
              width={100}
              height={56}
              quality={100}
            />
          )} */}
          <Image
            width={200}
            height={200}
            className="h-7 w-auto"
            alt="Logo Cosmos"
            src="/logo.png"
          />
        </div>
      </div>
    </div>
  )
}
