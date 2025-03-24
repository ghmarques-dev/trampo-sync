import Google from 'next-auth/providers/google'
import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'

import { env } from '@/utils/env'

import { prisma } from '../prisma'

const providers = [
  Google({
    clientId: env.google.clientId,
    clientSecret: env.google.clientSecret,
  }),
]

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  trustHost: true,
  providers,
  callbacks: {
    async jwt({ token, account, user }) {
      if (account && user) {
        token.id = user.id
        token.email = user.email
        token.name = user.name
        token.image = user.image
      }

      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string
        session.user.email = token.email as string
        session.user.name = token.name
        session.user.image = token.image as string
      }
      return session
    },
  },
})
