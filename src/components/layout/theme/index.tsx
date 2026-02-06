'use client'

import { usePathname } from 'next/navigation'
import { createContext, useContext, useEffect, useState } from 'react'
import type { Themes } from '@/styles/colors'
import { type ThemeName, themes } from '@/styles/config'

export const ThemeContext = createContext<{
  name: ThemeName
  theme: Themes[ThemeName]
  setThemeName: (theme: ThemeName) => void
}>({
  name: 'dark',
  theme: themes.dark,
  setThemeName: () => {
    throw new Error('ThemeContext must be used within Theme provider')
  },
})

export function useTheme() {
  return useContext(ThemeContext)
}

export function Theme({
  children,
  theme,
  global,
}: {
  children: React.ReactNode
  theme: ThemeName
  global?: boolean
}) {
  const pathname = usePathname()
  const [currentTheme, setCurrentTheme] = useState(theme)

  useEffect(() => {
    setCurrentTheme(theme)
  }, [theme])

  // biome-ignore lint/correctness/useExhaustiveDependencies: re-apply theme on route change
  useEffect(() => {
    if (global) {
      document.documentElement.setAttribute('data-theme', currentTheme)
    }
  }, [pathname, currentTheme, global])

  return (
    <>
      {global && (
        <script
          suppressHydrationWarning
          // biome-ignore lint/security/noDangerouslySetInnerHtml: theme script for data-theme before paint
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.setAttribute('data-theme', '${currentTheme}');`,
          }}
        />
      )}
      <ThemeContext.Provider
        value={{
          name: currentTheme,
          theme: themes[currentTheme],
          setThemeName: setCurrentTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </>
  )
}
