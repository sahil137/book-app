import { publicProcedure, router } from "./trpc";
import { z } from "zod";
export const appRouter = router({
  getData: publicProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .query((args) => {
      return { data: `This is data: ${args.input.name}` };
    }),
});

export type AppRouter = typeof appRouter;
