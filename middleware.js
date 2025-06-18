import { NextResponse } from 'next/server'

export function middleware(request) {
  // Get the protocol from headers
  const proto = request.headers.get('x-forwarded-proto')
  const host = request.headers.get('host')
  
  // Force HTTPS in production
  if (proto === 'http' && process.env.NODE_ENV === 'production') {
    return NextResponse.redirect(`https://${host}${request.nextUrl.pathname}${request.nextUrl.search}`, 301)
  }
  
  // Add security headers to all responses
  const response = NextResponse.next()
  
  // Force upgrade all requests to HTTPS
  response.headers.set(
    'Content-Security-Policy',
    "upgrade-insecure-requests;"
  )
  
  return response
}

export const config = {
  matcher: [
    // Match all paths except static files and images
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
