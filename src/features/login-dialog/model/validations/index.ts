import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().nonempty('Поле не заполнено').email('Некорректные данные'),

  password: z
    .string()
    .min(8, 'Пароль должен содержать минимум 8 символов')
    .nonempty('Поле не заполнено')
})
