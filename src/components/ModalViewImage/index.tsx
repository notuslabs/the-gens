import React from 'react'
import Button from '../Button'

interface IModalViewImageProps {
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalViewImage = ({ setIsOpenModal }: IModalViewImageProps) => {
  const [userWalletAddress, setuserWalletAddress] = React.useState('')

  return (
    <div className="">
      <div
        className="fixed top-0 left-0 right-0 bottom-0 bg-backgroundModal backdrop-blur-md backdrop-opacity-10 z-10"
        onClick={() => setIsOpenModal(false)}
      />

      <div className="fixed top-2/4	left-2/4 translate-y-[-50%] translate-x-[-50%] z-20">
        <button
          className="absolute right-0 p-4 bg-backgroundCloseModal rounded-full"
          onClick={() => setIsOpenModal(false)}
        >
          <img src="/close-icon.svg" alt="" width={25} height={25} />
        </button>
        <div className="flex">
          <img
            src="https://res.cloudinary.com/dmztvy5k7/image/upload/v1680373568/oyui306ouvf3ymswno7g.png"
            alt=""
            width={1024}
            height={1024}
          />

          <div className="flex flex-col ">
            <div className="flex">
              <Button text="Mintar" />
              <Button text="UsarPrompt" />
              <Button text="baixar" />
              <Button text="Salvar" />
              <Button text="deletar" />
            </div>
            <div>
              <span>Prompt</span>

              <p>
                black and white clockworks, dramatic lights, intricate details
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalViewImage
