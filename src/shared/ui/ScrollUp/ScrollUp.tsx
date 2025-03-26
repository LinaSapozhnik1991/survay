import React from 'react'

import { CaretUp } from '../../assets/icons'

import styles from './ScrollUp.module.scss'

const ScrollUp: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className={styles.CaretUp} onClick={scrollToTop}>
      <CaretUp />
    </div>
  )
}
export default ScrollUp
