import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import cx from 'classnames'

import styles from './Button.module.scss'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  primary?: boolean
  backgroundColor?: string
  size?: 'small' | 'medium' | 'large'
  label?: string
  as?: React.ElementType
  children?: ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  disabled = false,
  size = 'medium',
  children,
  as: Component = 'button',
  ...props
}) => {
  const buttonClass = cx([
    styles.button,
    {
      [styles.small]: size === 'small',
      [styles.medium]: size === 'medium',
      [styles.large]: size === 'large',
      [styles.primary]: primary,
      [styles.disabled]: disabled,
      [styles.default]: !primary
    }
  ])

  return (
    <Component className={buttonClass} disabled={disabled} {...props}>
      {children}
    </Component>
  )
}
