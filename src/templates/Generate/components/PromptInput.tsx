import React from 'react'

export type PromptInputProps = {
  onPromptInput: (currentInput: string) => void
}

export function PromptInput({ onPromptInput }: PromptInputProps) {
  const [currentPrompt, setCurrentPrompt] = React.useState('')

  const handlePromptInput = (currentInput: string) => {
    setCurrentPrompt(currentInput)
    onPromptInput(currentInput)
  }

  return (
    <div className="flex rounded-lg py-3 px-6 bg-black max-w-[33.5rem] h-[38.4375rem] flex-col border-2 border-[#737474]">
      <span className="text-[#737374] select-none text-lg leading-6 font-normal">
        Prompt
      </span>
      <textarea
        className="bg-inherit resize-none outline-none h-full text-white text-lg leading-6 my-4"
        onChange={e => handlePromptInput(e.target.value)}
        placeholder="type a prompt here..."
      >
        {currentPrompt}
      </textarea>
    </div>
  )
}
