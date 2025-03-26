import React from 'react'

import styles from './ArgumentMain.module.scss'
const ArgumentMain = () => {
  return (
    <section className={styles.argumentsSection}>
      <h2>
        Сервис EasyScript поможет с легкостью решить
        <br /> самые частые проблемы в продажах
      </h2>

      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.cardHead}>
            <h2 className={styles.cardTitle}>
              Закрывайте больше сделок с профессиональными скриптами продаж
            </h2>

            <p className={styles.cardSubtitle}>
              Превратите каждый звонок в успешную сделку с помощью готовых
              шаблонов и проверенных стратегий
            </p>
            <p className={styles.description}>
              Теряете клиентов из-за неумелых переговоров? Создайте рабочие
              скрипты с нашим сервисом! Готовые шаблоны, проверенные фразы и
              четкая структура диалога быстро повысят конверсию.
            </p>
          </div>

          <h2 className={styles.cardEnd}>
            Попробуйте бесплатно и увеличьте продажи!
          </h2>
        </div>

        <div className={`${styles.card} ${styles.cardAlt}`}>
          <div className={styles.cardHead}>
            <h2 className={styles.cardTitle}>
              Вдохновляйте свою команду и берите с ними новые высоты
            </h2>

            <p className={styles.cardSubtitle}>
              Понятные скрипты и уверенность в каждом звонке - гарантия успеха
              ваших менеджеров
            </p>
            <p className={styles.description}>
              Ваши менеджеры теряют мотивацию из-за неудачных переговоров? Наш
              сервис дает им четкий план действий и уверенность в каждом звонке.
              С готовыми скриптами они смогут легко справляться с возражениями и
              закрывать больше сделок.
            </p>
          </div>

          <h2 className={styles.cardEnd}>
            Попробуйте и вдохновите свою команду!
          </h2>
        </div>
      </div>
    </section>
  )
}

export default ArgumentMain
