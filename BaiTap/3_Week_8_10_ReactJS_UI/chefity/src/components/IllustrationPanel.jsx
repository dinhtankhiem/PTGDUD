import styles from './IllustrationPanel.module.css'

const IllustrationPanel = () => (
  <aside className={styles.panel}>
    <div className={styles.decorativeTop} />
    <div className={styles.heroScene}>
      <div className={styles.lineRing} />
      <div className={styles.heroFigure}>
        <div className={styles.head}>
          <div className={styles.eye} />
          <div className={styles.eye} />
        </div>
        <div className={styles.torso} />
        <div className={styles.arms}>
          <div className={styles.armLeft} />
          <div className={styles.armRight} />
        </div>
        <div className={styles.legs}>
          <div className={styles.leg}></div>
          <div className={styles.leg}></div>
        </div>
      </div>
      <div className={styles.sparkOne} />
      <div className={styles.sparkTwo} />
    </div>
    <p className={styles.panelText}>Create something bold with every click.</p>
    <div className={styles.badge}>
      <span className={styles.badgeIcon}>V</span>
      Made with Vite
    </div>
  </aside>
)

export default IllustrationPanel
