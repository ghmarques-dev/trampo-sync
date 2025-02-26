import { NextRequest, NextResponse } from 'next/server'

import { getUrl } from './utils/index'

export default function middleware(request: NextRequest) {
  const token =
    request.cookies.get('authjs.session-token') ||
    request.cookies.get('next-auth.session-token')

  const { pathname } = request.nextUrl

  if (pathname === '/auth' && token) {
    return NextResponse.redirect(new URL(getUrl({ path: '/app' }), request.url))
  }

  if (pathname.startsWith('/app') && !token) {
    return NextResponse.redirect(
      new URL(getUrl({ path: '/auth' }), request.url),
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
