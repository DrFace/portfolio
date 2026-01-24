import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Technical Lead | Developer | Project Manager - Portfolio',
  description: 'Professional portfolio showcasing expertise in software development, team leadership, and project management. Specializing in React, Node.js, and full-stack development.',
  keywords: 'Technical Lead, Software Developer, Project Manager, Full Stack Developer, React, Node.js, Portfolio',
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Technical Lead | Developer | Project Manager',
    description: 'Professional portfolio showcasing expertise in software development and leadership',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
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
