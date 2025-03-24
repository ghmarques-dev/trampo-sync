import { PropsWithChildren } from 'react'

import { SideBar } from '@/components/shared/sidebar'

export default async function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex w-screen min-h-screen">
      <SideBar />

      <div className="bg-secondary w-full">{children}</div>
    </div>
  )
}
