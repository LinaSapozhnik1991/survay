import React from 'react'

import OpenSurvey from '../../../features/open-survey'

import styles from './EconomyFeature.module.scss'

const EconomyFeatureSection = () => {
  return (
    <div className={styles.economy}>
      <div className={styles.economyText}>
        <h2 className={styles.economyTitle}>
          Сэкономьте время РОПа на создание скриптов, и он сосредоточится на
          главном — выполнение плана
        </h2>
        <div className={styles.line}></div>
        <div className={styles.dopInfo}>
          <div className={styles.dopIntoSmallText}>
            Тратите часы на написание и обновление скриптов вручную? Наш сервис
            упрощает процесс: удобный интерфейс, шаблоны и возможность
            совместной работы. Теперь Вы сможете сосредоточиться на том, что
            действительно важно - на продажах.
          </div>
          <div className={styles.dopInfoBigText}>
            Попробуйте бесплатно, а сэкономленное время используйте, как Вам
            нравится!
          </div>
        </div>
      </div>
      <div className={styles.btn}>
        <OpenSurvey size="mediumXL">Попробовать бесплатно</OpenSurvey>
      </div>
    </div>
  )
}

export default EconomyFeatureSection
