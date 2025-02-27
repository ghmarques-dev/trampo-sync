'use client'

import { EllipsisVertical } from 'lucide-react'

import { formatterForReal } from '@/utils'
import { Button } from '@/components/ui/button'

import { StatusBadge } from './status-badge'

export const columns = [
  { header: 'Nome do Projeto', accessorKey: 'name' },
  { header: 'Cliente', accessorKey: 'client' },
  {
    header: 'Status',
    accessorKey: 'status',
    cell: (project) => <StatusBadge status={project.status} />,
  },
  {
    header: 'Custo (R$)',
    accessorKey: 'cost',
    cell: (project) => formatterForReal({ value: project.cost }),
  },
  {
    header: 'Dias p/ Entrega',
    accessorKey: 'daysToDelivery',
    cell: (project) => {
      if (project.daysToDelivery < 0) {
        return (
          <span className="text-[#ee3131]">
            {Math.abs(project.daysToDelivery)} dias atrasado
          </span>
        )
      } else if (project.daysToDelivery === 0) {
        return <span className="text-green-600">Entregue</span>
      } else {
        return <span>{project.daysToDelivery} dias</span>
      }
    },
  },
  {
    header: 'Ações',
    cell: (data) => (
      <div className="flex space-x-2">
        <Button
          variant="default"
          className="border-[1px] border-solid border-primary bg-popover"
          size="icon"
        >
          <EllipsisVertical size={24} className="text-white" />
        </Button>
      </div>
    ),
  },
]

const handleView = (id: string) => console.log(`Visualizando projeto ${id}`)
const handleEdit = (id: string) => console.log(`Editando projeto ${id}`)
const handleDelete = (id: string) => console.log(`Deletando projeto ${id}`)
