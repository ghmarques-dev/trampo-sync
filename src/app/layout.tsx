import { Poppins } from 'next/font/google'
import type { Metadata } from 'next'

import '@/styles/globals.css'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin-ext'],
})

export const metadata: Metadata = {
  title: 'EmpreendaFácil | Finanças para Freelancers e Microempresários',
  description:
    'O EmpreendaFácil ajuda freelancers e autônomos a gerenciar projetos, clientes e finanças de forma simples e eficiente. Experimente grátis',
  authors: [
    { name: 'Guilherme Henrique Marques', url: 'https://ghmarques.vercel.app' },
  ],
  keywords: [
    'gestão financeira para freelancers',
    'controle de clientes',
    'finanças para autônomos',
    'gestão de projetos',
    'precificação para devs',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.className} antialiased min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
