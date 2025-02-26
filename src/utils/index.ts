import { twMerge } from 'tailwind-merge'
import { type ClassValue, clsx } from 'clsx'

import { env } from './env'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type GetUrlProps = {
  path?: string
}

export function getUrl({ path }: GetUrlProps) {
  const baseUrl = env.application.appUrl

  const normalizedPath = path && !path.startsWith('/') ? `/${path}` : path || ''
  return `${baseUrl}${normalizedPath}`
}

type FormatNameForAvatarProps = {
  name: string
}

export function formatNameForAvatar({ name }: FormatNameForAvatarProps) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((item) => item[0].toUpperCase())
    .join('')
}

type AddEllipsisInEmailProps = {
  text: string
  maxLength: number
}

export function addEllipsisInEmail({
  maxLength,
  text,
}: AddEllipsisInEmailProps) {
  if (text.length <= maxLength) {
    return text
  }

  const [user, domain] = text.split('@')

  if (!user || !domain) {
    return text
  }

  const availableLength = maxLength - domain.length - 4
  if (availableLength <= 0) return `...@${domain}`

  return `${user.slice(0, availableLength)}...@${domain}`
}

type ReturnFirstNameProps = {
  fullName: string
}

export function returnFirstName({ fullName }: ReturnFirstNameProps): string {
  if (!fullName.trim()) return ''

  const firstName = fullName.split(' ')[0]
  const firstLetterUppercase = firstName.charAt(0).toUpperCase()
  const restOfName = firstName.slice(1).toLowerCase()

  return firstLetterUppercase + restOfName
}
