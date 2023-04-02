import React, { ButtonHTMLAttributes } from 'react'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  buttonSelected?: number;
  isLoading?: boolean;
}

const Button = (props: IButtonProps) => {
  const search: Record<number, string> = {
    1: 'bg-[linear-gradient(50deg,#EAB597,#E8EA97,#97EAC7,#97DBEA,#97A9EA,#C597EA,#EA97BF,#EA9797)] animate-backgroundLinearGradient',
    2: 'bg-white'
  }

  return (
    <button
      className={`text-blac
       w-full
       ${search[props.buttonSelected ? props.buttonSelected : 2]}
       text-2xl
       font-semibold
       py-2
       px-2
       rounded-xl
       transition-colors
       hover:animate-backgroundLinearGradient
       hover:bg-[linear-gradient(50deg,#EAB597,#E8EA97,#97EAC7,#97DBEA,#97A9EA,#C597EA,#EA97BF,#EA9797)]
      `}
      {...props}
      disabled={props.isLoading}
    >
      {props.text}
    </button>
  )
}

export default Button
