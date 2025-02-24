import { AuthError } from 'next-auth'
import { TRPCError } from '@trpc/server'

import { signIn } from '@/services/auth'

import { publicProcedure, router } from '../trpc'

export const authRouter = router({
  loginWithGoogle: publicProcedure.mutation(async () => {
    try {
      const result = await signIn('google', { redirect: false })

      if (!result || result.error) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'Falha na autenticação com o Google.',
        })
      }

      return { success: true }
    } catch (error) {
      if (error instanceof AuthError) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'Erro de autenticação: ' + error.message,
        })
      }

      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Erro inesperado ao tentar autenticar com o Google.',
      })
    }
  }),
})
