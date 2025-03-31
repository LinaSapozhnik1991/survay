import React from 'react'

import OpenSurvey from '@/features/open-survey'

import { Logo } from '../../../shared/assets/icons'

import styles from './MainSection.module.scss'

const MainSection = () => {
  return (
    <section className={styles.main}>
      <div className={styles.mainHead}>
        <Logo />
        <div className={styles.mainText}>
          <div className={styles.mainText_name}>
            <p className={styles.easyScript}>EasyScript</p>
            <p className={styles.dopText}>
              Создайте скрипт с эффектом живой беседы
            </p>
          </div>

          <div className={styles.quoteContainer}>
            <blockquote className={styles.quote}>
              По опыту компаний из пятидесяти разных ниш, с которыми я работал,
              правильно внедрённые скрипты помогают повысить конверсию в среднем
              на 35%.
            </blockquote>
            <cite className={styles.autor}>
              Алексей Гичко
              <br />
              скриптолог, тренер отделов продаж
            </cite>
          </div>
        </div>
      </div>
      <div className={styles.btn}>
        <OpenSurvey primary size="mediumXXL">
          Попробовать бесплатно
        </OpenSurvey>
      </div>
    </section>
  )
}

export default MainSection
