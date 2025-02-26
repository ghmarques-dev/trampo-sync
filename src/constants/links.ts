import { ElementType } from 'react'

import {
  BriefcaseConveyorBelt,
  CircleDollarSign,
  House,
  Phone,
  User,
} from 'lucide-react'

type Link = {
  name: string
  url: string
  icon: ElementType
}

type Links = {
  top: Link[]
  bottom: Link[]
}

export const links: Links = {
  top: [
    { name: 'Início', url: '/app', icon: House },
    { name: 'Clientes', url: '/app/clients', icon: User },
    { name: 'Projetos', url: '/app/projects', icon: BriefcaseConveyorBelt },
    { name: 'Finanças', url: '/app/finances', icon: CircleDollarSign },
  ],
  bottom: [{ name: 'Suporte', url: '/app/support', icon: Phone }],
}
