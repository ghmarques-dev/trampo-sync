import Link from 'next/link'
import { Metadata } from 'next'
import { BriefcaseConveyorBelt, CircleDollarSign, User } from 'lucide-react'

import { returnFirstName } from '@/utils'
import { auth } from '@/services/auth'
import { Button } from '@/components/ui/button'
import { FinanceSummary } from '@/components/finance-summary'

import { RecentProjects } from './_components/recent-projects'

export const metadata: Metadata = {
  title: 'Dashboard | TrampoSync',
}

export default async function Dashboard() {
  const session = await auth()
  if (!session?.user) return

  return (
    <div className="p-20 m-auto px-16 w-full max-w-6xl">
      <div>
        <h2 className="text-xl text-primary-foreground text-left font-medium mb-3">
          Seja bem-vindo(a), {returnFirstName({ fullName: session.user.name! })}
          <span className="text-primary">.</span>
        </h2>

        <FinanceSummary />
      </div>

      <div className="mt-16">
        <h2 className="text-xl text-primary-foreground text-left font-medium mb-3">
          Ações rápidas
        </h2>

        <div className="flex gap-4 w-full">
          <Button variant="secondary">
            <User className="text-primary h-6 w-6" />
            Adicionar cliente
          </Button>

          <Button variant="secondary" asChild>
            <Link href="/app/projects">
              <BriefcaseConveyorBelt className="text-primary" />
              Adicionar projeto
            </Link>
          </Button>

          <Button variant="secondary" asChild>
            <Link href="/app/finances">
              <CircleDollarSign className="text-primary" />
              Adicionar transação
            </Link>
          </Button>
        </div>
      </div>

      <div className="mt-16">
        <div className="flex items-center justify-between">
          <h2 className="text-xl text-primary-foreground text-left font-medium mb-3">
            Acompanhe os seus projetos
          </h2>

          <Button variant="link" className="p-0" asChild>
            <Link href="/app/projects">Ver todos</Link>
          </Button>
        </div>

        <RecentProjects />
      </div>
    </div>
  )
}
