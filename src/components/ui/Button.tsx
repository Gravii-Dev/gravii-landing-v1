import type React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  icon?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  icon,
  children,
  className = '',
  ...props
}) => {
  const baseStyle = `
    relative px-8 py-3 rounded-xl
    border border-white/20 bg-white/5
    text-white/90 font-gambarino text-xl font-bold
    hover:bg-acid-400/10 hover:border-acid-400/50 hover:text-acid-300 hover:scale-[1.02]
    active:scale-95 transition-all duration-300
    focus:outline-none focus-visible:ring-2 focus-visible:ring-acid-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
    flex items-center justify-center gap-2
  `

  return (
    <button className={`${baseStyle} ${className}`} {...props}>
      <span>{children}</span>
      {icon && icon}
    </button>
  )
}
