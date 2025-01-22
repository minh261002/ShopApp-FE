import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/dang-nhap') {
    const url = request.nextUrl.clone();
    url.pathname = '/auth/dang-nhap';
    return NextResponse.rewrite(url);
  }

    if (pathname === '/doi-mat-khau') {
        const url = request.nextUrl.clone();
        url.pathname = '/auth/doi-mat-khau';
        return NextResponse.rewrite(url);
    }

    if (pathname === '/quen-mat-khau') {
        const url = request.nextUrl.clone();
        url.pathname = '/auth/quen-mat-khau';
        return NextResponse.rewrite(url);
    }
    
    if (pathname === '/dang-ky') {
        const url = request.nextUrl.clone();
        url.pathname = '/auth/dang-ky';
        return NextResponse.rewrite(url);
    }

  return NextResponse.next();
}
