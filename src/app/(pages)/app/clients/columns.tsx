'use client'

import { EllipsisVertical } from 'lucide-react'

import { Button } from '@/components/ui/button'

export const columns = [
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
    header: 'Total recebido',
    accessorKey: 'totalReceived',
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
