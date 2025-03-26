import { z } from 'zod'

export const registrationSchema = z
  .object({
    name: z
      .string()
      .nonempty('Поле не заполнено')
      .min(2, 'Некорректные данные ')
      .regex(/^[A-Za-zА-Яа-яЁё\s]+$/, 'Некорректные данные'),

    company: z.string().optional(),

    phone: z
      .string()
      .nonempty('Поле не заполнено')
      .transform(value => value.replace(/\D/g, ''))
      .refine(value => {
        if (value.length < 10 || value.length > 15) {
          return false
        }
        return /^\d{1}\d{9,14}$/.test(value)
      }, 'Некорректные данные'),
    email: z

      .string()
      .nonempty('Поле не заполнено')
      .email('Некорректные данные'),

    password: z
      .string()
      .nonempty('Поле не заполнено')
      .min(8, 'Пароль должен содержать минимум 8 символов'),

    confirmPassword: z.string().nonempty('Поле не заполнено'),

    agreement: z.boolean().refine(val => val === true, {
      message: ' '
    })
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        path: ['confirmPassword'],
        message: 'Пароли не совпадают',
        code: z.ZodIssueCode.custom
      })
    }
  })
