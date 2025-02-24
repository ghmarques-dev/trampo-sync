import Image from 'next/image'
import { Metadata } from 'next'

import {} from 'lucide-react'

import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Entrar | TrampoSync',
}

export default function Auth() {
  return (
    <div className="flex h-screen">
      <div className="bg-secondary w-[40%] p-10 flex items-center justify-center">
        <div className="w-10/12">
          <h1 className="text-2xl text-primary text-center">
            TrampoSync<span className="text-primary-foreground">.</span>
          </h1>

          <h2 className="text-primary-foreground text-xl text-center my-1">
            Entre na TrampoSync
          </h2>

          <p className="text-popover-foreground text-xs text-center mb-3">
            Crie sua conta para começar a gerenciar suas faturas e projetos com
            facilidade!
          </p>

          <Button variant="secondary" className="w-full">
            <Image
              alt="Logo do Google"
              src="/images/Google.png"
              width="24"
              height="24"
            />
            <span>Continuar com o Google</span>
          </Button>
        </div>
      </div>

      <div className="w-[60%] p-20 flex items-center justify-center">
        <div className="w-10/12">
          <h2 className="text-primary-foreground text-xl mb-4">
            Crie sua conta para começar a gerenciar suas faturas e projetos com
            facilidade!
          </h2>

          <img
            src="/images/Dashboard-example.png"
            alt="Imagem ilustrativa do Dashbord"
          />
        </div>
      </div>
    </div>
  )
}
