'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // ThemeProvider is ready for black backgrounds and energetic orange accents.
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
