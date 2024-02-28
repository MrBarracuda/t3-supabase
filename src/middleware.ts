import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { env } from "@/env";
import { PROTECTED_PATH } from "@/lib/types";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          request.cookies.set({
            name,
            value,
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          response.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name: string, options: CookieOptions) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          request.cookies.set({
            name,
            value: "",
            ...options,
          });
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          response.cookies.set({
            name,
            value: "",
            ...options,
          });
        },
      },
    },
  );

  const { data } = await supabase.auth.getSession();
  const url = new URL(request.url);

  if (data.session) {
    if (url.pathname === "/auth") {
      return NextResponse.redirect(new URL("/", request.url));
    }

    return response;
  } else {
    if (PROTECTED_PATH.includes(url.pathname)) {
      return NextResponse.redirect(
        new URL("/auth?next=" + url.pathname, request.url),
      );
    }

    return response;
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
