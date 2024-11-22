import GoogleProvider from "next-auth/providers/google";
import { User, Account, Profile } from "next-auth";
import {AdapterUser } from "next-auth/adapters";
import db from "@repo/db/client";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        })
    ],
    callbacks: {
      async signIn({ user, account }: { user: User | AdapterUser; account: Account | null; profile?: Profile; email?: { verificationRequest?: boolean }; credentials?: Record<string, any> }): Promise<boolean> {
        if (!user || !user.email) {
          return false;
        }

        await db.merchant.upsert({
          select: {
            id: true
          },
          where: {
            email: user.email
          },
          create: {
            email: user.email,
            name: user.name,
            auth_type: account?.provider === "google" ? "Google" : "Github" // Use a prisma type here
          },
          update: {
            name: user.name,
            auth_type: account?.provider === "google" ? "Google" : "Github" // Use a prisma type here
          }
        });

        return true;
      }
    },
    secret: process.env.NEXTAUTH_SECRET || "secret"
  }