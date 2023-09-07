import { z } from 'zod'

export const schemaForResetPassword = z
  .object({
    password: z
      .string()
      .nonempty('O campo senha é obrigatório')
      .min(
        8,
        'A senha deve ter no mínimo 8 caracteres, com pelo menos uma letra maiúscula e um número.',
      )
      .regex(
        /[A-Z]/,
        'A senha deve ter no mínimo 8 caracteres, com pelo menos uma letra maiúscula e um número.',
      )
      .regex(
        /\d/,
        'A senha deve ter no mínimo 8 caracteres, com pelo menos uma letra maiúscula e um número.',
      ),
    confirmPassword: z.string(),
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    message: 'As senhas não são iguais',
    path: ['confirmPassword'],
  })

export type resetProps = z.infer<typeof schemaForResetPassword>
