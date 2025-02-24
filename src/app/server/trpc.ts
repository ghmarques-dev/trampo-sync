import { cache } from 'react'

import superjson from 'superjson'
import { initTRPC } from '@trpc/server'
import { PrismaClient } from '@prisma/client'

import { prisma } from '@/services/prisma'

type Context = {
  db: PrismaClient
}

export const createTRPCContext = cache(async () => {
  return {
    db: prisma,
  }
})

const t = initTRPC.context<Context>().create({
  transformer: superjson,
})

export const publicProcedure = t.procedure
export const { router, createCallerFactory } = t
