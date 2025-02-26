import {
  ArrowDown,
  ArrowUp,
  DollarSign,
  TrendingDown,
  TrendingUp,
} from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'

export function FinanceSummary() {
  return (
    <div className="w-full flex gap-4 justify-between flex-wrap">
      <Card className="min-w-[300px]">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="font-medium text-base text-secondary-foreground">
            Receita Total
          </CardTitle>

          <DollarSign size={16} className="text-secondary-foreground" />
        </CardHeader>

        <CardContent>
          <div className="flex w-full items-center justify-between">
            <span className="text-3xl">R$600,00</span>
            <Badge variant="outline">
              <ArrowUp size={16} className="text-[#3aca87]" />
              <span className="text-card-foreground font-light">12,5%</span>
            </Badge>
          </div>

          <span className="text-popover-foreground w-full text-xs text-right">
            +12,5% em relação ao mês anterior
          </span>
        </CardContent>
      </Card>

      <Card className="min-w-[300px]">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="font-medium text-base text-secondary-foreground">
            Despesas Total
          </CardTitle>

          <TrendingDown size={16} className="text-secondary-foreground" />
        </CardHeader>

        <CardContent>
          <div className="flex w-full items-center justify-between">
            <span className="text-3xl">R$300,00</span>
            <Badge variant="outline">
              <ArrowDown size={16} className="text-[#F04438]" />
              <span className="text-card-foreground font-light">15%</span>
            </Badge>
          </div>

          <span className="text-popover-foreground w-full text-xs text-right">
            -15% em relação ao mês anterior
          </span>
        </CardContent>
      </Card>

      <Card className="min-w-[300px]">
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle className="font-medium text-base text-secondary-foreground">
            Lucro liquido
          </CardTitle>

          <TrendingUp size={16} className="text-secondary-foreground" />
        </CardHeader>

        <CardContent>
          <div className="flex w-full items-center justify-between">
            <span className="text-3xl">R$300,00</span>

            <Badge variant="outline">
              <ArrowUp size={16} className="text-[#3aca87]" />
              <span className="text-card-foreground font-light">17%</span>
            </Badge>
          </div>

          <span className="text-popover-foreground w-full text-xs text-right">
            +17% em relação ao mês anterior
          </span>
        </CardContent>
      </Card>
    </div>
  )
}
