import { z } from "zod";

export const verifySchema = z.object({
  code: z.string().min(6, "Verification code must be at leasst 6 digits "),
});
