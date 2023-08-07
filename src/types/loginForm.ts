import { z } from 'zod'

export const schemaLogin = z.object({
  email: z.string().email('Por favor digite um email válido!'),
  password: z.string().nonempty('Por favor, preencha sua senha!'),
})

export type typesForLogin = z.infer<typeof schemaLogin>
