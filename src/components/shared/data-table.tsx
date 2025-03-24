'use client'

import { useState } from 'react'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

import { Button } from '../ui/button'

export type Column<T> = {
  header: string
  accessorKey: keyof T
  cell?: (item: T) => React.ReactNode
}

type DataTableProps<T> = {
  data: T[]
  columns: Column<T>[]
  itemsPerPage?: number
}

export function DataTable<T>({
  data,
  columns,
  itemsPerPage = 10,
}: DataTableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(data.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = data.slice(startIndex, endIndex)

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)))
  }

  function renderCell(item: T, column: Column<T>) {
    if (column.cell) {
      return column.cell(item)
    }

    const key = column.accessorKey as keyof T
    return item[key] as React.ReactNode
  }

  return (
    <div>
      <Table className="rounded-xl bg-popover max-w-full">
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead
                key={column.header}
                className={`w-1/${columns.length}`}
              >
                {column.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {currentData.map((item, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableCell key={column.header}>
                  {renderCell(item, column)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {totalPages !== 1 && (
        <Pagination className="mt-4">
          <PaginationContent>
            <PaginationItem>
              <Button variant="link" asChild>
                <PaginationPrevious
                  className="hover:bg-transparent hover:text-primary hover:underline"
                  onClick={() => goToPage(currentPage - 1)}
                  aria-disabled={currentPage === 1}
                />
              </Button>
            </PaginationItem>

            {[...Array(totalPages)].map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  className="border-0"
                  onClick={() => goToPage(i + 1)}
                  isActive={currentPage === i + 1}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <Button variant="link" asChild>
                <PaginationNext
                  className="hover:bg-transparent hover:text-primary hover:underline"
                  onClick={() => goToPage(currentPage + 1)}
                  aria-disabled={currentPage === totalPages}
                />
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  )
}
