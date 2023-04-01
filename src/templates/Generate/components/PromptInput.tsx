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
    <div className="h-[420px] px-6 py-3 mt-4 border border-solid rounded-md border-slate-500">
      <p className="text-gray-600">Prompt</p>
      <textarea
        className="w-full h-full bg-inherit resize-none outline-none text-white text-lg leading-6"
        onChange={e => handlePromptInput(e.target.value)}
        placeholder="type a prompt here..."
        value={currentPrompt}
      />
    </div>
  )
}
