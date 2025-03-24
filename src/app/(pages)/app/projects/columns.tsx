'use client'

import { EllipsisVertical } from 'lucide-react'
import { differenceInDays } from 'date-fns'
import { Project } from '@prisma/client'

import { formatterForReal } from '@/utils'
import { Button } from '@/components/ui/button'
import { Column, StatusBadge } from '@/components/shared'

export const columns: Column<Project>[] = [
  { header: 'Nome do Projeto', accessorKey: 'name' },
  {
    header: 'Status',
    accessorKey: 'status',
    cell: (project: Project) => <StatusBadge status={project.status} />,
  },
  {
    header: 'Custo (R$)',
    accessorKey: 'budgetInCents',
    cell: (project: Project) =>
      formatterForReal({ valueInCents: project.budgetInCents }),
  },
  {
    header: 'Dias p/ Entrega',
    accessorKey: 'daysToDelivery',
    cell: (project: Project) => {
      const daysToDeliveryNumber = differenceInDays(
        new Date(),
        project.daysToDelivery,
      )

      if (daysToDeliveryNumber < 0) {
        return (
          <span className="text-[#ee3131]">
            {Math.abs(daysToDeliveryNumber)} dias atrasado
          </span>
        )
      }

      if (daysToDeliveryNumber === 0) {
        return <span className="text-green-600">Entregue</span>
      }

      return <span>{daysToDeliveryNumber} dias</span>
    },
  },
  {
    header: 'Ações',
    accessorKey: 'id',
    cell: () => (
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
