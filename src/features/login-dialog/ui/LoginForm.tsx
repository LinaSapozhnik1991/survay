/* eslint-disable import/named */
'use client'
import React, { FC, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'

import { InputSizes, InputTypes } from '@/shared/ui/Input/input.types'
import Input from '@/shared/ui/Input/Input'
import { Button } from '@/shared/ui/Button'
import { Check, Eye, EyeClosed } from '@/shared/assets/icons'

import { loginSchema } from '../model/validations'

import styles from './Login.module.scss'

type FormData = {
  email: string
  password: string
}

const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange'
  })

  const [showPassword, setShowPassword] = useState(false)
  const [registrationSuccess, setRegistrationSuccess] = useState(false)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit: SubmitHandler<FormData> = data => {
    setRegistrationSuccess(true)
  }
  const email = watch('email')
  const password = watch('password')
  const isFormFilled = email && password && !errors.email && !errors.password

  return (
    <div className={styles.login}>
      <div className={styles.modalForm}>
        {registrationSuccess && (
          <span className={styles.alarm}>
            Вы успешно зарегистрированы! Войдите в систему
          </span>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.containerInput}>
            <label htmlFor="email">Электронная почта:</label>
            <div className={styles.inputWrapper}>
              <Input
                id="email"
                {...register('email')}
                style={{ width: '400px' }}
                placeholder="Введите email"
                type={InputTypes.Email}
                inputSize={InputSizes.Large}
                error={!!errors.email}
              />
              {errors.email ? (
                <span className={styles.error}>{errors.email.message}</span>
              ) : watch('email') ? (
                <Check className={styles.checkIcon} />
              ) : null}
            </div>
          </div>

          <div className={styles.containerInput}>
            <label htmlFor="password">Пароль:</label>
            <div className={styles.inputWrapper}>
              <Input
                id="password"
                {...register('password')}
                inputSize={InputSizes.Large}
                style={{ width: '400px' }}
                placeholder="Введите пароль"
                type={showPassword ? InputTypes.Text : InputTypes.Password}
                error={!!errors.password}
              />
              <div
                className={styles.eyeIcon}
                onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <Eye /> : <EyeClosed />}
              </div>
              {errors.password ? (
                <span className={styles.error}>{errors.password.message}</span>
              ) : watch('password') ? (
                <Check className={styles.checkIcon} />
              ) : null}
            </div>
          </div>

          <div className={styles.form_bottom}>
            <div className={styles.linkWrapper}>
              <Link href="/forgot-password">Забыли пароль?</Link>
            </div>
            <div className={styles.btn}>
              <Button
                size="large"
                type="submit"
                disabled
                primary={!!isFormFilled}>
                Войти
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
