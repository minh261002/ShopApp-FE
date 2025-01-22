import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/dang-nhap') {
    const url = request.nextUrl.clone();
    url.pathname = '/auth/dang-nhap';
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
