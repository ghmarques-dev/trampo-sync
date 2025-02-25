import { cache } from 'react'

import { createHydrationHelpers } from '@trpc/react-query/rsc'

import { makeQueryClient } from '@/app/_trpc/query-client'

import { createCallerFactory, createTRPCContext, router } from '../trpc'

export const appRouter = router({})

export const getQueryClient = cache(makeQueryClient)
const caller = createCallerFactory(appRouter)(createTRPCContext)
export const { trpc, HydrateClient } = createHydrationHelpers<typeof appRouter>(
  caller,
  getQueryClient,
)

export type AppRouter = typeof appRouter
