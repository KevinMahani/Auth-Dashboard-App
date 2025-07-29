import { z } from 'zod'

export const loginSchema = z.object({
  phone: z.string().regex(/^09\d{9}$/, 'Invalid phone number')
})

export type LoginSchema = z.infer<typeof loginSchema>
