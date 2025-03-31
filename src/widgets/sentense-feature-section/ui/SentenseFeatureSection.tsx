import React from 'react'

import OpenSurvey from '@/features/open-survey'

import styles from './SentenseFeature.module.scss'

const SentenseFeatureSection = () => {
  return (
    <div className={styles.sentense}>
      <div className={styles.sentenseHead}>
        <h2 className={styles.sentenseTitle}>
          Хотите получить максимальный результат?
        </h2>
        <p className={styles.dopInfo}>
          Оформите годовую подписку и получите в подарок бонус от автора сервиса
          Алексея Гичко, специалиста-скриптолога, тренера отдела продаж со
          стажем более 20 лет
        </p>
      </div>
      <div className={styles.line}></div>

      <div className={styles.cards}>
        <div className={`${styles.card} ${styles.cardAudit}`}>
          <h5 className={styles.cardTitle}>Аудит Ваших продаж</h5>
        </div>
        <div className={`${styles.card} ${styles.cardGuide}`}>
          <h5 className={styles.cardTitle}>
            Гайд «Семь неочевидных точек роста отдела продаж»
          </h5>
        </div>
        <div className={` ${styles.cardConsult} ${styles.card}`}>
          <h5 className={styles.cardTitle}>
            Пять консультаций по разработке ваших скриптов
          </h5>
        </div>
      </div>
      <OpenSurvey primary size="smallXL">
        Отправить заявку
      </OpenSurvey>
    </div>
  )
}

export default SentenseFeatureSection
