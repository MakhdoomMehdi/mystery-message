import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, "Message should be at least 10 characters ")
    .max(300, "Message should be at max 300 characters"),
});
