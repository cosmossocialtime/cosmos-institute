import { z } from 'zod'

export const schemaForgotPassword = z.object({
  email: z.string().email('Por favor digite um email válido!'),
})

export type typesForForgotPassword = z.infer<typeof schemaForgotPassword>
