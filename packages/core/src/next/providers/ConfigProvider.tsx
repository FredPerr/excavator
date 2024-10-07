"use client"
import React from "react"
import { createContext, useContext } from "react"
import { type ClientConfig } from "../../cms/utils/createClientConfig"

type ClientConfigContext = {
  config: ClientConfig
}

const Context = createContext<ClientConfigContext | undefined>(undefined)

export const ConfigProvider: React.FC<{
  readonly config: ClientConfig
  readonly children: React.ReactNode
}> = ({ config, children }) => {
  return <Context.Provider value={{ config }}>{children}</Context.Provider>
}

export const useConfig = (): ClientConfigContext => {
  const context = useContext(Context)
  if (!context) {
    throw new Error("useConfig must be used within a ConfigProvider")
  }
  return context
}
