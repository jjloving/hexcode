"use client"

import { useState } from "react"
import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectsTab } from "@/components/admin/ProjectsTab"
import { PagesTab } from "@/components/admin/PagesTab"
import { NavigationTab } from "@/components/admin/NavigationTab"
import { FooterTab } from "@/components/admin/FooterTab"
import { Code2, LogOut } from "lucide-react"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("projects")

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-black">
      <header className="bg-blue-950/50 border-b border-blue-900/50 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
              Admin Dashboard
            </span>
          </div>
          <Button variant="outline" onClick={() => signOut()} size="sm">
            <LogOut className="h-4 w-4 mr-2" /> Sign Out
          </Button>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 w-full max-w-2xl mx-auto mb-8">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="pages">Pages</TabsTrigger>
            <TabsTrigger value="navigation">Navigation</TabsTrigger>
            <TabsTrigger value="footer">Footer</TabsTrigger>
          </TabsList>

          <TabsContent value="projects">
            <ProjectsTab />
          </TabsContent>

          <TabsContent value="pages">
            <PagesTab />
          </TabsContent>

          <TabsContent value="navigation">
            <NavigationTab />
          </TabsContent>

          <TabsContent value="footer">
            <FooterTab />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}