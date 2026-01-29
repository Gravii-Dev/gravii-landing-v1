import type React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
  const baseStyle = `
    w-full bg-[#111] border border-white/10 rounded-xl p-4
    text-white/80 placeholder-white/20 font-gambarino text-lg
    focus:outline-none focus:border-acid-400/50 focus:bg-[#161616]
    transition-all duration-300
  `

  return <input className={`${baseStyle} ${className}`} {...props} />
}
