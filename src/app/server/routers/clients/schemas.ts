import { z } from 'zod'

export const createClientSchema = z.object({
  userId: z.string(),
  name: z.string().min(2),
  email: z.string().email().optional().or(z.literal('')),
  phone: z.string().optional().or(z.literal('')),
})

export const updateClientSchema = z.object({
  clientId: z.string(),
  name: z.string().min(2),
  email: z.string().email().optional().or(z.literal('')),
  phone: z.string().optional().or(z.literal('')),
})

export const deleteClientSchema = z.object({
  clientId: z.string(),
})

export const getOneClientSchema = z.object({
  clientId: z.string(),
})
