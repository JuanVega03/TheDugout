import { NextResponse } from 'next/server';

export function middleware(request) {
  const cookie = request.headers.get('cookie') || '';
  const isLoggedIn = cookie.includes('authorized=true');
  const isLoginPage = request.nextUrl.pathname === '/login';

  if (!isLoggedIn && !isLoginPage) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = '/login';
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
