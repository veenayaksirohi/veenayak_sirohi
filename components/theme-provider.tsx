'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Ready for color palette and dark mode support. Extend here for future color mode switching.
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
