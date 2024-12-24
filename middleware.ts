import { withAuth } from "next-auth/middleware"

export default withAuth({
  callbacks: {
    authorized: ({ req }) => {
      const pathname = req.nextUrl.pathname
      return pathname.startsWith("/admin")
    }
  }
})

export const config = {
  matcher: ["/admin/:path*"]
}