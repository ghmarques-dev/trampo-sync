import Image from 'next/image'
import { Metadata } from 'next'

import { ButtonSignIn } from './_components/button-sign-in'

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

          <ButtonSignIn />
        </div>
      </div>

      <div className="w-[60%] p-20 flex items-center justify-center">
        <div className="w-10/12">
          <h2 className="text-primary-foreground text-xl mb-4">
            Crie sua conta para começar a gerenciar suas faturas e projetos com
            facilidade!
          </h2>

          <Image
            src="/images/Dashboard-example.png"
            alt="Imagem ilustrativa do Dashbord"
            width={600}
            height={333}
          />
        </div>
      </div>
    </div>
  )
}
