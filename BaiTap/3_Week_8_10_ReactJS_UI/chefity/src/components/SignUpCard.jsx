import { useMemo, useState } from 'react'
import SocialButton from './SocialButton.jsx'
import styles from './SignUpCard.module.css'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const SOCIAL_PROVIDERS = [
  { provider: 'google', icon: 'G' },
  { provider: 'facebook', icon: 'f' },
  { provider: 'apple', icon: '' },
]

const SignUpCard = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    acceptedTerms: false,
  })

  const isFormValid = useMemo(
    () =>
      formData.firstName.trim().length > 0 &&
      formData.lastName.trim().length > 0 &&
      EMAIL_PATTERN.test(formData.email) &&
      formData.password.length >= 8 &&
      formData.acceptedTerms,
    [formData],
  )

  const handleChange = (field) => (event) => {
    const value = field === 'acceptedTerms' ? event.target.checked : event.target.value

    setFormData((previousState) => ({
      ...previousState,
      [field]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!isFormValid) {
      return
    }

    window.alert(`Account created for ${formData.firstName} ${formData.lastName}`)
  }

  const handleSocialClick = (provider) => {
    window.alert(`Continue with ${provider}`)
  }

  return (
    <section className={styles.panel}>
      <h1 className={styles.heading}>Sign up</h1>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.rowPair}>
          <label className={styles.fieldLabel} htmlFor="firstName">
            <span className={styles.labelText}>First name</span>
            <input
              id="firstName"
              className={styles.input}
              type="text"
              value={formData.firstName}
              onChange={handleChange('firstName')}
              placeholder="Input first name"
              required
            />
          </label>

          <label className={styles.fieldLabel} htmlFor="lastName">
            <span className={styles.labelText}>Last name</span>
            <input
              id="lastName"
              className={styles.input}
              type="text"
              value={formData.lastName}
              onChange={handleChange('lastName')}
              placeholder="Input last name"
              required
            />
          </label>
        </div>

        <label className={styles.fieldLabel} htmlFor="email">
          <span className={styles.labelText}>Email</span>
          <input
            id="email"
            className={styles.input}
            type="email"
            value={formData.email}
            onChange={handleChange('email')}
            placeholder="example.email@gmail.com"
            required
          />
        </label>

        <label className={styles.fieldLabel} htmlFor="password">
          <span className={styles.labelText}>Password</span>
          <input
            id="password"
            className={styles.input}
            type="password"
            value={formData.password}
            onChange={handleChange('password')}
            placeholder="Enter at least 8+ characters"
            minLength={8}
            required
          />
        </label>

        <label className={styles.checkboxLabel} htmlFor="acceptedTerms">
          <input
            id="acceptedTerms"
            className={styles.checkbox}
            type="checkbox"
            checked={formData.acceptedTerms}
            onChange={handleChange('acceptedTerms')}
          />
          <span className={styles.checkboxText}>
            By signing up, I agree with the{' '}
            <a href="#" className={styles.link}>
              Terms of Use
            </a>{' '}
            &amp;{' '}
            <a href="#" className={styles.link}>
              Privacy Policy
            </a>
          </span>
        </label>

        <button className={styles.submitButton} type="submit" disabled={!isFormValid}>
          Sign up
        </button>
      </form>

      <p className={styles.loginText}>
        Already have an account?{' '}
        <a href="#" className={styles.loginLink}>
          Log in
        </a>
      </p>

      <div className={styles.dividerWrapper}>
        <span className={styles.dividerLine} />
        <span className={styles.dividerText}>OR</span>
        <span className={styles.dividerLine} />
      </div>

      <div className={styles.socialGroup}>
        {SOCIAL_PROVIDERS.map((entry) => (
          <SocialButton
            key={entry.provider}
            provider={entry.provider}
            icon={entry.icon}
            ariaLabel={`Continue with ${entry.provider}`}
            onClick={() => handleSocialClick(entry.provider)}
          />
        ))}
      </div>
    </section>
  )
}

export default SignUpCard
