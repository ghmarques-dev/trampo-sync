'use client'

import { EllipsisVertical } from 'lucide-react'
import { Client } from '@prisma/client'

import { Button } from '@/components/ui/button'
import { Column } from '@/components/data-table'

export const columns: Column<Client>[] = [
  {
    header: 'Nome',
    accessorKey: 'name',
  },
  {
    header: 'Email',
    accessorKey: 'email',
  },
  {
    header: 'Telefone',
    accessorKey: 'phone',
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
