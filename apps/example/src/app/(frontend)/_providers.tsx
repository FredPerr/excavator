'use client'

import { ClientConfig } from '@fredperr/excavator/cms'
import {
  AuthProvider,
  ConfigProvider,
  LocaleProvider,
  ThemeProvider,
} from '@fredperr/excavator/next'
import { Theme } from '@fredperr/excavator/next/theme/types'

type ProvidersProps = {
  children: React.ReactNode
  config: ClientConfig
  theme: Theme
}

export function Providers({ children, config, theme }: ProvidersProps) {
  return (
    <ConfigProvider config={config}>
      <LocaleProvider>
        <ThemeProvider theme={theme} defaultTheme="light">
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
      </LocaleProvider>
    </ConfigProvider>
  )
}
