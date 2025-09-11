"use client"
import * as React from "react"

type TabContextType = {
  activeTab: string
  setActiveTab: (tab: string) => void
}

const TabContext = React.createContext<TabContextType | undefined>(undefined)

export function TabProvider({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = React.useState("home") // default tab
  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  )
}

export function useTab() {
  const ctx = React.useContext(TabContext)
  if (!ctx) throw new Error("useTab must be used inside TabProvider")
  return ctx
}
