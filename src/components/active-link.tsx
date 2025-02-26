'use client'

import React, { ComponentProps } from 'react'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

type ActiveLink = ComponentProps<typeof Link>

export function ActiveLink(props: ActiveLink) {
  const pathname = usePathname()

  return (
    <Link
      {...props}
      data-current={pathname === props.href}
      className="flex items-center w-full py-2 rounded-xl gap-1.5 text-base font-semibold text-popover-foreground transition-colors hover:text-popover-foreground/60 data-[current=true]:bg-muted data-[current=true]:px-3 data-[current=true]:text-primary-foreground"
    ></Link>
  )
}
