import "./globals.css"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const outfit = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Malindu Liyanage | Technical Lead | Executive Full Stack Developer",
  description:
    "Portfolio of Malindu Liyanage — Technical Lead and Executive Full Stack Developer. Full-stack web and mobile delivery, team leadership, and project management.",
  keywords:
    "Malindu Liyanage, Technical Lead, Executive Full Stack Developer, Project Manager, Next.js, React, Laravel, Node.js, PHP, MySQL, n8n, Portfolio",
  authors: [{ name: "Malindu Liyanage" }],
  openGraph: {
    title: "Malindu Liyanage | Technical Lead",
    description:
      "Technical Lead and Executive Full Stack Developer — full-stack engineering, leadership, and delivery.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}