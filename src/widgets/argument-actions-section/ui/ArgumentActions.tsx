import React from 'react'

import styles from './ArgumentActions.module.scss'
const ArgumentActions = () => {
  return (
    <section className={styles.argumentActions}>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.cardHead}>
            <h2 className={styles.cardTitle}>
              Обучайте новых менеджеров и выводите их на линию за полдня
            </h2>

            <p className={styles.cardSubtitle}>
              Готовые скрипты и блок обучения помогут новичкам быстро начать
              продавать
            </p>
            <p className={styles.description}>
              Новые менеджеры долго входят в должность, не приносят результатов,
              не зарабатывают и выгорают? Наш сервис поможет Вам быстро обучать
              сотрудников, а новым менеджерам начать закрывать сделки уже в
              первые дни.
            </p>
          </div>

          <p className={styles.cardEnd}>
            Ускорьте обучение и повысьте выживаемость стажеров уже сегодня!
          </p>
        </div>

        <div className={`${styles.card} ${styles.cardAlt}`}>
          <div className={styles.cardHead}>
            <h2 className={styles.cardTitle}>
              Стандартизируйте продажи и управляйте результатами
            </h2>

            <p className={styles.cardSubtitle}>
              Единые скрипты для всей команды это возможность достигать планов
              продаж
            </p>
            <p className={styles.description}>
              Каждый менеджер работает по-своему, и результаты <br />
              непредсказуемы? Внедрите единые скрипты для команды. Каждый звонок
              — по стандарту. Контролируйте конверсию, выручку и прогнозируйте
              результат.
            </p>
          </div>

          <p className={styles.cardEnd}>
            Начните стандартизацию сегодня, чтобы <br /> получить рост выручки к
            концу недели!
          </p>
        </div>
      </div>
    </section>
  )
}

export default ArgumentActions
