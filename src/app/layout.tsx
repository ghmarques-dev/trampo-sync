import { Poppins } from 'next/font/google'
import type { Metadata } from 'next'

import '@/styles/globals.css'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin-ext'],
})

export const metadata: Metadata = {
  title: 'TrampoSync | Finanças para Freelancers e Microempresários',
  description:
    'TrampoSync é uma plataforma web construída para ajudar freelancers e autônomos a gerenciarem seus projetos e clientes de forma simples e eficiente. O objetivo é oferecer uma solução prática e organizada para controlar receita, despesas e lucro, permitindo que você foque no que realmente importa: o seu trabalho.',
  authors: [
    { name: 'Guilherme Henrique Marques', url: 'https://www.ghmarques.me/' },
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
