import { auth } from '@/services/auth'
import { links } from '@/constants/links'

import { UserDropdown } from './user-dropdown'
import { ActiveLink } from './active-link'

export async function SideBar() {
  const session = await auth()
  if (!session?.user) return

  return (
    <aside className="w-80 p-4 h-screen flex flex-col justify-between">
      <div className="pt-4">
        <h2 className="text-xl text-primary-foreground text-left font-medium">
          TrampoSync<span className="text-foreground">.</span>
        </h2>

        <ul className="mt-12">
          {links.top.map((item) => {
            const Icon = item.icon

            return (
              <li key={item.name}>
                <ActiveLink href={item.url}>
                  <Icon size={24} />

                  <span className="text-sm">{item.name}</span>
                </ActiveLink>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="pt-4 border-t-[1px] border-popover-foreground border-solid">
        {links.bottom.map((item) => {
          const Icon = item.icon

          return (
            <div key={item.name} className="mb-2">
              <ActiveLink href={item.url} className="flex w-full">
                <Icon size={24} />

                <span className="text-sm">{item.name}</span>
              </ActiveLink>
            </div>
          )
        })}

        <UserDropdown
          user={{
            id: session.user.id!,
            name: session.user.name!,
            email: session.user.email!,
            image: session.user.image!,
          }}
        />
      </div>
    </aside>
  )
}
