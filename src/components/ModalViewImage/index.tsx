import React from 'react'

import { Image } from '@/client'

interface IModalViewImageProps {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  ImageSelected: Image;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
}

const ModalViewImage = ({
  setIsOpenModal,
  ImageSelected,
  setPrompt
}: IModalViewImageProps) => {
  function handelClickUsePrompt() {
    setPrompt(ImageSelected.prompt)
    setIsOpenModal(false)
  }
  return (
    <div className="">
      <div
        className="fixed top-0 left-0 right-0 bottom-0 bg-backgroundModal z-10"
        onClick={() => setIsOpenModal(false)}
      />

      <div className="fixed top-2/4	left-2/4 translate-y-[-50%] translate-x-[-50%] z-20">
        <button
          className="absolute top-[-80px] right-[-300px] p-2 bg-backgroundCloseModal rounded-full"
          onClick={() => setIsOpenModal(false)}
        >
          <img src="/close-icon.svg" alt="" width={16} height={16} />
        </button>
        <div className="flex gap-24 w-[1200px]">
          <img
            src={ImageSelected.image_url}
            alt=""
            width={700}
            height={700}
            className="rounded-lg"
          />

          <div className="flex flex-col ">
            <span className="font-normal text-lg text-[#737474]">
              Você tem 1 Mint Pass
            </span>
            <div className="flex gap-2 mt-8">
              <button
                type="button"
                className="rounded-lg font-semibold p-3 text-base bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={() => alert('Clicou no like')}
              >
                Mintar
              </button>
              <button
                type="button"
                className="rounded-lg font-semibold p-3 text-base bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={() => handelClickUsePrompt()}
              >
                Usar Prompt
              </button>
              <button
                type="button"
                className="rounded-lg font-semibold p-3 text-base bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={() => alert('Clicou no like')}
              >
                <img
                  src="/icons/black-heart.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </button>
              <button
                type="button"
                className="rounded-lg font-semibold p-3 text-base bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={() => alert('Clicou no deletar')}
              >
                <img src="/icons/trash.svg" alt="" width={24} height={24} />
              </button>
            </div>
            <div className="mt-8">
              <span className="font-normal text-lg text-[#737474]">Prompt</span>

              <p className="mt-3 font-normal text-lg text-white">
                {ImageSelected.prompt}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalViewImage
