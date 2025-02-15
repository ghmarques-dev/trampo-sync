import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

import '@/styles/globals.css'

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin-ext'],
})

export const metadata: Metadata = {
  title:
    'EmpreendaFácil | Finanças Descomplicadas para Freelancers e Microempresários',
  description:
    'EmpreendaFácil é um micro-SaaS para freelancers e microempreendedores que buscam gerenciar suas finanças de maneira simples e eficaz. Ele oferece recursos como o controle de receitas e despesas, geração de faturas e relatórios financeiros, e lembretes de cobranças, tudo em uma interface intuitiva.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
