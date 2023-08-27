import { db } from "@/utils/db";
import { publicProcedure, router } from "./trpc";
import { z } from "zod";
export const appRouter = router({
  getBooks: publicProcedure.query(async () => {
    const res = await db.book.findMany();
    return res;
  }),
  createBook: publicProcedure.mutation(async (args) => {
    const res = await db.book.create({
      data: {
        coverImage:
          "https://utfs.io/f/40a1656e-6163-4c54-b027-fcc2b7efec77_juanjo-jaramillo-mZnx9429i94-unsplash.jpg",
        description: "Test",
        name: "Test Book",
        pdf: "https://utfs.io/f/b3037320-7355-485d-952c-389d14e8c9b6_Addison_Wesley_The_Object_Orient_Thought_Process.pdf",
        rating: 4,
        readTime: 120,
        authors: ["sahil", "saini"],
        createdAt: new Date(Date.now()),
      },
    });
    if (res)
      return {
        success: true,
      };
  }),
});

export type AppRouter = typeof appRouter;
