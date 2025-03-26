import React from 'react'

import { Logotype, Telegramm, VK, WhatsApp } from '@/shared/assets/icons'

import styles from './FooterMain.module.scss'
const FooterMain = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInfo}>
        <div className={styles.logo}>
          <Logotype />
        </div>
      </div>
      <div className={styles.contacts}>
        <div className={styles.messengers}>
          <a
            href="https://t.me/yourtelegramusername"
            target="_blank"
            rel="noopener noreferrer">
            <Telegramm />
          </a>
          <a
            href="https://vk.com/yourvkusername"
            target="_blank"
            rel="noopener noreferrer">
            <VK />
          </a>
          <a
            href="https://wa.me/yourwhatsappnumber"
            target="_blank"
            rel="noopener noreferrer">
            <WhatsApp />
          </a>
        </div>
        <div className={styles.mail}>
          <a href="mailto:easyscript@mail.ru">easyscript@mail.ru</a>
          <p>© 2025 easyscript</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterMain
