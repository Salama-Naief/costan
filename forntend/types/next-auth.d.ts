import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    expires: string;
    id: number;
    jwt: string;
    user: {
      name: string;
      email: string;
      image: string;
    } | null;
  }
}
