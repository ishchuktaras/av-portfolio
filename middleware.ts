import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Zjednodušení middleware - Firebase Auth se stará o autentizaci
export function middleware(request: NextRequest) {
  // Pouze předat všechny požadavky
  return NextResponse.next()
}

// Konfigurace cest, které by měly být zpracovány middlewarem
export const config = {
  matcher: ["/admin/:path*"],
}

