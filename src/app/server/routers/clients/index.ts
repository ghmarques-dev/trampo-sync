import {
  createClientSchema,
  deleteClientSchema,
  getOneClientSchema,
  updateClientSchema,
} from './schemas'

import { publicProcedure, router } from '../../trpc'

export const clientRouter = router({
  createClient: publicProcedure
    .input(createClientSchema)
    .mutation(async ({ input, ctx }) => {
      const client = await ctx.db.client.create({
        data: {
          userId: input.userId,
          name: input.name,
          email: input.email ?? '',
          phone: input.phone ?? '',
        },
      })

      return client
    }),

  updateClient: publicProcedure
    .input(updateClientSchema)
    .mutation(async ({ input, ctx }) => {
      const client = await ctx.db.client.update({
        where: {
          id: input.clientId,
        },
        data: {
          name: input.name,
          email: input.email,
          phone: input.phone,
        },
      })

      return client
    }),

  deleteClient: publicProcedure
    .input(deleteClientSchema)
    .mutation(async ({ input, ctx }) => {
      await ctx.db.client.delete({
        where: {
          id: input.clientId,
        },
      })
    }),

  getAllClients: publicProcedure.query(async ({ ctx }) => {
    const clients = await ctx.db.client.findMany()

    return clients
  }),

  getOneClient: publicProcedure
    .input(getOneClientSchema)
    .query(async ({ input, ctx }) => {
      const client = await ctx.db.client.findFirst({
        where: {
          id: input.clientId,
        },
      })

      return client
    }),
})
