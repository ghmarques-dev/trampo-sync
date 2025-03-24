import { differenceInDays } from 'date-fns'
import { Project } from '@prisma/client'

import { formatterForReal } from '@/utils'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { StatusBadge } from '../../projects/status-badge'

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

export function RecentProjects() {
  return (
    <Table className="rounded-xl bg-popover max-w-full">
      <TableHeader>
        <TableRow>
          <TableHead>Nome do Projeto</TableHead>
          <TableHead>Cliente</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Custo (R$)</TableHead>
          <TableHead>Dias p/ Entrega</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {projects.map((project) => {
          const daysToDeliveryNumber = differenceInDays(
            new Date(),
            project.daysToDelivery,
          )

          return (
            <TableRow key={project.id}>
              <TableCell>{project.name}</TableCell>
              <TableCell>
                <StatusBadge status={project.status} />
              </TableCell>

              <TableCell>
                {formatterForReal({ valueInCents: project.budgetInCents })}
              </TableCell>

              <TableCell>
                {daysToDeliveryNumber < 0 ? (
                  <span className="text-[#ee3131]">
                    {Math.abs(daysToDeliveryNumber)} dias atrasado
                  </span>
                ) : daysToDeliveryNumber === 0 ? (
                  <span className="text-green-600">Entregue</span>
                ) : (
                  <span>{daysToDeliveryNumber} dias</span>
                )}
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
