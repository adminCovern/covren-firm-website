import { NextResponse } from 'next/server'

export function middleware(request) {
  const response = NextResponse.next()
  
  // Force ALL resources to upgrade to HTTPS - no exceptions
  response.headers.set(
    'Content-Security-Policy',
    "upgrade-insecure-requests;"
  )
  
  // Additional security headers
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  
  return response
}

// Apply to EVERYTHING - including images, static files, etc.
export const config = {
  matcher: '/:path*',
}
