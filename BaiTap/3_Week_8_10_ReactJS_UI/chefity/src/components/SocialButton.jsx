import styles from './SocialButton.module.css'

const SocialButton = ({ ariaLabel, icon, provider, onClick }) => (
  <button
    type="button"
    className={`${styles.socialButton} ${styles[provider]}`}
    onClick={onClick}
    aria-label={ariaLabel}
  >
    <span className={styles.icon}>{icon}</span>
  </button>
)

export default SocialButton
