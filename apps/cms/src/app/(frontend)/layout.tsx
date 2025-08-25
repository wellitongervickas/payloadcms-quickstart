import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  description: 'Quick start using PayloadCMS and Shadcn',
  title: 'Repo - Home',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
