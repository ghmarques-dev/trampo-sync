import { Cog, LogOut, Rocket } from 'lucide-react'

import { addEllipsisInEmail, formatNameForAvatar } from '@/utils'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

type UserDropdownProps = {
  user: {
    id: string
    name: string
    email: string
    image: string
  }
}

export function UserDropdown({ user }: UserDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="link"
          className="w-full flex items-center justify-between space-x-2 !px-0"
        >
          <Avatar>
            <AvatarImage src={user.image} />

            <AvatarFallback>
              {formatNameForAvatar({ name: user.name })}
            </AvatarFallback>
          </Avatar>

          <div className="flex flex-col flex-1 space-y-1 text-left">
            <p className="text-xs font-semibold leading-none text-primary-foreground">
              {user.name}
            </p>

            <p className="text-xs leading-none text-popover-foreground hover:underline">
              {addEllipsisInEmail({ text: user.email, maxLength: 20 })}
            </p>
          </div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-56 bg-secondary rounded-xl"
        align="end"
        forceMount
      >
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {addEllipsisInEmail({ text: user.email, maxLength: 30 })}
            </p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Cog className="w-3 h-3 mr-3" />
            Configurações
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Rocket className="w-3 h-3 mr-3" />
            Minha assinatura
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="focus:bg-red-700/60">
          <LogOut className="w-3 h-3 mr-3" />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
