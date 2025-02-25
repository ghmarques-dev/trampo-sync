import { twMerge } from 'tailwind-merge'
import { type ClassValue, clsx } from 'clsx'

import { env } from './env'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getUrl(path?: string) {
  const baseUrl = env.application.appUrl

  const normalizedPath = path && !path.startsWith('/') ? `/${path}` : path || ''
  return `${baseUrl}${normalizedPath}`
}
