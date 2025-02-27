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

type Project = {
  id: string
  name: string
  client: string
  status: 'Em andamento' | 'Concluído' | 'Atrasado'
  cost: number
  daysToDelivery: number
}

const projects: Project[] = [
  {
    id: '1',
    name: 'Website Redesign',
    client: 'Tech Innovators Inc.',
    status: 'Em andamento',
    cost: 15000,
    daysToDelivery: 15,
  },
  {
    id: '2',
    name: 'Mobile App Development',
    client: 'StartUp Solutions',
    status: 'Atrasado',
    cost: 30000,
    daysToDelivery: -5,
  },
  {
    id: '3',
    name: 'E-commerce Platform',
    client: 'Global Retail Co.',
    status: 'Em andamento',
    cost: 25000,
    daysToDelivery: 30,
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
        {projects.map((project) => (
          <TableRow key={project.id}>
            <TableCell>{project.name}</TableCell>
            <TableCell>{project.client}</TableCell>
            <TableCell>
              <StatusBadge status={project.status} />
            </TableCell>

            <TableCell>{formatterForReal({ value: project.cost })}</TableCell>

            <TableCell>
              {project.daysToDelivery < 0 ? (
                <span className="text-[#ee3131]">
                  {Math.abs(project.daysToDelivery)} dias atrasado
                </span>
              ) : project.daysToDelivery === 0 ? (
                <span className="text-green-600">Entregue</span>
              ) : (
                <span>{project.daysToDelivery} dias</span>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
