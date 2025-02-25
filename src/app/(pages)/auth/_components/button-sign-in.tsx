'use client'

import { useState } from 'react'

import { toast } from 'sonner'
import { signIn } from 'next-auth/react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'

export function ButtonSignIn() {
  const [isPending, setIsPending] = useState(false)

  async function handleSignIn() {
    setIsPending(true)

    const result = await signIn('google', {
      redirect: true,
      redirectTo: '/app',
    })

    if (result?.error) {
      toast.error('Falha na autenticação com o Google.')
    } else {
      toast.success('Você entrou na TrampoSync, aguarde um instante.')
    }

    setIsPending(false)
  }

  return (
    <Button
      variant="secondary"
      className="w-full"
      onClick={handleSignIn}
      disabled={isPending}
    >
      <Image
        alt="Logo do Google"
        src="/images/Google.png"
        width="24"
        height="24"
      />
      <span>Continuar com o Google</span>
    </Button>
  )
}
