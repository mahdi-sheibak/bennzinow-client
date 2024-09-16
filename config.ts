import { z } from "zod";

const ConfigSchema = z.object({
  apiUrl: z.string(),
});

export const config = ConfigSchema.parse({
  apiUrl: process.env.EXPO_PUBLIC_API_URL,
});
