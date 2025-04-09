import React from 'react'

import OpenSurvey from '@/features/open-survey'

import styles from './AnalystFeature.module.scss'

const AnalystFeatureSection = () => {
  return (
    <div className={styles.analyst}>
      <div className={styles.image}></div>
      <div className={styles.analystText}>
        <h2 className={styles.analystTitle}>
          Знайте, что работает, а что — нет
        </h2>
        <p className={styles.subtitle}>
          Анализируйте эффективность скриптов и улучшайте свои продажи
        </p>
        <div className={styles.line}></div>

        <div className={styles.dopIntoSmallText}>
          <p>
            Не знаете, какие фразы и подходы работают лучше? Наш сервис
            предоставляет подробную аналитику использования скриптов. Вы
            увидите, какие фразы приводят к успеху, а какие нужно улучшить, и
            сможете постоянно оптимизировать свои продажи
          </p>
        </div>

        <div className={styles.dopInfoBigText}>
          <p> Начните анализировать и улучшать! </p>
        </div>

        <div className={styles.btn}>
          <OpenSurvey primary size="mediumXL">
            Попробовать бесплатно
          </OpenSurvey>
        </div>
      </div>
    </div>
  )
}

export default AnalystFeatureSection
