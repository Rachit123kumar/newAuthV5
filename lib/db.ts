// // import { PrismaClient } from "@prisma/client";

// import { PrismaClient } from "@prisma/client";

// // Extend the global object for TypeScript
// declare global {
//   // Declare prisma on the global object only in development to avoid errors
//   var prisma: PrismaClient | undefined;
// }

// // Create a single PrismaClient instance
// const prisma = globalThis.prisma || new PrismaClient();

// // Cache the instance in development, to avoid hot-reloading issues
// if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

// export const db = prisma;


import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

declare const globalThis: {
  prisma?: PrismaClient;
};

// Use a singleton pattern to initialize PrismaClient
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient(); // For production, just create a new instance
} else {
  if (!globalThis.prisma) {
    globalThis.prisma = new PrismaClient(); // Reuse the same instance during development
  }
  prisma = globalThis.prisma;
}

export const db = prisma; // Export `db` instead of `prisma`

