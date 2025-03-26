'use client'
import React, { useState, InputHTMLAttributes, useEffect } from 'react'

import { Checked } from '../../assets/icons'

import styles from './Cheсkbox.module.scss'

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  checked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  label?: React.ReactNode
  size?: 'large' | 'medium' | 'small' | 'xsmall'
  error?: boolean
  id?: string
  className?: string
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  size = 'medium',
  error,
  id,
  className,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(checked)

  useEffect(() => {
    setIsChecked(checked)
  }, [checked])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
    onChange(event)
  }

  return (
    <label
      className={`${styles.customCheckbox} ${styles[size]} ${error ? styles.error : ''} ${className || ''}`}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className={styles.checkbox}
        id={id}
        {...props}
      />
      <span
        className={`${styles.checkedIcon} ${isChecked ? styles.checked : ''}`}>
        {isChecked && <Checked />}
      </span>
      {label && <span className={styles.label}>{label}</span>}
      {error}
    </label>
  )
}

export default Checkbox
