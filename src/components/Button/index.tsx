import React, { ButtonHTMLAttributes } from 'react'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

const Button = (props: IButtonProps) => {
  return (
    <button
      className="text-blac
       w-full
       bg-white
       text-2xl
       font-semibold
       py-2
       px-2
       rounded-xl
       transition-colors
       hover:animate-backgroundLinearGradient
       hover:bg-[linear-gradient(50deg,#EAB597,#E8EA97,#97EAC7,#97DBEA,#97A9EA,#C597EA,#EA97BF,#EA9797)]"
      {...props}
    >
      {props.text}
    </button>
  )
}

export default Button
//
