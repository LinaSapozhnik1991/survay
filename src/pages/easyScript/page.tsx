'use client'
import React from 'react'

import MainSection from '@/widgets/main-feature-section/ui/MainSection'
import ArgumentMain from '@/widgets/argument-main-section'
import EconomyFeatureSection from '@/widgets/economy-feature-section/ui/EconomyFeatureSection'
import ArgumentActions from '@/widgets/argument-actions-section/ui/ArgumentActions'
import AnalystFeatureSection from '@/widgets/analyst-feature-section/ui/AnalystFeatureSection'
import FeedbackSection from '@/widgets/feedback-section/ui'
import FooterMain from '@/widgets/footerMain'
import SentenseFeatureSection from '@/widgets/sentense-feature-section'
import ScrollUp from '@/shared/ui/ScrollUp/ScrollUp'

import styles from './EasyScript.module.scss'

const EasyScript = () => {
  return (
    <div className={styles.scripts}>
      <MainSection />
      <div className={styles.easy}>
        <ArgumentMain />
      </div>
      <div className={styles.economy}>
        <EconomyFeatureSection />
      </div>
      <div className={styles.easy}>
        <ArgumentActions />
      </div>
      <AnalystFeatureSection />

      <FeedbackSection />
      <div className={styles.easy}>
        <SentenseFeatureSection />
      </div>
      <div className={styles.CaretUp}>
        <ScrollUp />
      </div>
      <FooterMain />
    </div>
  )
}

export default EasyScript
