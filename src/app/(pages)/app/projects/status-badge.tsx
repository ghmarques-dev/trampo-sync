import { Badge } from '@/components/ui/badge'

type ProjectStatus = 'Em andamento' | 'Concluído' | 'Atrasado'

const statusClasses = new Map<ProjectStatus, string>([
  [
    'Em andamento',
    'bg-[#FFEA00]/30 border border-[#FFEA00] text-[#FFEA00] hover:bg-[#FFEA00]/50',
  ],
  [
    'Concluído',
    'bg-[#33FF00]/30 border border-[#33FF00] text-[#33FF00] hover:bg-[#33FF00]/50',
  ],
  [
    'Atrasado',
    'bg-[#ee3131]/30 border border-[#ee3131] text-[#ee3131] hover:bg-[#ee3131]/50',
  ],
])

type StatusBadgeProps = {
  status: ProjectStatus
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return <Badge className={statusClasses.get(status)}>{status}</Badge>
}
