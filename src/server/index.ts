import { db } from "@/utils/db";
import { publicProcedure, router } from "./trpc";
import { z } from "zod";
export const appRouter = router({
  getBooks: publicProcedure.query(async () => {
    const res = await db.book.findMany();
    return res;
  }),
  createBook: publicProcedure
    .input(
      z.object({
        coverImage: z.string(),
        description: z.string(),
        name: z.string(),
        pdf: z.string(),
        rating: z.number(),
        readTime: z.number(),
        authors: z.array(z.string()),
      })
    )
    .mutation(async (args) => {
      const { input } = args;
      const res = await db.book.create({
        data: {
          ...input,
        },
      });
      if (res)
        return {
          success: true,
        };
    }),
  getBook: publicProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(async (args) => {
      const res = await db.book.findUnique({
        where: {
          id: args?.input?.id,
        },
      });
      return res;
    }),
});

export type AppRouter = typeof appRouter;
