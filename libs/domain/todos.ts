import { z } from "zod";

export const TodosSchema = z.array(
  z.object({
    userId: z.number(),
    id: z.number(),
    title: z.string(),
    completed: z.boolean(),
  })
);

export type Todos = z.infer<typeof TodosSchema>;
