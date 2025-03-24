import Link from 'next/link'
import { Metadata } from 'next'
import { BriefcaseConveyorBelt, Search } from 'lucide-react'
import { Project } from '@prisma/client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/shared'

import { columns } from './columns'

export const metadata: Metadata = {
  title: 'Projetos | TrampoSync',
}

const projects: Project[] = [
  {
    id: '1',
    name: 'Website Redesign',
    status: 'Progress',
    clientId: 'client-01',
    budgetInCents: BigInt(123),
    daysToDelivery: new Date(),
  },
  {
    id: '1',
    name: 'Website Redesign',
    status: 'Progress',
    clientId: 'client-01',
    budgetInCents: BigInt(123),
    daysToDelivery: new Date(),
  },
  {
    id: '2',
    name: 'Website Redesign',
    status: 'Completed',
    clientId: 'client-01',
    budgetInCents: BigInt(123),
    daysToDelivery: new Date(),
  },
  {
    id: '3',
    name: 'Website Redesign',
    status: 'Canceled',
    clientId: 'client-01',
    budgetInCents: BigInt(123),
    daysToDelivery: new Date(),
  },
]

export default function Projects() {
  return (
    <div className="p-20 m-auto px-16 w-full max-w-6xl">
      <header>
        <h2 className="text-xl text-primary-foreground text-left font-semibold">
          Seus projetos
          <span className="text-primary">.</span>
        </h2>

        <p className="text-secondary-foreground font-medium">
          Acompanhe os seus projetos em andamento
        </p>
      </header>

      <main className="mt-8">
        <div className="mb-4 flex items-center justify-between gap-8">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 text-muted-foreground" />

            <Input
              type="search"
              placeholder="Buscar projeto"
              className="p-6 pl-12 text-popover-foreground font-medium bg-popover border-0"
            />
          </div>

          <Button variant="secondary" asChild>
            <Link href="/app/projects">
              <BriefcaseConveyorBelt className="text-primary" />
              Adicionar projeto
            </Link>
          </Button>
        </div>

        <DataTable data={projects} columns={columns} />
      </main>
    </div>
  )
}
