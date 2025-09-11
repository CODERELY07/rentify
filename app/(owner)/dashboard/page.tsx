"use client"

import AppBarChart from "@/components/AppBarChart"
import { TotalVisitor } from "@/components/TotalVisitorChart"

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="p-4 bg-primary-foreground  rouneded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart/>
      </div>
      <div className="p-4 bg-primary-foreground  rouneded-lg">Test</div>
      <div className="p-4 bg-primary-foreground  rouneded-lg">
        <TotalVisitor/>
      </div>
      <div className="p-4 bg-primary-foreground  rouneded-lg">Test</div>
      <div className="p-4 bg-primary-foreground  rouneded-lg">Test</div>
      <div className="p-4 bg-primary-foreground  rouneded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">Test</div>
    </div>
  )
}
