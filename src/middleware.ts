import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export default withAuth(
  (req: NextRequest) => {
    // Якщо користувач авторизований, мідлвар дозволить продовжувати відповідно до конфігурації matcher
    // Якщо не авторизований, буде перенаправлення на сторінку логінації
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized({ token }) {
        console.log(token);
        return !!token;
      }
    }
  }
);

export const config = { matcher: ["/profile"] };
