import React, { FC } from 'react'

import SegmentedControl from '@/shared/ui/SegmentedControl/SegmentedControl'
import { LoginForm } from '@/features/login-dialog'
import { RegisterForm } from '@/features/register-dialog'

import styles from './AuthSegmentedControl.module.scss'

type AuthSegmentedControlProps = {
  selectedOption: string
  onSelect: (option: string) => void
}

const AuthSegmentedControl: FC<AuthSegmentedControlProps> = ({
  selectedOption,
  onSelect
}) => {
  const options = ['Регистрация', 'Вход']

  return (
    <div className={styles.Auth}>
      <div className={styles.SegmentedControl}>
        <SegmentedControl
          variant="line"
          options={options}
          selected={selectedOption}
          onSelect={onSelect}
        />
      </div>
      <div className={styles.horizontalLine}></div>
      {selectedOption === 'Регистрация' ? <RegisterForm /> : <LoginForm />}
    </div>
  )
}

export default AuthSegmentedControl
